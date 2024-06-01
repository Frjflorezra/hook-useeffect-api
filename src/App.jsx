import './App.css'
import { RandomUser } from './components/RandomUser'
import { CoffeeList } from './components/CoffeeList';
import { Beers } from './components/Beers';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <header className='container d-flex justify-content-center align-text-center fs-1'>
        Carousel of Coffee
      </header>
      <Beers />
    </div>
  )
}

export default App
