import react from "react";

const App = () => {
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched">Tha</span>
        <span className="remainder">llys</span>
      </div>
      <div className="typed-keys">asdada</div>
      <div className="completed-words">
        <ol>
          <li>cidade</li>
          <li>moradia</li>
          <li>viajem</li>
        </ol>
      </div>
    </div>
  );
};

export default App;
