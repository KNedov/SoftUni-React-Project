// Home.js
import useRequest from '../../hooks/useRequest';
import NoPhoneMsg from '../no-phone-msg/NoPhoneMsg';
import './Home.css';
import HomeProductCard from './home-product-card/HomeProductCard';
import Loading from '../loading/Loading';
import ErrorDisplay from '../error-display/ErrorDisplay';

export default function Home() {
  const { data: latestPhones, loading, error } = useRequest('/phones?limit=3', []);
  


  return (
    <>
      <div className="home-intro">
        <h2>Find Your Next Favorite Phone</h2>
        <p>Start with these recently added models or search for your perfect match</p>
      </div>

      <main className="products-page">
        <div className="container">
          <div className="phones-grid">
            {loading && latestPhones.length === 0 ? (
              <Loading/>
            ) : error ? (
              <ErrorDisplay error={error} />
            ) : latestPhones.length > 0 ? (
              latestPhones.map((phone) => (
                <HomeProductCard key={phone._id} {...phone} />
              ))
            ) : (
              <NoPhoneMsg />
            )}
          </div>
        </div>
      </main>
    </>
  );
}