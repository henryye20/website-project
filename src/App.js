import React,{useState, useEffect} from 'react';
import './App.css';


function App() {
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://bible-go-api.rkeplin.com/v1/books/1/chapters/1/1001002?translation=ASV')

      .then(response => response.json())
      .then(data => setVerses(data))
      .catch(error => console.error(error));
  }, []);

  const [count,setCount] = React.useState(5);
  
  const handleClick = () => {

    if(count > 0) {
      setCount(count => count - 1);
    }

  };
  const itemClick1 = () => {
    if(count > 0) {
      setCount(count => count - 5);
    }
  };
  const itemClick2 = () => {
    if(count > 0) {
      setCount(count => count - 1);
    }
  };
  const itemClick3 = () => {
    if(count > 0) {
      setCount(count => count - 3);
    }
  };
  const itemClick4 = () => {
    if(count > 0) {
      setCount(count => count - 2);
    }
  };


  return (
    <div className="container">
      
      <div className="header">
        <h2>{verses.book} {verses.chapter}:{verses.verse}</h2>
        <p>{verses.text}</p>
      </div>
      
      <div className="content">
      

      </div>
      <div className="shop">
        <div className="refresh">REFRESH</div>
        <div className="Slogo">  
          <button className="but" type="button" onClick={handleClick}>

          </button>
          money: {count}
        </div>
        <div className="cost1">Cost:5</div>
        <div className="cost2">Cost:1</div>
        <div className="cost3">Cost:3</div>
        <div className="cost4">Cost:2</div>
        <div className="item1"type="button" onClick={itemClick1}></div>
        <div className="item2"type="button" onClick={itemClick2}></div>
        <div className="item3"type="button" onClick={itemClick3}></div>
        <div className="item4"type="button" onClick={itemClick4}></div>
      </div>
    </div>
  );
}

export default App;
