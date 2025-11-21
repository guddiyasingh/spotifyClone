import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
      <div className='left border'></div>
      <div className='right border'></div>
     </div>
    </>
  )
}

export default App
