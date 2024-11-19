import  { useState, useRef, useEffect, FC } from "react";
import { stringCalculator } from "../utils/string-calculator";

const StringCalculator: FC = () => {
  const [input, setInput] = useState(""); // State to store the user input
  const [result, setResult] = useState<number | string>(""); // State to store the result or error 
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, [])
  const calculateSum = () => {
    try {
      const normalizedInput = input.replace(/\\n/g, "\n");
      const sum = stringCalculator(normalizedInput); // Call the `add` function
      setResult(sum); // Update the result state with the calculated sum
    } catch (error: any) {
      setResult(error.message); // Update the result state with the error message
    }
  };
 
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "400px", margin: "auto" }}>
      <h1>String Calculator</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          id="numbersinput"
          aria-required="true"
          value={input}
          ref={inputRef}
          tabIndex={1}
          onChange={(e) => {
            setInput(e.target.value);
            setResult(""); // Clear the result when input changes
          }}
          placeholder="Enter numbers (e.g., 1,2,3)"
          style={{
            width: "95%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
      </div>
      <button
        tabIndex={2}
        id="calculatebtn"
        onClick={calculateSum}
        aria-label="Submit the input"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Calculate
      </button>
      {result !== "" && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: result.toString().startsWith("negative") ? "#f8d7da" : "#d4edda",
            color: result.toString().startsWith("negative") ? "#721c24" : "#155724",
          }}
        >
          <strong>Result: </strong>{result}
        </div>
      )}
    </div>
  );
}

export default StringCalculator;
