import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import TabsList from './TabsList';
import UserInfo from './UserInfo';
import {useState} from 'react';
import {FeedsList, MyRewardsList, UserData} from '../config/mockdata';
import GiveRewardModal from '../components/GiveRewardModal';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [userDetails, setUserDetails] = useState({...UserData});
  const [feedData, setFeedData] = useState([...FeedsList]);
  const [myRewardsData, setMyRewardsData] = useState([...MyRewardsList]);
  const [modalVisible, setModalVisible] = useState(false);

  const populateFeedData = ({toName, amount, message}) => {
    const newFeed = {
      id: `${Number(feedData[feedData.length - 1].id) + 1}`,
      imageUri:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      fullName: toName,
      message: message,
      amount: amount,
      receivedFrom: UserData.fullName,
      createdDate: new Date().getTime(),
    };
    setFeedData([...feedData, {...newFeed}]);
    setMyRewardsData([...myRewardsData, {...newFeed}]);
    setUserDetails({
      ...userDetails,
      givenRewards: (userDetails.givenRewards || 0) + Number(amount),
    });
  };

  return (
    <>
      <UserInfo userDetails={userDetails} />
      <TabsList feedData={feedData} myRewardsData={myRewardsData} />
      {modalVisible && (
        <GiveRewardModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          addToFeedList={populateFeedData}
        />
      )}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#000000',
  },
  addButtonText: {
    fontWeight: '500',
    color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
  },
});
