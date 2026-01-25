import { useState } from "react";

function App() {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [result, setResult] = useState<string | number>("");

  const handleOperation = (operator: "+" | "-" | "*" | "/") => {
    const numA = parseFloat(valueA);
    const numB = parseFloat(valueB);
    if (isNaN(numA) || isNaN(numB)) {
      setResult("Please enter two valid numbers.");
      return;
    }
    let res: number;
    switch (operator) {
    case "+":
      res = numA + numB;
      break;
    case "-":
      res = numA - numB;
      break;
    case "*":
      res = numA * numB;
      break;
    case "/":
      if (numB === 0) {
        setResult("Cannot divide by zero.");
        return;
      }
      res = numA / numB;
      break;
  }

  setResult(res);
};

  return (
    <div style={{ width: "300px", margin: "40px auto", textAlign: "center" }}>
      <h2>CalcFlow Calculator</h2>

      <input
        style={{ width: "100%", marginBottom: "10px" }}
        type="number"
        value={valueA}
        onChange={(e) => setValueA(e.target.value)}
        placeholder="Enter first number"
      />

      <input
        style={{ width: "100%", marginBottom: "10px" }}
        type="number"
        value={valueB}
        onChange={(e) => setValueB(e.target.value)}
        placeholder="Enter second number"
      />

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>×</button>
        <button onClick={() => handleOperation("/")}>÷</button>
      </div>

      <h3>Result: {result !== null ? result : "—"}</h3>
    </div>
  );
}

export default App;