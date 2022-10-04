import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Dimensions, StyleSheet} from 'react-native';
import Feed from '../components/Feed';
import {TAB_ITEMS} from '../constants/AppConstants';

const deviceHeight = Dimensions.get('window').height;
const requiredHeight = deviceHeight / 5;
const Tab = createMaterialTopTabNavigator();

const TabsList = ({feedData, myRewardsData}) => {
  return (
    <Tab.Navigator
      style={styles.tabsNavigatorContainer}
      screenOptions={{
        tabBarActiveTintColor: '#646a56',
        tabBarInactiveTintColor: '#000000',
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
          height: '100%',
        },
        tabBarStyle: {backgroundColor: 'grey', elevation: 0},
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
          textTransform: 'none',
        },
      }}>
      <Tab.Screen
        name={TAB_ITEMS.tabOne}
        children={() => <Feed feedsList={feedData} />}
      />
      <Tab.Screen
        name={TAB_ITEMS.tabTwo}
        children={() => <Feed feedsList={myRewardsData} />}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabsNavigatorContainer: {
    height: deviceHeight - requiredHeight,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default TabsList;
