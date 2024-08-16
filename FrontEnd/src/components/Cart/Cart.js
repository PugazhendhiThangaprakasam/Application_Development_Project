
import React, { useState, useEffect, useContext } from "react";
import './Cart.css';
import { getCartItems, removeFromCart, updateCartItem } from './CartApi';
import { UserContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom";
import NavBar from "../Navbar/Navbar";

const sizes = ['S', 'M', 'L', 'XL'];
const promoCodes = [
    { code: 'SAVE10', discount: 10, minAmount: 1499 },
    { code: 'SAVE20', discount: 20, minAmount: 2999 },
    { code: 'SAVE30', discount: 30, minAmount: 4999 }
];

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPromoCode, setSelectedPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || !user.id) {
            console.error('User is not logged in or user ID is missing');
            setLoading(false);
            return;
        }

        const loadCartItems = async () => {
            try {
                const response = await getCartItems(user.id);
                if (response.data && Array.isArray(response.data)) {
                    setCartItems(response.data);
                } else {
                    setCartItems([]);
                }
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
            } catch (error) {
                console.error('Error loading cart items:', error);
                const savedCartItems = localStorage.getItem('cartItems');
                if (savedCartItems) {
                    setCartItems(JSON.parse(savedCartItems));
                } else {
                    setCartItems([]);
                }
            } finally {
                setLoading(false);
            }
        };

        loadCartItems();
    }, [user]);

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } else {
            localStorage.removeItem('cartItems');
        }
    }, [cartItems]);

    const handleRemoveItem = async (id, productId) => {
        try {
            await removeFromCart(user.id, productId);
            setCartItems(cartItems.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error removing item:', error);
        }
    };

    const handleSizeChange = async (productId, id, newSize) => {
        try {
            const updatedItem = cartItems.find(item => item.id === id);
            if (updatedItem) {
                updatedItem.size = newSize;
                await updateCartItem(user.id, productId, updatedItem);
                setCartItems(cartItems.map(item =>
                    item.id === id ? updatedItem : item
                ));
            }
        } catch (error) {
            console.error('Error updating size:', error);
        }
    };

    const handleQuantityChange = async (productId, id, newQuantity) => {
        try {
            const updatedItem = cartItems.find(item => item.id === id);
            if (updatedItem) {
                updatedItem.quantity = newQuantity;
                await updateCartItem(user.id, productId, updatedItem);
                setCartItems(cartItems.map(item =>
                    item.id === id ? updatedItem : item
                ));
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const handlePromoCodeChange = (e) => {
        const code = e.target.value;
        setSelectedPromoCode(code);
        const promo = promoCodes.find(p => p.code === code);
        if (promo) {
            const subtotal = getSubtotal();
            if (subtotal >= promo.minAmount) {
                setDiscount(promo.discount);
            } else {
                setDiscount(0);
                alert(`This promo code requires a minimum order amount of Rs.${promo.minAmount}`);
            }
        } else {
            setDiscount(0);
        }
    };

    const getSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    const getTotalPrice = () => {
        const subtotal = getSubtotal();
        return (subtotal - (subtotal * discount / 100));
    };

    if (loading) {
        return (
            <div>
                <NavBar />
                <h1 style={{ textAlign: 'center' }}>Loading...</h1>
            </div>
        );
    }

    return (
        < div className = "cart-page">
            <NavBar />
            <div className="cart-container">
                <h2 className="cart-title">Your Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <h1 className="empty-cart">Your cart is empty</h1>
                ) : (
                    <>
                        <div className="cart-grid">
                            <div className="cart-items-list">
                                {cartItems.map(item => (
                                    <div key={item.product.id} className="cart-item">
                                        <img src={item.product.image} alt={item.product.type} className="product-image" />
                                        <div className="product-info">
                                            <h4>{item.product.type}</h4>
                                            <p>Price: Rs.{item.product.price}</p>
                                            <div className="size-quantity">
                                                <div>
                                                    <label htmlFor={`size-${item.id}`}>Size:</label>
                                                    <select
                                                        id={`size-${item.id}`}
                                                        value={item.size}
                                                        onChange={e => handleSizeChange(item.product.id, item.id, e.target.value)}
                                                        className="size-select"
                                                    >
                                                        {sizes.map(size => (
                                                            <option key={size} value={size}>{size}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label htmlFor={`quantity-${item.id}`}>Qty:</label>
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        id={`quantity-${item.id}`}
                                                        value={item.quantity}
                                                        onChange={e => handleQuantityChange(item.product.id, item.id, parseInt(e.target.value))}
                                                        className="quantity-input"
                                                    />
                                                </div>
                                            </div>
                                            <button className="remove-button" onClick={() => handleRemoveItem(item.id, item.product.id)}>Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="cart-summary">
                                <h4>Order Summary</h4>
                                <p>Subtotal: Rs.{getSubtotal()}</p>
                                <p>Discount: {discount}%</p>
                                <div className="promo-code-section">
                                    <label htmlFor="promo-code">Promo Code</label>
                                    <select
                                        id="promo-code"
                                        value={selectedPromoCode}
                                        onChange={handlePromoCodeChange}
                                        className="promo-select"
                                    >
                                        <option value="">Select Promo Code</option>
                                        {promoCodes.map(promo => (
                                            <option key={promo.code} value={promo.code}>{promo.code} - {promo.discount}% Off</option>
                                        ))}
                                    </select>
                                </div>
                                <p className="total-price">Total: Rs.{getTotalPrice()}</p>
                                <button className="checkout-button" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
            
        </div>
    );
};

export default Cart;
