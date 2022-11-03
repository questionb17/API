// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import Header from './components/Header';
// import Button from './components/Button';
import unoos from './images/unoos.PNG';
import doos from './images/doos.PNG';
import trees from './images/trees.PNG';


function App() {
  const [item, setItem] = useState({ image:"", title:"", Price:"", })
  const [items, setItems] = useState([
    {
      image: unoos,
      title: "Danger",//for iteration or looping
      Price: "250frw",
    },
    {
      image: doos,
      title: "Fruits",// for iteration or looping
      Price: "2500frw",
    },
    {
      image: trees,
      title: "Igicommando",//for iteraion or looping
      Price: "500frw",
    }
  ])
  const changeItem = (e) => {
    setItem({ ...item, [e.target.value]: e.target.value });
  }
  const saveItem = () => {
    setItems([...items, item])
    setItem({image:"", title:"",Price:""})
  }

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AddProduct' element={<AddProduct/>}/>
    </Routes>
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="list-group">
            {
              items.map(function (item, index) {
                return (
                  <li key={index} className="list-group-item">
                    <div><img style={{ width: "150px", height: "50vh" }} src={item.image} /></div>
                    <div>{item.title}</div>
                    <div>{item.Price}</div>
                  </li>
                )
              })
            }

          </ul>
        </div>

        <div>




        </div>



        <div className="col">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Product Image</label>
            <input value={item.image} onChange={changeItem} name="image" type="url" className="form-control" placeholder="Product Img"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Product title</label>
            <input value={item.title} onChange={changeItem} name="title" type="text" className="form-control" placeholder="Danger"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Product Price</label>
            <input value={item.Price} onChange={changeItem} name="Price"  type="number" className="form-control" placeholder="0frw"/>
          </div>
          <div className="mb4">
            <button onClick={saveItem} className="btn">Save</button>
          </div>

          product tobe added {JSON.stringify(item)}

        </div>
      </div>
    </div>
    </>

  );
}

export default App;












































//  <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div> 

    // <div className="card" >
    // <h1> Number: {count} </h1>
    // <Button increase10={increment} remove10={decrement} rese={reset} />
    // </div>


    // const[count, setCount] = useState(0);
  // const increment = () =>{
  //   setCount( count + 10 );
  // };
  // const decrement = () =>{
  //   setCount( count - 10 )
  // };
  // const reset = () =>{
  //   setCount(0);
  // }