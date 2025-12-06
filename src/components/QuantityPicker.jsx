import { useState } from "react";


function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);

    const notifyChange = (newQty) => {
        if (typeof props.onChange === "function") {
            props.onChange(newQty);
        }
    };

    function increaseQuantity() {
        let newQuantity = quantity + 1;
        setQuantity(newQuantity);
        notifyChange(newQuantity);
    }
    function decreaseQuantity() {
        if (quantity > 1) {
            let newQuantity = quantity - 1;
            setQuantity(newQuantity);
            notifyChange(newQuantity);
        }
    }

    // 💡 ADD: calculate total based on a price passed from props
    const price = props.price || 19.99; // fallback if no price given
    const total = (price * quantity).toFixed(2);

    return (

        <div className="quantity-picker">
            <button className="btn-plus" onClick={increaseQuantity}>+</button>
            <label className="label-qty">{quantity}</label>
            <button className="btn-minus" onClick={decreaseQuantity}>-</button>
            
            {/* 💡 ADD: show total price */}
            <div className="total">
                <small>Total: ${total}</small>
            </div>
        </div>
    );
}

export default QuantityPicker;
