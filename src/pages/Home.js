import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { GetAllRestaurants } from "../services/UserServices"

const Home = () => {

  const [allRestaurants, setAllRestaurants] = useState([])

  const getRestaurants = async () => {
    try {
      const res = await GetAllRestaurants()
      setAllRestaurants(res)
      console.log(res)
  } catch (err) {
    console.log(err);
    }
  };

  useEffect(() => {
    getRestaurants()
  }, [])

  return (
    <div className="homeBody">
      {allRestaurants && 
        allRestaurants.map((restaurant) => (
          <Link
            to={`/detail/${restaurant.id}`}
            key={restaurant.id}
            state={{place: restaurant}}
            className="restaurantLink" >
              <h2 className="restaurantTitle">Restaurant: {restaurant.name}</h2>
              <h2 className="restaurantMM">Mile Marker: {restaurant.mile_marker}</h2>
              <img className="restaurantImage" alt="Restaurant" src={`${restaurant.picture_url}`} />
            </Link>
      ))}
    </div>
  )
}
export default Home