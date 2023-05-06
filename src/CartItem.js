import React from 'react';
import './cartitem.css'
import Plus from './images/plus.png'
import Minus from './images/minus-button.png'
import Delete from './images/trash.png'

class CartItem extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'IPhone',
    //         qty: 1,
    //         img: ''
    //     }
    // }
    // increaseQuantity = ()=>{

    //     // we will use this when we dont need any previous data, we can use it to change titles
    //     // this.setState({
    //     //     qty: this.state.qty + 1
    //     // }, ()=>{});

    //     // Method-2 we will use it when we need prev data like updating cart value

    //     this.setState((prevState)=>{
    //         return{
    //             qty: prevState.qty + 1
    //         }
    //     }, ()=>{
    //         console.log("this.state", this.state);
    //     });
    // }

    // decreaseQuantity = ()=>{
    //     const {qty} = this.state;
    //     if(qty === 0){
    //         return;
    //     }
    //     this.setState((prevState)=>{
    //         return{
    //             qty:prevState.qty - 1
    //         }
    //     },()=>{
    //         console.log("this.state", this.state);
    //     })
    // }
    render() {
        // const {price, title, qty} = this.state;
        const {price, title, qty} = this.props.product;
        const {product, onIncreaseQty, onDecreaseQty, onDeleteQty} = this.props;
        return (
            <div className="item">
                {/* {Item Image} */}
                <div className="img">
                    <img src={Plus} alt="" />
                </div>

                <div className="title">
                    <h2 className="item-name">
                        {/* {this.state.title} */}
                        {title}
                    </h2>
                    <div className="item-price">
                        <span>Rs&nbsp;
                            {/* {this.state.price} */}
                            {price}
                            </span>
                    </div>
                </div>

                <div className="add-remove-item">
                    <img className="add-item" src={Plus} alt="" 
                    // onClick={this.increaseQuantity}
                    onClick={()=>{onIncreaseQty(product)}}
                    />
                    <div className="quantity">
                        {/* {this.state.qty} */}
                        {qty}
                    </div>
                    <img className="remove-item" src={Minus} alt="" 
                    // onClick={this.decreaseQuantity}
                    onClick={()=>{onDecreaseQty(product)}}
                    />
                </div>

                <div className="delete">
                    <img className='delete-item' src={Delete} alt="" onClick={()=>{onDeleteQty(product.id)}} />
                </div>
            </div>
        );
    }
}

export default CartItem;