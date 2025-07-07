import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CartScreenStyles } from './CartScreenStyles';
import { FlashList } from '@shopify/flash-list';

const CartScreen = ({ route }: any) => {
    const { cartItems = [] } = route.params || {};
    const total = cartItems.reduce((acc: any, item: any) => acc + item.quantity * item.price, 0);

    const renderItem = ({ item }: any) => (
        <View style={CartScreenStyles.card}>
            <View style={CartScreenStyles.row}>
                <Text style={CartScreenStyles.itemTitle}>{item.title}</Text>
                <Text style={CartScreenStyles.price}>₹{item.price * item.quantity}</Text>
            </View>
            <Text style={CartScreenStyles.details}>Qty: {item.quantity}  |  ₹{item.price} x {item.quantity}</Text>
        </View>
    );

    return (
        <View style={CartScreenStyles.container}>
            <Text style={CartScreenStyles.title}>🛒 Shared Cart</Text>
            <FlashList
                data={cartItems}
                estimatedItemSize={200}
                keyExtractor={item => item.id.toString()}
                ListEmptyComponent={
                    <Text style={CartScreenStyles.empty}>No items added yet.</Text>
                }
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 100 }}
            />

            <View style={CartScreenStyles.totalContainer}>
                <Text style={CartScreenStyles.totalText}>Total</Text>
                <Text style={CartScreenStyles.totalAmount}>₹{total}</Text>
            </View>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({

});
