import { useState } from 'react'

export default function App() {
  let [count, setCount] = useState(0)
  return (
    <div onClick={() => setCount(count + 1)}>{count}</div>
  )
}
