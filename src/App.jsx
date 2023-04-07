import './App.css'
import { Home } from './pages/Home/Home'

const url = window.location.pathname.slice(1);

function App() {
  switch(url) {
    case '':
      return(
        <div className='App'>
          <Home/>
        </div>
      )
  }
  
}

  export default App
