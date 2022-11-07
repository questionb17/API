import { useState } from 'react';
import IPhoneX from '/images/IPhoneX.PNG';
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
        <Route path='/' element={<Home items={items} />} />
        <Route path='/AddProduct' element={<AddProduct addProduct={addProduct} changeProduct={changeProduct}/>} />
      </Routes>
    </>

  )
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