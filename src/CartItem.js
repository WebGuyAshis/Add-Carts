import React from 'react';
import './cartitem.css'
import Plus from './images/plus.png'
import Minus from './images/minus-button.png'
import Delete from './images/trash.png'

const CartItem = (props) => {
    const { price, title, qty, img } = props.product;
    const { product, onIncreaseQty, onDecreaseQty, onDeleteQty } = props;
    return (
        <div className="item">
            {/* {Item Image} */}
            <div className="img">
                <img src={img} alt="" />
            </div>

            <div className="title">
                <h2 className="item-name">
                    {title}
                </h2>
                <div className="item-price">
                    <span>Rs&nbsp;
                        {price}
                    </span>
                </div>
            </div>

            <div className="add-remove-item">
                <img className="add-item" src={Plus} alt=""
                    onClick={() => { onIncreaseQty(product) }}
                />
                <div className="quantity">
                    {qty}
                </div>
                <img className="remove-item" src={Minus} alt=""
                    onClick={() => { onDecreaseQty(product) }}
                />
            </div>

            <div className="delete">
                <img className='delete-item' src={Delete} alt="" onClick={() => { onDeleteQty(product.id) }} />
            </div>
        </div>
    );
}

export default CartItem;