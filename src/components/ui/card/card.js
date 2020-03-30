import React from 'react';
import { View, StyleSheet } from 'react-native';

const card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#51adf5',
        elevation: 3,
    },
});

export default card;