import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { GetOneMenuItem, UpdateMenuById } from '../services/UserServices'

const EditMenuItem = () => {
  let navigate = useNavigate()

  const { itemId, restaurantId } = useParams()
  const [updatedItem, setUpdatedItem] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updateMenuItem = {
      menus: updatedItem.menus
    }
      await UpdateMenuById(itemId, updatedItem, updateMenuItem)
      navigate(`/detail/${restaurantId}`)
    } 

    const GetMenuItem = async (newItemId) => {
      const res = await GetOneMenuItem(itemId, newItemId)
      console.log(res)
      setUpdatedItem(res)
    }
    console.log(updatedItem)

  const handleChange = (e) => {
    setUpdatedItem({ ...updatedItem,[e.target.name]: e.target.value })
  }

  useEffect(() => {
    GetMenuItem()
  }, [])
  if (updatedItem)

  return (
    <div className="updateMenuItem">
      <img className="updateImage" src="https://www.worldatlas.com/upload/70/97/1d/shutterstock-1478766713.jpg" alt=""></img>
      <h1 className="updateMenuTitle">Edit Item</h1>
      <form onSubmit={handleSubmit} className="updateMenuForm">
        <div className="updateMenuItem">
          {/* <h2>Item:</h2> */}
          <input
            name="item"
            id={updatedItem.id}
            placeholder="Item name"
            className="updateInput"
            value={updatedItem.item}
            onChange={handleChange}>
            </input>
          {/* <h2>Price:</h2> */}
          <input
            name="price"
            id={updatedItem.price}
            placeholder="$ Price"
            className="updateInput"
            value={updatedItem.price}
            onChange={handleChange}>
          </input>
          <button className="updateMenuButton">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default EditMenuItem