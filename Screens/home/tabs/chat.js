import { View, Text, FlatList, Image } from 'react-native';
import { chatsList } from '../../../data/chatList';
import tw from 'twrnc';

export default function Chat() {
  const renderItem = ({ item }) => {
    const { profileUrl, userName, acitveMsg, lastTime } = item;
    return (
      <View style={tw`my-2 px-2 flex flex-row`}>
        <Image
          style={tw`w-10 h-10 rounded-full`}
          source={{
            uri: profileUrl,
          }}
        />
        <View style={tw`p-1 ml-3 w-[68%]`}>
          <Text style={tw`font-bold`}>{userName}</Text>
          <Text style={tw`text-[#889095] text-[12px] mt-1`}>{acitveMsg}</Text>
        </View>
        <View>
          <Text style={tw`text-[#889095] text-[10px] mt-5`}>{lastTime}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={tw`w-full h-full`}>
      <FlatList
        data={chatsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
