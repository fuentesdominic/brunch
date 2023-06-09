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
          <div className="home-links">
          <Link
            to={`/detail/${restaurant.id}`}
            key={restaurant.id}
            className="restaurantLink">
              <h1 className="restaurantTitle">{restaurant.name}</h1>
              <h2 className="homeMM">{restaurant.mile_marker}MM</h2>
              <img className="restaurantImage" alt="Restaurant" src={`${restaurant.picture_url}`} />
            </Link>
            </div>
      ))}
    </div>
  )
}
export default Home