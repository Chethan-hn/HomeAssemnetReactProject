import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Catalog');
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../Assests/Image/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>Welcome to Yachii</Text>
            <ActivityIndicator size="large" color="#fbcd15" />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
});
