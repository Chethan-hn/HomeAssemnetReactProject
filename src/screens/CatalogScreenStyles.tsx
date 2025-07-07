import {
    Dimensions,
    StyleSheet,
} from 'react-native';
export const CatalogScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
        padding: 10,
        paddingBottom: 60,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        marginVertical: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    image: {
        width: '100%',
        height: 160,
        borderRadius: 12,
        marginBottom: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 6,
    },
    price: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    cartButton: {
        backgroundColor: '#ffb703',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    cartText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 14,
    },
    footer: {
        position: 'absolute',
        bottom: 15,
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerButton: {
        flex: 1,
        backgroundColor: '#2a9d8f',
        paddingVertical: 12,
        marginHorizontal: 6,
        borderRadius: 12,
        alignItems: 'center',
    },
    footerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 18,
        color: '#999',
    },
});