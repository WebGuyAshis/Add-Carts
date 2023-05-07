import React from "react";
import Cart from "./Cart";
// import CartItem from "./CartItem";
import Navbar from "./Navbar";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 122990,
          title: 'Alienware M15 R2',
          qty: 12,
          img: 'https://im.indiatimes.in/amp/2019/Oct/alienware_1570809003.jpg?w=820&h=540&cc=1',
          id: 1
        },
        {
          price: 29990,
          title: 'Galaxy watch 5 Ultra',
          qty: 10,
          img: 'https://5.imimg.com/data5/ANDROID/Default/2023/1/PL/BA/VT/92816460/product-jpeg-1000x1000.jpg',
          id: 2
        },
        {
          price: 1999,
          title: 'iPad Mini',
          qty: 8,
          img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-10th-gen-finish-unselect-gallery-1-202212_GEO_EMEA_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1668554661108',
          id: 3
        }
      ]
    }
  }
  handleIncreaseQty = (product) => {
    console.log("Increase the Quantity of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products
    });
  }

  handleDecreaseQty = (product) => {
    console.log("Decrease the quantity of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      this.handleDeleteQty(product.id);
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products
    })
  }
  handleDeleteQty = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    });

  }
  getTotalQty = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }
  totalAmount = () => {
    const { products } = this.state;
    let total = 0;

    products.forEach((product) => {
      total += product.qty * product.price;
    });

    return total;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        <Navbar count={this.getTotalQty()} />
        <h1>Cart</h1>
        <Cart products={products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDeleteQty={this.handleDeleteQty} />

        <div className="totalAmount" style={{ fontSize: 20, backgroundColor: 'rgba(0,0,0,0.6)', display: 'inline-block', borderRadius: 5, padding: 10, color: 'white', margin:10 }}>Total: {this.totalAmount()}</div>
      </div>
    );
  }
}

export default App;
