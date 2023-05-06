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
    handleIncreaseQty=(product) =>{
        console.log("Increase the Quantity of", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            products:products
        });
    }

    handleDecreaseQty = (product)=>{
        console.log("Decrease the quantity of",product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0){
            this.handleDeleteQty(product.id);
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products:products
        })
    }
    handleDeleteQty = (id)=>{
        const {products} = this.state;

        const items = products.filter((item)=>item.id !== id);

        this.setState({
            products: items
        });

    }
    render() {
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem product={ product } 
                                     key={product.id}
                                     onIncreaseQty = {this.handleIncreaseQty}
                                     onDecreaseQty = {this.handleDecreaseQty}
                                     onDeleteQty = {this.handleDeleteQty} />
                })}
            </div>
        );
    }
}
export default Cart;