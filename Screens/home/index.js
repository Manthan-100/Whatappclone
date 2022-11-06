import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Ionicons from '@expo/vector-icons/AntDesign';
import Group from '@expo/vector-icons/Entypo';
import Tabs from '../../components/Tabs/index';
import withHOC from '../../utilis/with-hoc';
import { HomeProvider, useHomeContext } from './provider';
import ChatPannel from './tabs/chat';
import StatusPannel from './tabs/status';
import CallPannel from './tabs/calls';

function Home(props) {
  const { currTab, setCurrTab } = useHomeContext();

  return (
    <View style={tw`flex h-full`}>
      <Tabs value={currTab} onChange={setCurrTab}>
        {({ isActiveTab }) => (
          <View style={tw`flex h-full`}>
            <View style={tw`bg-[#008069] flex-col`}>
              <View
                style={tw`w-fulll flex flex-row justify-between items-center px-2 pt-10`}>
                <Text style={tw`text-white font-bold ml-2`}>Whatsapp</Text>
                <View style={tw`flex flex-row items-center`}>
                  <TouchableOpacity activeOpacity={0.8} style={tw`mr-4`}>
                    <Ionicons name="search1" size={20} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.8}>
                    <Group name="dots-three-vertical" size={18} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={tw`w-full flex-row pt-5 justify-between items-center`}>
                <Tabs.Tab id="chat">
                  <View
                    style={tw.style(
                      `px-3 border-[#008069] border-b-2 pb-2`,
                      isActiveTab('chat') && 'border-[#ffffff]'
                    )}>
                    <Text style={tw`text-white text-[11px] font-bold mx-2`}>
                      CHAT
                    </Text>
                  </View>
                </Tabs.Tab>
                <Tabs.Tab
                  style={tw`text-white text-[11px] font-bold mx-2 px-4`}
                  id="status">
                  <View
                    style={tw.style(
                      `px-3 border-[#008069] border-b-2 pb-2`,
                      isActiveTab('status') && 'border-[#ffffff]'
                    )}>
                    <Text style={tw`text-white text-[11px] font-bold mx-2`}>
                      STATUS
                    </Text>
                  </View>
                </Tabs.Tab>
                <Tabs.Tab
                  style={tw`text-white text-[11px] font-bold `}
                  id="calls">
                  <View
                    style={tw.style(
                      `px-3 border-[#008069] border-b-2 pb-2`,
                      isActiveTab('calls') && 'border-[#ffffff]'
                    )}>
                    <Text style={tw`text-white text-[11px] font-bold mx-2`}>
                      CALLS
                    </Text>
                  </View>
                </Tabs.Tab>
              </View>
            </View>
            <View style={tw`flex`}>
              <Tabs.TabPanel id="chat">
                <ChatPannel />
              </Tabs.TabPanel>
              <Tabs.TabPanel id="status">
                <StatusPannel />
              </Tabs.TabPanel>
              <Tabs.TabPanel id="calls">
                <CallPannel />
              </Tabs.TabPanel>
            </View>
          </View>
        )}
      </Tabs>
    </View>
  );
}

export default withHOC(HomeProvider, Home);
