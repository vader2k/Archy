import { Routes, Route } from "react-router-dom"
import { Home, AboutUs, Services, Projects, News, Contact } from '../pages'

const Routers = () => {
  return (
    <div>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/news" element={<News />}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default Routers