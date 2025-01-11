import { useState, useRef } from 'react';

function SingleCalculator() {
  const [result, setResult] = useState(undefined);
  const num1Ref = useRef();
  const num2Ref = useRef();
  const handleChangeNum1 = (e) => {
    num1Ref.current = Number(e.target.value);
  }
  const handleChangeNum2 = (e) => {
    num2Ref.current = Number(e.target.value);
  }
  const handleCalculate = () => {
    setResult(num1Ref.current + num2Ref.current);
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
/**
 * render result, num1Ref.current , num2Ref.current -> undefined
 * 输入触发了handleChangeNum1 -> num1Ref.current
 * 输入触发了handleChangeNum2 -> num2Ref.current
 * 点击触发了handleCalculate setResult(num1Ref.current + num2Ref.current); 
 * render result(3), num1Ref.current -> 1 , num2Ref.current -> 2
 */
export default SingleCalculator;