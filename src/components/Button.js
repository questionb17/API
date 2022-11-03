import React from "react";
import '../styles/button.css';

function Button(t){
    return(
        <>
        <div className="container">
        <div><button onClick={()=>t.increase10()}>Increment</button></div>
        <button onClick={() =>t.remove10()}>Decrement</button>
        <div><button onClick={() =>t.rese()}>Reset</button></div>
        </div>
        </>
    );
        
    
}
export default Button
