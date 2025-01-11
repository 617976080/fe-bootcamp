import './App.css';
import CountDemo from './CountDemo';
import SingleCalculatorError from './SingleCalculatorError';
import SingleCalculator from './SingleCalculator';
import HideTitleCalcularDemo from './HideTitleCalculatorDemo';
import MultipleCalculatorDemo from './MultipleCalculatorDemo';
import { useState } from 'react';
import { Tabs, TabPane, Button } from '@douyinfe/semi-ui';

function App(){
  const [activeKey, setActiveKey] = useState("SingleCalculator");
  const handleToggleToLatest = () => {
    setActiveKey("MultipleCalculatorDemo");
  }
  const handleChangeTab = (newActiveKey) => {
    if(newActiveKey !== "HideTitleCalcularDemo"){
      setActiveKey(newActiveKey);
    }else{
      window.alert("这是付费内容，你不能查看");
    }
  }
  return (
    <div>
      <Tabs activeKey={activeKey} onChange={handleChangeTab}>
        <TabPane tab="计数器Demo" itemKey="countDemo">
          <CountDemo />
        </TabPane>
        <TabPane tab="有问题的单个计算器"  itemKey="SingleCalculatorError">
          <SingleCalculatorError />
        </TabPane>
        <TabPane tab="正确的单个计算器"  itemKey="SingleCalculator">
          <SingleCalculator />
        </TabPane>
        <TabPane tab="付费内容-隐藏标题的计算器"  itemKey="HideTitleCalcularDemo">
          <HideTitleCalcularDemo />
        </TabPane>
        <TabPane tab="完整版支持添加多个计算器的用例"  itemKey="MultipleCalculatorDemo">
          <MultipleCalculatorDemo />
        </TabPane>
      </Tabs>
    <Button onClick={handleToggleToLatest}>切换到最后一个</Button>
    </div>
  )
}


export default App;
