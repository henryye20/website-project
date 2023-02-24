import React from 'react';
import './App.css';
//import logo from './images/refresh.png';

function App() {
  
  const [count,setCount] = React.useState(0);
  
  const handleClick = () => {
    if (count > 0) {
      setCount(count => count - 1);
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <div className="items">LOGO</div>
        <div className="items">Business Name</div>
        <div className="items">Est. 2020</div>
      </div>
      <div className="header">header</div>
      <div className="nav">nav</div>
      <div className="content">content</div>
      <div className="shop">
        <div className="refresh">REFRESH</div>
        <div className="Slogo">  
          <button type="button" onClick={handleClick}>
            Refresh
            (Cost:1)
          </button>
          {count}
        </div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </div>
  );
}

export default App;
