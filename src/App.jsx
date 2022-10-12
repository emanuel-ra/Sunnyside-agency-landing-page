import { useState } from 'react'
import Navbar  from './component/Navbar'
import Card from './component/Card';
import Footer from './component/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <main className="App">
        <header className="relative"><Navbar /></header>
        <Card />    
        <Footer />   
      </main>      
    </>
  )
}

export default App
