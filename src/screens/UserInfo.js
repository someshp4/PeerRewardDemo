import {Image, Text, View, StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const requiredHeight = deviceHeight / 5;

const UserInfo = ({userDetails}) => {
  const {imageUri, fullName, givenRewards, receivedRewardss} = userDetails;

  return (
    <View style={styles.userDetailsContainer}>
      <Image
        source={{
          uri: imageUri,
        }}
        style={styles.image}
      />
      <View style={styles.detailsLeftContainer}>
        <Text style={styles.nameText}>{fullName}</Text>
        <Text style={styles.info}>
          Given
          <Text style={styles.amount}>{` $${givenRewards}`}</Text> / Received
          <Text style={styles.amount}>{` $${receivedRewardss}`}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userDetailsContainer: {
    height: requiredHeight,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f0',
  },
  image: {width: 80, height: 80, borderRadius: 50},
  detailsLeftContainer: {marginLeft: 20, flexDirection: 'column'},
  nameText: {fontWeight: 'bold', fontSize: 18, color: '#000000'},
  info: {fontSize: 16, color: '#000000'},
  amount: {fontWeight: 'bold'},
});

export default UserInfo;
