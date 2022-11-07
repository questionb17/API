import React from "react";
const AddProduct = (props) => {
    return(
        <>
       <div className="col col-6">
            <div className="mb-3">
              <label className="form-label">Product</label>
              <input onChange={props.changeProduct} name='image' type="url" className="form-control" placeholder="Product image" />
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input onChange={props.changeProduct} name='name' type="text" className="form-control" placeholder="Product name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input onChange={props.changeProduct} name='price' type="text" className="form-control" placeholder="Product price" />
            </div>
            <div className="mb4">
              <button onClick={props.addProduct} className='btn btn-warning'>Add Product</button>
            </div>
          </div>
        </>
    )
}


export default AddProduct