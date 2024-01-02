import React from 'react'

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        productName: "",
        productPrice: 0,
        };
    }
  render() {
    return (
      <form className='row mb-5' onSubmit={(e) => {
        e.preventDefault();
        this.props.addItem(this.state.productName, Number(this.state.productPrice));
      }}>
        {"  "}
        <div className="mb-3 col-4">
          {"    "}
          <label className="form-label" htmlFor="inputName">
            Name
          </label>
          {"    "}
        <input
            aria-describedby="name"
            className="form-control"
            id="inputName"
            type="text"
            name="productName"
            onChange={(e) =>
                this.setState({
                    productName: e.currentTarget.value
                })
            }
            value={this.state.productName}
        />
          {"    "}
         
          {"  "}
        </div>
        {"  "}
        <div className="mb-3 col-4">
          {"    "}
          <label className="form-label" htmlFor="inputPrice">
            Price
          </label>
          {"    "}
          <input
            className="form-control"
            id="price"
            type="number"
            name = "productPrice"
            onChange={(e) =>
                this.setState({
                    productPrice: Number(e.currentTarget.value)
                })
            }
            value={this.state.productPrice}
          />
          {"  "}
        </div>
        {"  "}
        
        {"  "}
        <button className="btn btn-primary col-4" type="submit" >
          Add Item
        </button>
      </form>
    );
  }
}

export default AddItem;
