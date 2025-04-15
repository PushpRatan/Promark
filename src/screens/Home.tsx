import { Text, View, Image } from 'react-native';
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

      <View className="absolute bottom-0 flex h-3/5 w-full items-center justify-start rounded-t-[50px] bg-dark pt-48">
        <View className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#47B0E4]">
          <Image source={require('../../assets/vector.png')} style={{ width: 20, height: 20 }} />
        </View>
        <View className="flex w-80 items-center justify-center">
          <Text className="mb-4 text-center text-3xl font-semibold text-white">
            Connect Your Device
          </Text>
          <Text className="mb-12 text-center text-sm font-normal text-light-gray">
            Make sure your device is powered on and within range. Bluetooth will search for nearby
            devices.
          </Text>
          <Button onPress={() => navigation.navigate('Scanning')}>Start Scanning</Button>
        </View>
      </View>
    </View>
  );
};

export default Home;
