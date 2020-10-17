import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {
    return (
        <TextoCentral corFundo="#9932cd">
            Tela C - { props.route && props.route.params && props.route.params.numero ? props.route.params.numero : 0}
        </TextoCentral>
    );
};