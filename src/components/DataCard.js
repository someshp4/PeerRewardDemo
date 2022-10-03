import {Image, Text, View, StyleSheet} from 'react-native';
import dateFormatter from '../helpers/dateFormatter';

const DataCard = ({imageUri, message, info, createdDate}) => {
  return (
    <View style={styles.rewardDetailsContainer}>
      <Image
        source={{
          uri: `${imageUri}`,
        }}
        style={styles.image}
      />
      <View style={styles.leftContainer}>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.info}>{info}</Text>
        <Text style={styles.info}>{dateFormatter(createdDate)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rewardDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  leftContainer: {
    flex: 1,
    marginLeft: 20,
    flexDirection: 'column',
  },
  message: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    color: '#9ba389',
    fontWeight: '400',
  },
});

export default DataCard;
