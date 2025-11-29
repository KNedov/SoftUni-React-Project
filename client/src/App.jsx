
import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Products from './components/products/Products'
import Smartphones from './components/products/smartphones/smartphones'
import Tablets from './components/products/tablets/Tablets'
import CreateProduct from './components/create-product/CreateProduct'
import MyProducts from './components/my-products/MyProducts'
import Login from './components/login/Login'
import Register from './components/register/Register'
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
                 <Route path="/login" element={<Login />} />
                 <Route path="/register" element={<Register />} />

                 <Route path="/product/create" element={<CreateProduct />} />
                 <Route path="/my-products" element={<MyProducts />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
