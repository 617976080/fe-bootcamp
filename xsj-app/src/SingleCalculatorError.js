import { useState } from 'react';

function SingleCalculatorError() {
  const [result, setResult] = useState(undefined);
  let num1, num2;
  const handleChangeNum1 = (e) => {
    num1 = Number(e.target.value);
  }
  const handleChangeNum2 = (e) => {
    num2 = Number(e.target.value);
  }
  const handleCalculate = () => {
    setResult(num1 + num2);
  }
  return (
    <div class="container">
      <input onChange={handleChangeNum1} />
      <span>+</span>
      <input onChange={handleChangeNum2} />
      <button class="submit-button" onClick={handleCalculate}>=</button>
      <span id="result">{result}</span>
    </div>
  );
}
export default SingleCalculatorError;
