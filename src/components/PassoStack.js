import React from 'react';
import { View , Text, Button } from 'react-native';

export default props => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {props.voltar
                    ?   <Button
                            title="Voltar"
                            onPress={() => {
                                props.navigation.goBack()
                            }}
                        />
                    : false
                }
                {props.avancar
                    ?   <Button
                            title="Avançar"
                            onPress={() => {
                                props.usePush
                                    ? props.navigation.push(
                                        props.avancar,
                                        {
                                            numero: parseInt(Math.random() * 100)
                                        }
                                       )
                                    : props.navigation.navigate(props.avancar)
                            }}
                        />
                    : false
                }
            </View>
            <View style={{ flex: 1 }}>
                {props.children}
            </View>
        </View>
    );
};