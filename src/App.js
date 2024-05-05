import book from "./book.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <img src={book} width="40px" alt="Dictionary Image" />
      </header>
      <h1>{""} Dictionary</h1>

      <footer>
        <a
          href="https://github.com/ana-atn/dictionary-app"
          target="_blank"
          rel="no-referrer"
        >
          open-source code
        </a>{" "}
        by ana atanackovic
      </footer>
    </div>
  );
}
