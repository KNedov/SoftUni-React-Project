import { data } from 'react-router'
import useRequest from '../../hooks/userRequest'
import NoPhoneMsg from '../no-phone-msg/NoPhoneMsg'
import ProductCard from '../product-card/ProductCard'
import './Home.css'
import HomeProductCard from './home-product-card/HomeProductCard'


export default function Home() {

  const { data: latestPhones } = useRequest('/phones?limit=3', [])
 


  return (
    <>
      <div className="home-intro">
        <h2>Find Your Next Favorite Phone</h2>
        <p>Start with these recently added models or search for your perfect match</p>
      </div>

      <main className="products-page">
        <div className="container">
          <div className="phones-grid" >
            {latestPhones.length > 0 ? (
              latestPhones.map((phone) => {
                return <HomeProductCard key={phone._id} {...phone} />
              })) : <NoPhoneMsg />}


          </div>
        </div>
      </main>

    </>

  )
}