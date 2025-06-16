import './App.css'
import Navbar from './component/Nav/Navbar'
import Hero from './component/Hero/Hero'
import Service from './component/Service/Service'
import Banner from './component/Banner/Banner'
import Subsribe from './component/Banner/Subscribe'
import Footer from './component/Footer/Footer'

function App() {


  return (
    <main >
      <Navbar/>
      <Hero onClick={() => setShow(false)}/>
      <Service/>
      <Banner/>
      <Subsribe/>
      <Footer></Footer>
    </main>
  )
}

export default App
