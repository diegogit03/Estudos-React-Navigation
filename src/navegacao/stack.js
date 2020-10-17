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
        	options={{ title: 'Cabeçalho da tela A' }}
        >
            {props => (
                <PassoStack {...props} avancar="TelaB">
                    <TelaA/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen 
        	name="TelaB"
        	options={{ title: 'Cabeçalho da tela B' }}
        >
            {props => (
                <PassoStack {...props} usePush voltar="TelaA" avancar="TelaC">
                    <TelaB/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen 
        	name="TelaC" 
        	options={{ title: 'Cabeçalho da tela C' }}
        >
        {props => (
            <PassoStack {...props} usePush voltar avancar="TelaC">
                <TelaC {...props}/>
            </PassoStack>
        )}
        </Stack.Screen>
    </Stack.Navigator>
);