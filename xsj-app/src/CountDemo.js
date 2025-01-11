import { useState } from 'react';
function CountDemo() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    //错误的写法 count = count + 1
    setCount(count + 1);
  }
  return (
    <div>
        <button onClick={handleAdd}>加1</button>
        <span>{count}</span>
    </div>
  );
}
export default CountDemo;
// 运行顺序
// App() -> render( count = 0 )
// handleAdd -> setCount(count + 1)
// App() -> render( count = 1 )