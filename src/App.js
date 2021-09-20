import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import * as math from "mathjs";

function App() {
  const [result, setResult] = useState("");
  const [button, setButton] = useState("");

  const handleClick = (val) => {
    setButton((content) => [...content, val + " "]);
  };

  const handleClear = () => {
    setResult("");
    setButton("");
  };
  const backSpace = () => {
    setResult(result.slice(0, -1));
    setButton(button.slice(0, -1))
  };
  const equal = () => {
    const input = button.join("");
    try{
      setResult(math.evaluate(input));
    } catch(error){
     setResult('error')
    } 
   
  };

  const color ="#28FFBF";

  return (
    <div className="container">
      <Input text={button} result={result} />

      <div className="keypad">
        {/* {symbolsNumbers.map((sb) => (
          <Button key={sb.id} symbol={sb.name} handleClick={handleClick} />
        ))} */}
        <Button symbol="0" handleClick={handleClick} />
        <Button symbol="1" handleClick={handleClick} />
        <Button symbol="2" handleClick={handleClick} />
        <Button symbol="3" handleClick={handleClick} />
        <Button symbol="4" handleClick={handleClick} />
        <Button symbol="5" handleClick={handleClick} />
        <Button symbol="6" handleClick={handleClick} />
        <Button symbol="7" handleClick={handleClick} />
        <Button symbol="8" handleClick={handleClick} />
        <Button symbol="9" handleClick={handleClick} />
        <Button symbol="+" handleClick={handleClick} />
        <Button symbol="-" handleClick={handleClick} />
        <Button symbol="*" handleClick={handleClick} />
        <Button symbol="/" handleClick={handleClick} />
        <Button symbol="." handleClick={handleClick} />
        <Button symbol="=" handleClick={equal} />
        <Button symbol="Back" handleClick={backSpace} color={color}  />
        <Button symbol="Clear" handleClick={handleClear} color={color} />
      </div>
    </div>
  );
}

export default App;
