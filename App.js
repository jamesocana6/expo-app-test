import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Clicker from './src/pages/Clicker';
import Main from './src/pages/Main';
import Test from './src/pages/Test';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{title: 'Main', headerShown: false,}}
        />
        <Stack.Screen 
          name="Test" 
          component={Test} 
        />
        <Stack.Screen 
          name="Clicker" 
          component={Clicker} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
