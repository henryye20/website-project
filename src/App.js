import React from 'react';
import './App.css';
//import logo from './images/refresh.png';

function App() {
  
  const [count,setCount] = React.useState(5);
  
  const handleClick = () => {
    if(count > 0) {
      setCount(count => count - 1);
    }
  };
  const itemClick = () => {
    if(count > 0) {
      setCount(count => count - 1);
    }
  };


  return (
    <div className="container">
      
      <div className="header">header</div>
      
      <div className="content">content</div>
      <div className="shop">
        <div className="refresh">REFRESH</div>
        <div className="Slogo">  
          <button className="but" type="button" onClick={handleClick}>

          </button>
          money: {count}
        </div>
        <div className="item1"type="button" onClick={itemClick}></div>
        <div className="item2"type="button" onClick={itemClick}></div>
        <div className="item3"type="button" onClick={itemClick}></div>
        <div className="item4"type="button" onClick={itemClick}></div>
      </div>
    </div>
  );
}

export default App;
