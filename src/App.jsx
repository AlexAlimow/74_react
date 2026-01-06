import { useState } from 'react'

import './App.css'
import Button from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0);
  //setCount(count + 1)
  //setCount(prevCount => prevCount + 1)

  const onMinus = () => setCount(count - 1);

  return (
    <div className='app'>
      React Introduction
      {/* Вызов компонента Button */}
      <Button name="plus" onButtonClick={() => setCount(prev => prev + 1)} />
      <Button name="minus" onButtonClick={onMinus} />
      <div>{count}</div>
    </div>
  );
}

export default App
