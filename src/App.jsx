import './App.css'
import { Header } from './components/Header'
import slide1 from './assets/images/slide1.png'
import { Categories } from './components/Categories'

function App() {
  return (
    <>
      <Header />
      <img src={slide1} alt="Slide" />
      <Categories />

    </>
  )
}

export default App
