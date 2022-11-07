import React from "react";
const Home = (props) => {
    return(
        <div className="container mt-5">
        <div className="row">
          <div className="col col-6">
            <ul className="list-group">
              {
                props.items.map(function (item, index) {
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
            </div>
          </div>
    )
}


export default Home