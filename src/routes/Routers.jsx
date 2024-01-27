import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, AboutUs, Services, Projects, News, Contact } from '../pages'

const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/news" element={<News />}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routers