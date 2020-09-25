import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json"
  });
  console.log(
    `Loading: ${loading}\nError:${error}\ndata:${JSON.stringify(data)}`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading ? "Loading" : "loading"}</h2>

      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;

/* 인풋 엘리먼트 가
const App = () => {
  const input = useRef();
  setTimeout(() => input.current.focus(), 3000);

  return (
    <div className="App">
      <div>Hi</div>
      <input ref={input} placeholder="la" />
    </div>
  );
};

export default App;

/* 
## 훅 썼을 때
export default function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);


  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>증가</button>
      <button onClick={decrementItem}>감소</button>
    
    </div>
  );
}

##훅 안쓰면 코드가 길어짐
class AppUgly extends React.Component{
  state = {
    item : 1
  }
  render(){
    const {item} = this.state;  
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>증가</button>
        <button onClick={this.decrementItem}>감소</button>  
      </div>
    );
  }

  incrementItem = () => {
    this.setState(state => {
      return {
        item : state.item + 1
      }
    })
  }
  decrementItem = () => {
    this.setState(state => {
      return {
        item : state.item - 1
      }
    })
  }
}

export default AppUgly
*/
