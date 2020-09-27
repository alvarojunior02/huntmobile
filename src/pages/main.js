import React, {Component} from 'react';
import api from '../services/api';

import {View, Text} from 'react-native';

export default class Main extends Component {
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        const { docs } = response.data;
    };

    render() {
        return(
            <View>
                <Text>Página Main</Text>
            </View>
        );
    }
}