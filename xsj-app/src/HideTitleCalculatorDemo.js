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

function HideTitleCalcularDemo() {
    const [titleVisible, setTitleVisible] = useState(true);
    const handleHiddenTitle = () => {
        setTitleVisible(false);
    }
    return (
        <div>
            <button onClick={handleHiddenTitle}>隐藏标题</button>
            <CalculatorItem name="这是第1个计算器" titleVisible={titleVisible} />
            <CalculatorItem name="这是第2个计算器" titleVisible={titleVisible} />
        </div>
    )
}
export default HideTitleCalcularDemo;