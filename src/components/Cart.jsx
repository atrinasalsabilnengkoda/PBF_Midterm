import React, { Component } from "react";

var total, subtotal, no;
class Cart extends Component {
    state = {
        cart: [],
    };

    componentDidMount() {
        this.fetchCartData();
    }

    fetchCartData = () => {
        fetch("http://localhost:3002/cart")
            .then((response) => response.json())
            .then((jsonResultAPI) => {
                this.setState({
                    cart: jsonResultAPI,
                });
            });
    };

    removeItemFromCart(id){
        var itemToBeDeleted = this.state.cart.indexOf(id)
        var deleted = this.state.cart.splice(itemToBeDeleted, 1)
        this.setState(this.state)  
    }

    listCart() {
        total = 0;
        subtotal = 0;
        no = 0;
        return this.state.cart.map((cart) => {
            subtotal = cart.price * cart.qty;
            total = total + cart.price * cart.qty;
            no += 1;
            return (
                <tr key={cart.id}>
                    <th scope="row">{no}</th>
                    <td>{cart.name}</td>
                    <td>Rp{cart.price},-</td>
                    <td>{cart.qty}</td>
                    <td>Rp{subtotal},-</td>
                    <td>
                        <button className="btn btn-danger btn-block"onClick={() => this.removeItemFromCart(cart.name)}>Remove</button>
                    </td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div className="col-lg-12">
                <div className="container">
                    <br/>
                    <h1>My Cart</h1>
                    <div className="row">
                        <table className="table mt-3">
                            <thead class="thead-warning">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Sub-total</th>
                                    <th scope="col">Action</th>
                                </tr> </thead>
                            <tbody>{this.listCart()}</tbody>
                            <tfoot className="font-weight-bold text-white bg-warning">
                                <td className="text-center" colSpan="5">
                                    Total
                                </td>
                                <td>Rp{total},-</td>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cart;