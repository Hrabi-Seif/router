import Users from "./users/users.js";
import "./App.css";
import Navbar from "./Nav/navbar.js";

function App() {
  const style = {
    textAlign: "center",
    color: "yellow",
    fontFamily: "cursive",
  };
  const style2 = {
    textAlign: "center",
    color: "white",
    fontFamily: "cursive",
  };

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1 style={style}> Le fameux Hello world !! :) </h1>
        <div>
          <p style={style2}>Nice to see you </p>
        </div>
      </header>
      <Users />
    </div>
  );
}

export default App;
