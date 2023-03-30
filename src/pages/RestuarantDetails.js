import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"
import { CreateMenu, UpdateMenu, GetMenuById, DeleteMenuById, DeleteRestaurantById } from "../services/UserServices"

const RestuarantDetails = () => {
  
  const location = useLocation()
  const navigate = useNavigate()
  const restaurant = location.state
  console.log(restaurant, 'restaurant')
  let menuText = ''
  const user = localStorage.getItem('user')

  const [menus, setMenus] = useState()

  const [updateMenuItem, setUpdateMenuItem] = useState()

  const [newMenu, setNewMenu] = useState({
    item: '',
    price: '',
    restaurant_id: restaurant.id,
    user: user
  }) 
  console.log(user, 'user')
  console.log(newMenu, 'newMenu')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await CreateMenu(newMenu)
    setNewMenu()
  }

  const GetMenu = async () => {
    const res = await GetMenuById(restaurant.id)
    setNewMenu(res)
  }
  
  const handleChange = (event) => {
    setNewMenu({ ...newMenu, [event.target.name]: event.target.value})
  }
  const UpdateMenus = async () => {
    const res = await UpdateMenu()
    setUpdateMenuItem(res.data)
  }

  const DeleteRestaurantById = async () => {
    const res = await DeleteRestaurantById()
    navigate('/home')
  }

  const DeleteMenuById = async (menu) => {
    const res = await DeleteMenuById(menu)
    GetMenuById(res.data)
  }

  if (menus && menus.length) {
    menuText = 'Menu List:'
    console.log(menus)
  } else {
    menuText = 'No items listed on this Menu.. Add one below?'
  }

  useEffect(() => {
    GetMenu()
  }, [])

  return (
    <div className="detailsBody">
      <img className="detailsImage" src={`${restaurant.picture_url}`} />
    <div className="nameAndLocation">
        <h1>{restaurant.name}</h1>
        <h2 className="restaurantMM">{restaurant.mile_marker}</h2>
      </div>
  
        {menus && menus.length ? (
          <div className="menuListDiv" style={{ border: '1px solid #1f728d' }}>
            <h2 className="menuListText">{menuText}</h2>
            {menus &&
              menus.map((oneMenu) => (
                <div key={oneMenu._id} className="card">
                  <h3>{oneMenu.name}</h3>
                  {oneMenu.price ? (
                    <h3 className="price">
                      {' '}
                      - Price: ${oneMenu.price} 
                    </h3>
                  ) : (
                    <></>
                  )}
                  <img
                    id="deleteMenu"
                    onClick={() => DeleteMenuById(oneMenu)}
                    className="trashIcon"
                    alt="trash icon"
                    src="https://cdn-icons-png.flaticon.com/512/542/542724.png"
                  />
                </div>
              ))}
          </div>
          ) : (
            <h2 className="menuListText">{menuText}</h2>
          )}
          <h2 className="createMenuText">Create New Menu Item</h2>
          <form onSubmit={(e) => handleSubmit(e, updateMenuItem.id)}>
            <input
              name="item"
              value={newMenu.item}
              type="text"
              placeholder="Item name"
              onChange={handleChange} />
            <input 
              name="price"
              value={newMenu.price}
              type="text"
              placeholder="Price: $"
              onChange={handleChange} />  
            <button onClick={handleChange}>Add Item To Menu</button>
          </form>
          <button onClick={() => DeleteRestaurantById(restaurant.id)} className="deleteRestaurantButton">Delete</button>
          </div>
  )}
  
export default RestuarantDetails