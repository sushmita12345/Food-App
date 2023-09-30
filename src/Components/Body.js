import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([])
  const [searchText, setSearchText] = useState("");

  const searchHandler = () => {
    const searchList = data.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
    setFilterData(searchList)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9114187&lng=77.6343794&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    const arrayOfCards = json?.data?.cards;
    const restaurant_List = "top_brands_for_you";

    arrayOfCards.forEach((cardObj) => {
      if (cardObj?.card?.card?.id === restaurant_List) {
        const res_Data =
          cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setData(res_Data);
        setFilterData(res_Data)
      }
    });
  };

  const clickHandler = () => {
    const filterList = data.filter((item) => item?.info?.avgRating >= 4);
    setData(filterList);
  };

  return data.length === 0 ? <Shimmer /> : (
    <div>
      <div className="body-header">
        <div>
        <input type="text" className="search-box" value={searchText} onChange={(e) => {
    setSearchText(e.target.value);
  }}/>
        <button className="search-btn" onClick={searchHandler}>
          Search
        </button>
        </div>
        <button className="filter-btn" onClick={clickHandler}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filterData?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
