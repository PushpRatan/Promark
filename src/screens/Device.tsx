import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Device } from 'react-native-ble-plx';

type RootStackParamList = {
  Devices: { devices: Device[] };
};

const Devices = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Devices'>>();
  const devices: Device[] = route.params?.devices || [];

  return (
    <View className="flex-1 items-center bg-dark">
      <View className="absolute bottom-0 h-3/5 w-full rounded-t-[50px] bg-light px-6 pt-48">
        <View className="mb-6 flex items-center">
          <View className="mb-4 h-12 w-12 items-center justify-center rounded-full bg-[#47B0E4]">
            <Image source={require('../../assets/vector.png')} style={{ width: 20, height: 20 }} />
          </View>
          <Text className="text-dark-font text-3xl font-semibold">Scanned Devices</Text>
        </View>

        <FlatList
          data={devices}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 30 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={async () => {
                try {
                  const connectedDevice = await item.connect();
                  await connectedDevice.discoverAllServicesAndCharacteristics();
                  console.log(`Connected to ${connectedDevice.name || 'Unnamed'}`);
                  // You can navigate or update state here
                } catch (error) {
                  console.error(`Failed to connect to ${item.name || 'Unnamed'}:`, error);
                }
              }}
              className="mb-2 flex w-full flex-row rounded-lg border-b border-dark-gray bg-white p-4 ">
              <Image
                source={require('../../assets/device.png')}
                style={{ width: 14, height: 22 }}
                className="mr-3"
              />
              <Text className=" text-xl font-medium text-dark-gray">{item.name || 'Unnamed'}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Devices;
