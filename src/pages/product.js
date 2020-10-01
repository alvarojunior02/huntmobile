import React, { Component } from 'react';

import { WebView } from 'react-native-webview';

const Product = ({ route, navigation }) => {
    const {product} = route.params;
    return(
        <WebView source={{ uri: product.url }}/>
    );
};

export default Product;