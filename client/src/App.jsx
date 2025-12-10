
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Products from './components/products/Products'
import Smartphones from './components/products/smartphones/Smartphones'
import Tablets from './components/products/tablets/Tablets'
import CreateProduct from './components/create-product/CreateProduct'
import MyProducts from './components/my-products/MyProducts'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Details from './components/details/Details'
import Logout from './components/logout/Logout'
import Edit from './components/edit/Edit'
import AuthGuard from './guards/AuthGuard'
import GuestGuard from './guards/GuestGuard'
import { ToastContainer } from 'react-toastify'
import About from './components/about/About'

function App() {
    return (
        <>
            <ToastContainer />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/:productId/details" element={<Details />} />
                <Route path="/products" element={<Products />}>
                    <Route index element={<Smartphones />} />
                    <Route path="smartphones" element={<Smartphones />} />
                    <Route path="tablets" element={<Tablets />} />
                </Route>

                <Route element={<GuestGuard />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route element={<AuthGuard />}>
                    <Route path="/product/create" element={<CreateProduct />} />
                    <Route path="/my-products" element={<MyProducts />} />
                    <Route path="/:productId/edit" element={<Edit />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>

            </Routes>
            <Footer />
        </>
    )
}

export default App
