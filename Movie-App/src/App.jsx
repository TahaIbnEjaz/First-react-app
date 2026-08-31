import React from 'react'
import Search from './components/Search.jsx'

const App = () => {

  const[searchTerm,setSearchTerm] = useState('Khaddi Kabab');

  return (
    
    <main>

      <div className="pattern" />

      <div className="wrapper">
        <header>

          <img src="./src/assets/hero.png" alt="Hero Banner"/>
          <h1 className=""> Find <span className="text-gradient">Movies</span> You'll Enjoy Without Any Hassle</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

    </main>

  )
}

export default App
