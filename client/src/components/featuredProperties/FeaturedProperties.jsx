// Hooks
import useFetch from 'hooks/useFetch';
// Styles
import './featuredProperties.css';

const FeaturedProperties = () => {
  const { data, loading } = useFetch('/hotels?featured=true&limit=4');

  return (
    <div className="fp">
      {loading ? (
        'Please wait...'
      ) : (
        <>
          {data &&
            data.map((hotel) => (
              <div className="fpItem" key={hotel._id}>
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">{hotel.name}</span>
                <span className="fpCity">{hotel.city}</span>
                <span className="fpPrice">
                  Starting from ${hotel.cheapestPrice}
                </span>
                <div className="fpRating">
                  <button>{hotel.rating}</button>
                  <span>Excellent</span>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
