import React from 'react';
import { Image, StyleSheet } from 'react-native';


const image = props =>{
    return(
        <Image source={props.source} style={{...styles.imageContainer, ...props.style}} />
    );
};

const styles = StyleSheet.create({
    imageContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: (100 / 2),
        resizeMode : 'cover',
    },
});

export default image;