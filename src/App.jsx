import './App.css'
import Counter from './Counter'
import Counterr from './Counterr'
import Friends from './Friends'
import Team from './Team'
import User from './User'

function App() {


  const handleClick = () => {
    alert('button clicked')
  }

  function handleClick2() {
    alert('button clicked2')
  }

  return (
    <>
      <h1>React core concepts part2</h1>

      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <Counterr></Counterr>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={() => { alert('third button clicked') }}>third button</button>
    </>
  )
}

export default App
