import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

import PassoStack from '../components/PassoStack';

const Stack = createStackNavigator();

export default props => (
    <Stack.Navigator 
    	initalRouteName="TelaA"
    	screenOptions={{ headerShown: true }}
    >
        <Stack.Screen 
        	name="TelaA"
        	options={{ title: 'Cabeçaho da tela A' }}
        >
            {props => (
                <PassoStack {...props} avancar="TelaB">
                    <TelaA/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen 
        	name="TelaB"
        	options={{ title: 'Cabeçaho da tela B' }}
        >
            {props => (
                <PassoStack {...props} avancar="TelaC">
                    <TelaB/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen 
        	name="TelaC" 
        	options={{ title: 'Cabeçaho da tela C' }}
        	component={TelaC}
        />
    </Stack.Navigator>
);