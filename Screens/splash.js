import { View, Image, ActivityIndicator, Text } from 'react-native';
import tw from 'twrnc';
import { useEffect } from 'react';

export default function Splash(props) {
  const { navigation } = props;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home');
    }, '3000');
  }, [navigation]);

  return (
    <View style={tw`bg-[#ffffff] flex flex-1 justify-center items-center`}>
      <View
        style={tw`bg-[#0CCC83] w-28 h-28 rounded-2xl flex justify-center items-center`}>
        <Image style={tw`w-16 h-16`} source={require('../assets/path54.png')} />
      </View>

      <View style={tw`absolute bottom-10 flex justify-center items-center`}>
        <ActivityIndicator size="large" color="#0CCC83" />
        <Text style={tw`text-[#0CCC83] font-bold mt-4`}> Loading..</Text>
      </View>
    </View>
  );
}
