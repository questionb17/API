import { useState } from 'react';
import IPhoneX from './images/IPhoneX.PNG';
import iPhone5 from './images/iPhone5.PNG';
import iPhone9Plus from './images/iPhone9Plus.PNG';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';

function App() {
  const [item, setItem] = useState({ image: "", name: "", price: "" });
  const [items, setItems] = useState([{
    image: IPhoneX,
    name: "IPhoneX",
    price: "100$"
  },
  {
    image: iPhone5,
    name: "iPhone5",
    price: "200$"
  },
  {
    image: iPhone9Plus,
    name: "iPhone9Plus",
    price: "400$"
  }]);

  const changeProduct = (e) => {
    setItems({ ...item, [e.target.name]: e.target.value })

  }

  const addProduct = () => {
    setItems([...items, item])
    setItem({ image: "", name: "", price: "" })
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AddProduct' element={<AddProduct />} />
      </Routes>
      <div className="container mt-5">
        <div className="row">
          <div className="col col-6">
            <ul className="list-group">
              {
                items.map(function (item, index) {
                  return (
                    <li key={index} className="list-group-item">
                      <div><img src={item.image} style={{ height: '6rem' }}/></div>
                      <div>{item.name}</div>
                      <div>{item.price}</div>
                    </li>)
                })
              }





            </ul>

          </div>


          <div className="col col-6">
            <div className="mb-3">
              <label className="form-label">Product</label>
              <input value={item.image} onChange={changeProduct} name='image' type="url" className="form-control" placeholder="Product image" />
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input value={item.name} onChange={changeProduct} name='name' type="text" className="form-control" placeholder="Product name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input value={item.price} onChange={changeProduct} name='price' type="text" className="form-control" placeholder="Product price" />
            </div>
            <div className="mb4">
              <button onClick={addProduct} className='btn btn-warning'>Add Product</button>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}


export default App;