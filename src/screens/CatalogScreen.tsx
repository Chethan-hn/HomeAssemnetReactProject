import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Animated,
    Easing
} from 'react-native';
import axios from 'axios';
import { CatalogScreenStyles } from './CatalogScreenStyles';
import Toast from 'react-native-simple-toast';

const CatalogScreen = ({ navigation }: any) => {
    const [products, setProducts] = useState<{ id: any; title: any; price: any; image: any }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [cartItems, setCartItems] = useState<{ id: any; title: any; quantity: any }[]>([]);
    const [fadeAnim] = useState(new Animated.Value(0));
    useEffect(() => {
        axios.get('http://10.0.2.2:5001/catalog')
            .then(res => {
                // console.log('API success:', res.data);
                setProducts(res.data);
                setLoading(false);
                fadeIn();
            })
            .catch(err => {
                // console.log(' API error:', err.message);
                setError(true);
                setLoading(false);
            });
    }, []);
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        }).start();
    };
    const addToCart = (item: { title: any; id: any; }) => {
        Toast.show(`${item.title} added to cart`, Toast.SHORT);
        setCartItems(prev => {
            const existing = prev.find(p => p.id === item.id);
            if (existing) {
                return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p);
            } else {
                return [...prev, { ...item, quantity: 1 }];
            }
        });
    };
    const removeFromCart = (item: { id: any; }) => {
        setCartItems(prev => {
            const existing = prev.find(p => p.id === item.id);
            if (existing && existing.quantity === 1) {
                return prev.filter(p => p.id !== item.id);
            } else {
                return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity - 1 } : p);
            }
        });
    };
    const getItemQuantity = (itemId: any) => {
        const item = cartItems.find(i => i.id === itemId);
        return item ? item.quantity : 0;
    };
    const renderItem = ({ item }: any) => {
        const quantity = getItemQuantity(item.id);
        return (
            <Animated.View style={[CatalogScreenStyles.card, { opacity: fadeAnim }]}>
                <Image source={{ uri: item.image }} style={CatalogScreenStyles.image} />
                <Text style={CatalogScreenStyles.title}>{item.title}</Text>
                <Text style={CatalogScreenStyles.price}>₹{item.price}</Text>
                {quantity > 0 ? (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => removeFromCart(item)} style={CatalogScreenStyles.cartButton}>
                            <Text style={CatalogScreenStyles.cartText}>-</Text>
                        </TouchableOpacity>
                        <Text>{quantity}</Text>
                        <TouchableOpacity onPress={() => addToCart(item)} style={CatalogScreenStyles.cartButton}>
                            <Text style={CatalogScreenStyles.cartText}>+</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity style={CatalogScreenStyles.cartButton} onPress={() => addToCart(item)}>
                        <Text style={CatalogScreenStyles.cartText}>Add to Cart</Text>
                    </TouchableOpacity>
                )}
            </Animated.View>
        );
    };

    return (
        <View style={CatalogScreenStyles.container}>
            {loading && <Text style={CatalogScreenStyles.emptyText}>Loading catalog...</Text>}

            {!loading && error && (
                <Text style={CatalogScreenStyles.emptyText}>Failed to load catalog</Text>
            )}

            {!loading && !error && products.length > 0 && (
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            )}
            <View style={CatalogScreenStyles.footer}>
                <TouchableOpacity style={CatalogScreenStyles.footerButton} onPress={() => navigation.navigate('Cart', { cartItems })}>
                    <Text style={CatalogScreenStyles.footerText}>Cart ({cartItems.reduce((a, b) => a + b.quantity, 0)})</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[CatalogScreenStyles.footerButton, { backgroundColor: '#4B9EFF' }]} onPress={() => navigation.navigate('Chat')}>
                    <Text style={CatalogScreenStyles.footerText}>Chat</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};

export default CatalogScreen;

