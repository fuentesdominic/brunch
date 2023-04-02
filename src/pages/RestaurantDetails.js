import { useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { GetMenuById, DeleteMenuById, DeleteRestaurantById, CreateMenuById, GetRestaurantById } from "../services/UserServices"

const RestuarantDetails = () => {

  const navigate = useNavigate()
  
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
  const [oneRestaurant, setOneRestaurant] = useState()
  console.log(oneRestaurant)

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

  const GetRestaurant = async () => {
    const res = await GetRestaurantById(id)
    setOneRestaurant(res)
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
    GetRestaurant()
  }, [])
  if (oneRestaurant)

  return (
    <div className="detailsBody">    
      <img className="detailsImage" src={`${oneRestaurant.picture_url}`} />
    <div className="nameAndLocation">
        <h1 className="detailsName">{oneRestaurant.name}</h1>
        <h2 className="detailsMM">{oneRestaurant.mile_marker}MM</h2>
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
                    to={`/detail/${oneRestaurant.id}/${oneMenu.id}/editmenu`}
                    state={{ origNote: 'menus' }}>
                      <button className="editButton">Edit Item</button>
                    </Link>
                </div>
              ))}
          </div>
          ) : (
            <h2>{menuText}</h2>
          )}
          <h2 className="createMenuText">Create New Menu Item</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              name="item"
              value={newMenu.item}
              type="text"
              placeholder="Item name"
              className="newItemInput"
              onChange={handleChange} />
            <input 
              name="price"
              value={newMenu.price}
              type="text"
              placeholder="$ Price"
              className="newItemInput"
              onChange={handleChange} />  
            <button className="addItemButton" type="submit">Add Item To Menu</button>
          </form>
          <button onClick={() => DeleteRestaurant(oneRestaurant.id)} className="deleteRestaurantButton">Delete Restaurant</button>
          </div>
  )}
  
export default RestuarantDetails