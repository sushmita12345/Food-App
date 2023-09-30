import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    areaName,
  } = resData?.info;
  return (
    <div>
      <div className="res-card-container">
        <img
          className="res-card-img"
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant"
        />
        <h2>{name}</h2>
        <h3>{avgRating}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwo}</h3>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
