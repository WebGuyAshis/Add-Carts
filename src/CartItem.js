import React from 'react';
import './cartitem.css'
import Plus from './images/plus.png'
import Minus from './images/minus-button.png'

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'IPhone',
            qty: 1,
            img: ''
        }
    }
    increaseQuantity = ()=>{

        // we will use this when we dont need any previous data, we can use it to change titles
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // Method-2 we will use it when we need prev data like updating cart value

        this.setState((prevState)=>{
            return{
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = ()=>{
        this.setState((prevState)=>{
            return{
                qty:prevState.qty - 1
            }
        })
    }
    render() {
        return (
            <div className="item">
                {/* {Item Image} */}
                <div className="img">
                    <img src={Plus} alt="" />
                </div>

                <div className="title">
                    <h2 className="item-name">
                        {this.state.title}
                    </h2>
                    <div className="item-price">
                        <h3>{this.state.price}</h3>
                    </div>
                </div>

                <div className="add-delete-item">
                    <img className="add-item" src={Plus} alt="" 
                    onClick={this.increaseQuantity}
                    />
                    <div className="quantity">
                        {this.state.qty}
                    </div>
                    <img className="remove-item" src={Minus} alt="" 
                    onClick={this.decreaseQuantity}
                    />
                </div>
            </div>
        );
    }
}

export default CartItem;