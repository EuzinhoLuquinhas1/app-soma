import React from "react";

import {View, Text, TextImput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){

    return(
        <View>
            <Text> Projeto Soma </Text>

            <TextImput placeholder= "Digite um número" />
            <TextImput placeholder= "Digite um número" />

            <TouchableOpacity>
                <Text>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}