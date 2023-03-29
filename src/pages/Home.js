import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'

const Home = () => {

  const [allRestaurants, setAllRestaurants] = useState()

  const getAllRestaurants = async () => {
    try {
      let res = await axios.get('/restuarant/')
      setAllRestaurants(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllRestaurants()
  }, [])


  return (
    <div className="homeBody">
      {allRestaurants && 
        allRestaurants.map((restaurant) => (
          <Link
            to={`/details/${restaurant._id}`}
            key={restaurant._id}
            state={restaurant}
            className="restaurantLink" >
              <h2 className="restaurantTitle">{restaurant.name}</h2>
              <h2 className="restaurantMM">{restaurant.mile_marker}</h2>
              <img className="restaurantImage" src={`${restaurant.picture_url}`} />
            </Link>
        ))}
    </div>
  )
}
export default Home