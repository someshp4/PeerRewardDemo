import {FlatList, View} from 'react-native';
import DataCard from './DataCard';

const Feed = ({feedsList}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        data={feedsList}
        renderItem={({item}) => (
          <DataCard
            imageUri={item.imageUri}
            message={item.message}
            info={`${item.fullName} rewarded by ${item.receivedFrom}`}
            createdDate={item.createdDate}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Feed;
