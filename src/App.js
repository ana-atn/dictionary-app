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
          by{" "}
          <a
            href="https://ana-atanackovic.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            ana atanackovic
          </a>
        </footer>
      </div>
    </div>
  );
}
