import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import TextoCentral from '../components/TextoCentral';

export default props => {
	setTimeout(() => {
		props.navigation.navigate('TelaB');
	}, 3000);

    return (
        <TextoCentral corFundo="#e53935">
            Tela A
        </TextoCentral>
    );
};