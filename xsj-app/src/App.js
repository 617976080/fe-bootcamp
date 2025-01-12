import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Nav, Button } from '@douyinfe/semi-ui';
import { IconDescriptions, IconIntro, IconTree, IconAvatar, IconTreeSelect, IconTabs } from '@douyinfe/semi-icons-lab';
import Practice1 from './Practice1';
import Page2 from './Page2';



function App() {
  const navigate = useNavigate();
  // 解构语法
  // 相当于
  // const handleToggleNav = (params) => { const itemKey = params.itemKey }
  const handleToggleNav = ({ itemKey }) => {
    navigate(itemKey);
  }
  return (
    <div>
      <Nav
        onClick={handleToggleNav}
        items={[
          { itemKey: '/demo', text: '昨天的task', icon: <IconAvatar /> },
          { itemKey: '/bubu', text: '布布开场白', icon: <IconDescriptions /> },
        ]}
      />
      <Routes>
        <Route Component={Practice1} path='/demo' />
        <Route Component={Page2} path='/bubu' />
      </Routes>
    </div>
  )
}


export default App;
