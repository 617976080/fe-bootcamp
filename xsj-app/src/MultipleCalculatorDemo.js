import { useState, useRef } from 'react';

function CalculatorItem(props) {
  console.log("debug: props", props);
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
      {props.titleVisible ? <span>{props.name}</span> : null}
      <input onChange={handleChangeNum1} />
      <span>+</span>
      <input onChange={handleChangeNum2} />
      <button class="submit-button" onClick={handleCalculate}>=</button>
      <span id="result">{result}</span>
    </div>
  );
}

function MultipleCalculatorDemo() {
  const [list, setList] = useState([]);
  const handleAddLine = () => {
    setList([...list, list.length]);
  }
  console.log("debug: list", list);
  return (
    <div>
      <button onClick={handleAddLine}>添加一行</button>
      {list.map(item => {
        return <CalculatorItem name={`这是第${item + 1}个计算器`} titleVisible={true} />
      })}
    </div>
  )
}
/**
 * list -> []
 * setList([...list, list.length]) setList([0]) ; list -> [0]
 *
 */

/**
 * App->render, titleVisible (true);  CalculatorItem1 props: { titleVisible: true } CalculatorItem2 props: { titleVisible: true }
 * setTitleVisible(false);
 * App->render, CalculatorItem1 props: { titleVisible: false } CalculatorItem2 props: { titleVisible: false }
 */


/**
 * function App(){
 *  return React.createElement("div", children: [
 *     React.createElement(CalculatorItem, { name: "这是第1个计算器", index: 0 })
 *     React.createElement(CalculatorItem, {})
 * ])
 * }
 * 
 */
export default MultipleCalculatorDemo;