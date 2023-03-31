import { useState, useEffect } from "react"
import { useLocation, useNavigate, useParams, Link } from "react-router-dom"
import { GetMenuById, DeleteMenuById, DeleteRestaurantById, CreateMenuById } from "../services/UserServices"

const RestuarantDetails = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const { place } = location.state
  
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

  const [newMenu, setNewMenu] = useState(initialState)

  const handleSubmit = async (e) => {
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

  const DeleteRestaurant = async (restaurantValue) => {
    const res = await DeleteRestaurantById(restaurantValue)
    navigate('/home')
  }

  const DeleteMenu = async (itemId) => {
    const res = await DeleteMenuById(itemId)
    GetMenu()
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
                    onClick={() => DeleteMenu(oneMenu.id)}
                    className="trashIcon"
                    alt="trash icon"
                    src="https://cdn-icons-png.flaticon.com/512/542/542724.png"
                  />
                  <Link 
                    to={`/detail/${place.id}/${oneMenu.id}/editmenu`}
                    state={{ origNote: 'menus' }}>
                      <button className="editButton">Edit Item</button>
                    </Link>
                </div>
              ))}
          </div>
          ) : (
            <h2 className="menuListText">{menuText}</h2>
          )}
          <h2 className="createMenuText">Create New Menu Item</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Item:</h2>
            <input
              name="item"
              value={newMenu.item}
              type="text"
              placeholder="Item name"
              onChange={handleChange} />
            <h2>Price:</h2>
            <input 
              name="price"
              value={newMenu.price}
              type="text"
              placeholder="$"
              onChange={handleChange} />  
            <button type="submit">Add Item To Menu</button>
          </form>
          <button onClick={() => DeleteRestaurant(place.id)} className="deleteRestaurantButton">Delete</button>
          </div>
  )}
  
export default RestuarantDetails