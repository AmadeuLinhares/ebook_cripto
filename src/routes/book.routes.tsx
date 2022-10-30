import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();
import {HomeScreen} from '@screens/Home';
import {SearchCriptoScreen} from '@screens/SearchCripto';
import {DetailsScreen} from '@screens/Details';
import {ExploreCriptoScreen} from '@screens/ExploreCriptoScreen';
import {FavoritScreen} from '@screens/Favorits';
export const BookRouters = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="home" component={HomeScreen} />
      <Screen name="search" component={SearchCriptoScreen} />
      <Screen name="details" component={DetailsScreen} />
      <Screen name="explore" component={ExploreCriptoScreen} />
      <Screen name="favorits" component={FavoritScreen} />
    </Navigator>
  );
};
