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
    <div className="homeBody"></div>
  )
}
export default Home