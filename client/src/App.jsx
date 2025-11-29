
import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Products from './components/products/Products'
import Smartphones from './components/products/smartphones/smartphones'
import Tablets from './components/products/tablets/Tablets'
import CreateProduct from './components/create-product/CreateProduct'
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/products" element={<Products />}>
                    <Route index element={<Smartphones />} />
                    <Route path="smartphones" element={<Smartphones />} />
                    <Route path="tablets" element={<Tablets />} />
                </Route>
                 <Route path="/product/create" element={<CreateProduct />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
