import LeftNavigation from './components/LeftNavigation'
import AllProducts from './pages/AllProducts'
import Brands from './pages/Brands'
import CreateProduct from './pages/CreateProduct'
import Home from './pages/Home'


const App = () => {
  return (
    <div className="font-roboto bg-slate-200 dark:bg-gray-700 scrollbar-thumb-rounded-full scrollbar-thumb-cyan-700 scrollbar-thin  scrollbar-track-slate-300 h-screen overflow-y-scroll flex">
      <LeftNavigation></LeftNavigation>
      <div className="pt-4 pr-4 w-full">
        <Brands />
        {/*<ProductDetails />*/}
        <AllProducts />
        <CreateProduct />
        <Home />
      </div>
    </div>
  )
}

export default App
