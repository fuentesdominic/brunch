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
                    onClick={() => deleteMenu(oneMenu)}
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
          <form onSubmit={(e) => handleSubmit(e, updateRestaurant.id)}>
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
          </form>
          </div>
  )}
  
export default RestuarantDetails