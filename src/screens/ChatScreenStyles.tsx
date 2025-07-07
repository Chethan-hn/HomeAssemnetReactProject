import {
    Dimensions,
    StyleSheet,
} from 'react-native';
export const ChatScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f4f8',
    },
    messageList: {
        padding: 12,
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    },
    emptyText: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
        paddingHorizontal: 20,
    },

    messageContainer: {
        alignSelf: 'flex-end',
        backgroundColor: '#4B9EFF',
        padding: 10,
        marginVertical: 4,
        borderRadius: 16,
        maxWidth: '75%',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    messageText: {
        color: '#fff',
        fontSize: 16,
    },
    messageImage: {
        width: 180,
        height: 140,
        borderRadius: 10,
        marginTop: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        color: '#333',
    },
    sendButton: {
        marginLeft: 8,
        backgroundColor: '#4B9EFF',
        borderRadius: 25,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageButton: {
        marginRight: 8,
        padding: 8,
    },
    imageText: {
        fontSize: 20,
        color: '#4B9EFF',
    },
});