import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Stack from './Stack';
import Tab from './Tabs';

export default props => {
    return (
        <SafeAreaView style={{flex: 1}}>
        	<NavigationContainer>
        		{/* 

        		<Stack/>
        		
        		*/}
        		<Tab/>
        	</NavigationContainer>
        </SafeAreaView>
    )
};