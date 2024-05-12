import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myDetails = {
    Description : 'Software Developer',
    age:21

  }

  let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-2 rounded-xl mb-4' >Tailwind Test</h1>
      <Card username='Lauren' someObject={myDetails} />
      <Card username='Rosey' />

    </>
  )
}

export default App
