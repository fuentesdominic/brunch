import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"

const RestuarantDetails = () => {
  
  const location = useLocation()
  const navigate = useNavigate()
  const restaurant = location.state
  let menuText = ''

  const [menus, setMenus] = useState()

  const [updateRestaurant, setUpdateResaurant] = useState([])

  const [newMenu, setNewMenu] = useState({
    item: '',
    price: '',
    restaurant_id: restaurant._id 
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`/menu/create/${restaurant._id}`, newMenu)
    getMenus()
  }

  const handleChange = (event) => {
    setNewMenu({ ...newMenu, [event.target.name]: event.target.value})
  }

  const getMenus = async () => {
    let res = await axios.get(`/menu/${restaurant._id}`)
    setMenus(res.data)
  }

  const deleteRestaurant = async () => {
    await axios.delete(`/restaurant/${restaurant._id}`)
    navigate('/home')
  }

  const deleteMenu = async (menu) => {
    await axios.delete(`/menu/${menu._id}`)
    getMenus()
  }

  if (menus && menus.length) {
    menuText = 'Menu List:'
    console.log(menus)
  } else {
    menuText = 'No items listed on this Menu.. Add one below?'
  }

  useEffect(() => {
    getMenus()
  }, [])

  return (
    <div></div>
  )
}
export default RestuarantDetails