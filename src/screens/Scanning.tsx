import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, Animated } from 'react-native';

type Ripple = {
  id: number;
  anim: Animated.Value;
};

let rippleId = 0;

const Scanning = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    // Function to trigger a burst of 3 ripples
    const triggerRippleBurst = () => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const newRipple = {
            id: rippleId++,
            anim: new Animated.Value(0),
          };

          setRipples((prev) => [...prev, newRipple]);

          Animated.timing(newRipple.anim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }).start(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
          });
        }, i * 600); // Create a ripple every 600ms within the burst
      }
    };

    // Fire the first ripple burst immediately on mount
    triggerRippleBurst();

    // Set up the repeating interval: 2800ms (3 * 600ms for ripples + 1000ms pause)
    const interval = setInterval(triggerRippleBurst, 2800);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  const renderRipples = () =>
    ripples.map(({ id, anim }) => (
      <Animated.View
        key={id}
        className="absolute rounded-full bg-[#81B2CA]"
        style={{
          width: 80,
          height: 80,
          transform: [
            {
              scale: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 3.33],
              }),
            },
          ],
          opacity: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 0],
          }),
        }}
      />
    ));

  return (
    <View className="bg-dark flex h-full items-center">
      <View className="flex h-2/3 w-80 items-center justify-center">
        <View className="relative h-[320px] w-[320px] items-center justify-center">
          {renderRipples()}
          <View className="z-10 flex h-24 w-24 items-center justify-center rounded-full bg-[#81B2CA]">
            <Image source={require('../../assets/vector.png')} style={{ width: 48, height: 48 }} />
          </View>
        </View>
      </View>
      <View className="h-1/3 w-80">
        <Text className="mb-4 text-center text-3xl font-semibold text-white">Scanning...</Text>
        <Text className="text-light-gray mb-12 text-center text-base">
          Make sure your device is powered on and within range. Bluetooth is scanning for available
          devices.
        </Text>
      </View>
    </View>
  );
};

export default Scanning;
