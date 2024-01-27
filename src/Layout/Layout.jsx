import Routers from '../routes/Routers'
import { Navbar,SayHi, Footer } from '../components'

const Layout = () => {
  return (
    <div>
      <Navbar/>
        <main>
          <Routers />
        </main>
      <SayHi />
      <Footer />
    </div>
  )
}

export default Layout