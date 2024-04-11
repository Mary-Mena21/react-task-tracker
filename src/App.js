import "./App.css";
import Header from "./components/Header";

function App() {
    const name = "John Doe";

    return (
        <div className="container">
            {/*  <header className="App-header"> */}
            <Header title="Hello" />
            <h1>Name: {name}</h1>
            {/*  </header> */}
        </div>
    );
}

export default App;
