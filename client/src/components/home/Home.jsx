// Home.js
import useRequest from '../../hooks/useRequest';
import NoPhoneMsg from '../no-phone-msg/NoPhoneMsg';
import './Home.css';
import HomeProductCard from './home-product-card/HomeProductCard';
import Loading from '../loading/Loading';

export default function Home() {
  const { data: latestPhones, loading} = useRequest('/phones?limit=3', []);

  return (
    <>
      <div className="home-intro">
        <h2>Find Your Next Favorite Phone</h2>
        <p>Start with these recently added models or search for your perfect match</p>
      </div>

      <main className="products-page">
        <div className="container">
          <div className="phones-grid">
            {loading && <Loading text='Phones' />}

            {!loading && latestPhones?.length === 0 && <NoPhoneMsg />}

            {latestPhones?.length > 0 && latestPhones.map((phone) => (
              <HomeProductCard key={phone._id} {...phone} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}