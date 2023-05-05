import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 9999,
                    title: 'IPhone',
                    qty: 12,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Watch',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 1999,
                    title: 'IPad',
                    qty: 8,
                    img: '',
                    id: 3
                }
            ]
        }
    }
    render() {
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem product={ product } key={product.id} />
                })}
            </div>
        );
    }
}
export default Cart;