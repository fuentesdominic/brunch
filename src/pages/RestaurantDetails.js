import { useState, useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { UpdateMenu, GetMenuById, DeleteMenuById, DeleteRestaurantById, CreateMenuById } from "../services/UserServices"

const RestuarantDetails = () => {
  const restaurant = 1
  const location = useLocation()
  const navigate = useNavigate()
  const {place} = location.state
  console.log(location.state)
  let menuText = ''
  const user = localStorage.getItem('user')
  const { id } = useParams()
  
    const initialState = {
      item: '',
      price: '',
      restaurantId: id,
      user: user
    }

  const [menus, setMenus] = useState()

  const [updateMenuItem, setUpdateMenuItem] = useState()

  const [newMenu, setNewMenu] = useState(initialState)
  
  console.log(user, 'user')
  console.log(newMenu, 'newMenu')

  const handleSubmit = async (e) => {
    console.log(e,'e')
    e.preventDefault()
    const res = await CreateMenuById(id, newMenu)
    GetMenu(res)
  }

  const GetMenu = async () => {
    const res = await GetMenuById(id)
    setMenus(res)
  }
  
  const handleChange = (event) => {
    setNewMenu({ ...newMenu, [event.target.name]: event.target.value})
  }
  const UpdateMenus = async () => {
    const res = await UpdateMenu()
    setUpdateMenuItem(res.data)
  }

  const DeleteRestaurant = async () => {
    const res = await DeleteRestaurantById()
    navigate('/home')
  }

  const DeleteMenu = async (menus) => {
    const res = await DeleteMenuById(menus)
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
      <img className="detailsImage" src={`${place.picture_url}`} />
    <div className="nameAndLocation">
        <h1>Restaurant: {place.name}</h1>
        <h2 className="restaurantMM">Mile Marker: {place.mile_marker}</h2>
      </div>
  
        {menus && menus.length ? (
          <div className="menuListDiv" style={{ border: '1px solid #1f728d' }}>
            <h2 className="menuListText">{menuText}</h2>
            {menus &&
              menus.map((oneMenu) => (
                <div key={oneMenu.id} className="card">
                  <h3>Item: {oneMenu.item}</h3>
                  {oneMenu.price ? (
                    <h3 className="price">
                      {''}
                      Price: ${oneMenu.price} 
                    </h3>
                  ) : (
                    <></>
                  )}
                  <img
                    id="deleteMenu"
                    onClick={() => DeleteMenu(oneMenu)}
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
          <form onSubmit={(e) => handleSubmit(e)}>
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
            <button type="submit">Add Item To Menu</button>
          </form>
          <button onClick={() => DeleteRestaurant(id)} className="deleteRestaurantButton">Delete</button>
          </div>
  )}
  
export default RestuarantDetails