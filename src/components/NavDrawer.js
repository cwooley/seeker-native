import { DrawerNavigator } from 'react-navigation';
import Main from './Main';


const MainScreen = ({ navigation }) => (
  <Main />
);
InboxScreen.navigationOptions = {
  drawerLabel: 'Main',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="move-to-inbox"
      size={24}
      style={{ color: tintColor }}
    />
  ),
};

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open drawer"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);



const NavDrawer = DrawerNavigator(
  {
    Main: {
      path: '/',
      screen: MainScreen,
    }
  },
  {
    initialRouteName: 'Drafts',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

export default NavDrawer;
