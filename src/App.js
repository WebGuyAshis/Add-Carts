import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { db } from "./firebaseInit";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
  }

  componentDidMount() {
    db
      .collection("products")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((doc)=>{
          console.log(doc.data());
        })

        const products = snapshot.docs.map((doc)=>{
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })

        this.setState({
          products: products,
          loading:false
        })
      })
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
    products[index].qty -= 1;
    this.setState({
      products: products
    })
    if (products[index].qty === 0) {
      this.handleDeleteQty(product.id);
      return;
    }
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
    const { products ,loading } = this.state;
    return (
      <div className="cart">
        <Navbar count={this.getTotalQty()} />
        <h1>Cart</h1>
        <Cart products={products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDeleteQty={this.handleDeleteQty} />

        
        {loading && <h1>Loading Products...</h1> }
        <div className="totalAmount" style={{ fontSize: 20, backgroundColor: 'rgba(0,0,0,0.6)', display: 'inline-block', borderRadius: 5, padding: 10, color: 'white', margin: 10 }}>Total: {this.totalAmount()}</div>
      </div>
    );
  }
}

export default App;