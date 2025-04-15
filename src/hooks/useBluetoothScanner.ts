// src/hooks/useBluetoothScanner.ts
import { useState, useRef } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import { BleManager, Device } from 'react-native-ble-plx';

const manager = new BleManager();

export const useBluetoothScanner = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const scannedDeviceIds = useRef<Set<string>>(new Set());

  const requestPermissions = async (): Promise<boolean> => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ]);

      const allGranted = Object.values(granted).every(
        (result) => result === PermissionsAndroid.RESULTS.GRANTED
      );

      if (!allGranted) {
        console.warn('Permissions not granted');
        return false;
      }
    }
    return true;
  };

  const startScan = (timeout: number = 10000): Promise<Device[]> => {
    return new Promise(async (resolve) => {
      const hasPermission = await requestPermissions();
      if (!hasPermission) {
        resolve([]);
        return;
      }

      scannedDeviceIds.current.clear();
      let discovered: Device[] = [];
      setDevices([]);

      manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
          console.error('Scan error:', error);
          manager.stopDeviceScan();
          resolve(discovered);
          return;
        }

        if (device && !scannedDeviceIds.current.has(device.id)) {
          scannedDeviceIds.current.add(device.id);
          discovered.push(device);
          setDevices((prev) => [...prev, device]);
          console.log(`New device: ${device.name || 'Unnamed'} (${device.id})`);
        }
      });

      setTimeout(() => {
        manager.stopDeviceScan();
        console.log('Scan stopped');
        resolve(discovered); // ✅ Return final list
      }, timeout);
    });
  };

  const stopScan = () => {
    manager.stopDeviceScan();
    console.log('Scan manually stopped');
  };

  const cleanup = () => {
    manager.stopDeviceScan();
    manager.destroy();
  };

  return {
    devices,
    startScan,
    stopScan,
    cleanup,
  };
};
