import book from "./book.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <img src={book} width="40px" />
      </header>
      <h1>{""} Dictionary</h1>
    </div>
  );
}
