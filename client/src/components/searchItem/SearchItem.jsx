// Libraries
import { Link } from 'react-router-dom';
// Styles
import './searchItem.css';

const SearchItem = (props) => {
  return (
    <div className="searchItem">
      <img src={props.item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{props.item.name}</h1>
        <span className="siDistance">{props.item.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{props.item.description}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {props.item.rating ? (
          <div className="siRating">
            <span>Excellent</span>
            <button>{props.item.rating}</button>
          </div>
        ) : null}
        <div className="siDetailTexts">
          <span className="siPrice">${props.item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${props.item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
