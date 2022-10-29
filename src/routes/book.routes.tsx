import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();
import {HomeScreen} from '@screens/Home';
import {BookListScreen} from '@screens/BookList';
import {SearchEbookScreen} from '@screens/SearchEbook';
import {DetailsScreen} from '@screens/Details';
export const BookRouters = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="home" component={HomeScreen} />
      <Screen name="search" component={SearchEbookScreen} />
      <Screen name="booklist" component={BookListScreen} />
      <Screen name="details" component={DetailsScreen} />
    </Navigator>
  );
};
