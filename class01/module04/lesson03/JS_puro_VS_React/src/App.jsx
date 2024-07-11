import { useState } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Tabs/>
    </>
  )
}

export default App
