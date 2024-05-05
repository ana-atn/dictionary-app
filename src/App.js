import book from "./book.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={book} width="40px" alt="Dictionary" />
        </header>
        <main>
          <Dictionary />
        </main>
        
        <footer>
          <a
            href="https://github.com/ana-atn/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>{" "}
          by ana atanackovic
        </footer>
      </div>
    </div>
  );
}
