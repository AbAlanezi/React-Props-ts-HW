import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './component/nav.css'
import Movies from './component/Movies'
import Nav from './component/Nav'
import Footer from './component/Footer'
import TVShows from './component/TV-Shows'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
       <Movies/>
       <TVShows></TVShows>
       <Footer></Footer>
    </div>
  )
}

export default App
