import NoPhoneMsg from '../no-phone-msg/NoPhoneMsg'
import ProductCard from '../product-card/ProductCard'
import './Home.css'


export default function Home() {

    return(
      <main className="main-content">
  <div className="container">
    <div className="home-intro">
      <h2>Find Your Next Favorite Phone</h2>
      <p>
        Start with these recently added models or search for your perfect match
      </p>
    </div>
    <div className="phones-grid" id="phones-container">
      
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
    </div>
    <NoPhoneMsg/>
  </div>
</main>

    )    
}