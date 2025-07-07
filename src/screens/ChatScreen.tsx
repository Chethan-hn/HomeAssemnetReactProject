import React, { useState } from 'react';
import {
    View,
    TextInput,
    FlatList,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Image,
    Alert,
    PermissionsAndroid
} from 'react-native';
import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';
import { ChatScreenStyles } from './ChatScreenStyles';
const ChatScreen = () => {
    const [messages, setMessages] = useState<{ id: any; text: any; image: any | null }[]>([]);
    const [msg, setMsg] = useState('');

    const sendMessage = () => {
        if (!msg.trim()) return;
        const newMsg = {
            id: Date.now().toString(),
            text: msg,
            image: null,
        };
        setMessages([newMsg, ...messages]);
        setMsg('');
    };

    const handleMediaPick = () => {
        Alert.alert(
            'Upload Image',
            'Choose an option',
            [
                {
                    text: 'Camera',
                    onPress: () => openCamera(),
                },
                {
                    text: 'Gallery',
                    onPress: () => openGallery(),
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
            ]
        );
    };

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Camera Permission',
                    message: 'App needs access to your camera',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            return false;
        }
    };

    const openCamera = async () => {
        if (Platform.OS === 'android') {
            const hasPermission = await requestCameraPermission();
            if (!hasPermission) {
                Alert.alert('Permission Denied', 'Camera permission is required');
                return;
            }
        }

        launchCamera(
            {
                mediaType: 'photo',
                includeBase64: false,
                cameraType: 'back',
            },
            response => {
                if (response?.assets && response.assets[0]?.uri) {
                    const newMsg = {
                        id: Date.now().toString(),
                        text: '',
                        image: response.assets[0].uri,
                    };
                    setMessages([newMsg, ...messages]);
                }
            }
        );
    };

    const openGallery = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
            },
            response => {
                if (response?.assets && response.assets[0]?.uri) {
                    const newMsg = {
                        id: Date.now().toString(),
                        text: '',
                        image: response.assets[0].uri,
                    };
                    setMessages([newMsg, ...messages]);
                }
            }
        );
    };

    const renderItem = ({ item }: any) => (
        <View style={ChatScreenStyles.messageContainer}>
            {item.text ? <Text style={ChatScreenStyles.messageText}>{item.text}</Text> : null}
            {item.image ? (
                <Image
                    source={{ uri: item.image }}
                    style={ChatScreenStyles.messageImage}
                    resizeMode="cover"
                />
            ) : null}
        </View>
    );

    return (
        <KeyboardAvoidingView
            style={ChatScreenStyles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={80}
        >
            <FlatList
                data={messages}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={ChatScreenStyles.messageList}
                inverted
                ListEmptyComponent={
                    <View style={ChatScreenStyles.emptyContainer}>
                        <Text style={ChatScreenStyles.emptyText}>
                            Any Help Yacchi is Here!
                        </Text>
                    </View>
                }
            />
            <View style={ChatScreenStyles.inputContainer}>
                <TouchableOpacity onPress={handleMediaPick} style={ChatScreenStyles.imageButton}>
                    <Text style={ChatScreenStyles.imageText}>📎</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder="Type your issue..."
                    value={msg}
                    onChangeText={setMsg}
                    style={ChatScreenStyles.input}
                    placeholderTextColor="#999"
                />
                <TouchableOpacity onPress={sendMessage} style={ChatScreenStyles.sendButton}>
                    <Text style={ChatScreenStyles.sendButtonText}>➤</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default ChatScreen;

