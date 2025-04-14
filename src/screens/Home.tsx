import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from '../components/Button';

type RootStackParamList = {
  Home: undefined;
  Scanning: undefined;
};

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View className="relative h-full">
      {/* <Text className="text-red-500">ifuebwdijbi</Text> */}
      <View className="bg-dark absolute bottom-0 flex h-3/5 w-full items-center justify-center rounded-t-[10%]">
        <View className="flex w-80 items-center justify-center">
          <View className="mb-7 flex h-10 w-10 items-center justify-center rounded-full bg-[#81B2CA]">
            <Image source={require('../../assets/vector.png')} style={{ width: 20, height: 20 }} />
          </View>
          <Text className="mb-4 text-center text-3xl font-semibold text-white">
            Connect Your Device
          </Text>
          <Text className="text-light-gray mb-12 text-center text-sm font-normal">
            Make sure your device is powered on and within range. Bluetooth will search for nearby
            devices.
          </Text>
          {/* <TouchableOpacity
            activeOpacity={0.8}
            className="bg-primary flex h-11 w-full items-center justify-center rounded-full">
            <Text className="text-base font-medium">Start Scanning</Text>
          </TouchableOpacity> */}
          <Button onPress={() => navigation.navigate('Scanning')}>Start Scanning</Button>
        </View>
      </View>
    </View>
  );
};

export default Home;
