import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Stack = createStackNavigator();

export default props => (
    <Stack.Navigator 
    	initalRouteName="TelaA"
    	screenOptions={{ headerShown: true }}
    >
        <Stack.Screen 
        	name="TelaA"
        	options={{ title: 'Cabeçaho da tela A' }}
        	component={TelaA}
        />
        <Stack.Screen 
        	name="TelaB"
        	options={{ title: 'Cabeçaho da tela B' }}
        	component={TelaB}
        />
        <Stack.Screen 
        	name="TelaC" 
        	options={{ title: 'Cabeçaho da tela C' }}
        	component={TelaC}
        />
    </Stack.Navigator>
);