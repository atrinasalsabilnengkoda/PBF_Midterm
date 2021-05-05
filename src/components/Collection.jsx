import React, { Component } from 'react';

class Collection extends Component {
    state = {
        listProduct:[],
    };

    FetchFromServerAPI = () => {
        fetch('http://localhost:3001/product')
            .then(Response => Response.json())
            .then(jsonResultAPI => {
                this.setState({
                    listProduct: jsonResultAPI
                })
            }
            )
    }

    componentDidMount() {
        this.FetchFromServerAPI()
    }

    handleGetProduk = (data) => {
        fetch(`http://localhost:3001/product/${data}`, { method: "GET" })
            .then((response) => response.json())
            .then((res) => {
                var dataProduct = { ...this.state.insertCart };
                dataProduct["id"] = res["id"];
                dataProduct["name"] = res["name"];
                dataProduct["price"] = res["price"];
                dataProduct["stock"] = res["stock"];
                dataProduct["qty"] = 1;
                this.setState({
                    insertCart: dataProduct,
                });
            })
            .then(() => {
                this.handleCheckCart(data);
            })
            .then(() => {
                this.handleSave();
                alert("Success added! Check your Cart"); // need change
            });
    };

    listProduct() {
        return this.state.listProduct.map((product) => {
            return (
                <div className="col-sm-4 my-3 border-info" key={product.id}>
                    <div className="card border-info">
                        <div class="card-header bg-primary text-white"><b>Iron</b></div>
                        <img
                            className="mx-auto d-block img-fluid my-3"
                            width="50%"
                            src={product.image}
                            alt=""
                        />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5><hr/>
                            <h4 className="card-text text-info">
                                Rp{product.price},-
                            </h4>
                            <p className="card-text">
                                <small className="text-muted">Stock: {product.stock}</small>
                            </p>
                        </div>
                        <div class="card-footer bg-transparan">
                            <button className="btn btn-danger btn-block"onClick={() => this.handleGetProduk(product.id)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            );
        });
    }

    handleCheckCart = (data) => {
        fetch(`http://localhost:3002/cart/${data}`, { method: "GET" }).then(
            (response) => {
                if (response.ok) {
                    response.json().then((res) => {
                        this.handleUpdateCart(data, res);
                        this.FetchFromServerAPI();
                    });
                } else {
                    this.handleSave();
                }
            }
        );
    };

    handleUpdateCart = (data, res) => {
        fetch(`http://localhost:3002/cart/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: res["id"],
                name: res["name"],
                price: res["price"],
                stock: res["stock"], 
                qty: res["qty"]
            }),
        });
    };

    handleRemoveCart = (data, res) => {
        fetch(`http://localhost:3002/cart/${data}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: res["id"],
                name: res["name"],
                price: res["price"],
                stock: res["stock"], 
                qty: res["qty"]
            }),
        });
    };

    handleSave = () => {
        fetch("http://localhost:3002/cart", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(this.state.insertCart),
        }).then((Response) => {
            this.FetchFromServerAPI();
        });
    };

    render() {
        return (
            <div className="col-lg-12 text-center">
                <div className="container">
                    <br/><br/>
                    <h1> Airon's Catalog</h1><br/>
                    <div className="row">{this.listProduct()}</div>
                </div>
            </div>
        );
    }
}

export default Collection;