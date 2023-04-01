import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import { UpdateMenuById } from '../services/UserServices'

const EditMenuItem = () => {
  let navigate = useNavigate()
  const location = useLocation()
  const { origNote } = location.state

  const { id } = useParams()
  const [updatedItem, setUpdatedItem] = useState({ menus: `${origNote.menus}`})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updateMenuItem = {
      menus: updatedItem.menus
    }
      await UpdateMenuById(id, updatedItem, updateMenuItem)
      navigate(`/detail/${id}`)
    } 

  const handleChange = (e) => {
    setUpdatedItem({ [e.target.name]: e.target.value })
  }

  return (
    <div className="updateMenuItem">
      <img className="updateImage" src="https://www.worldatlas.com/upload/70/97/1d/shutterstock-1478766713.jpg" alt=""></img>
      <h1 className="updateMenuTitle">Edit Item</h1>
      <form onSubmit={handleSubmit} className="updateMenuForm">
        <div className="updateMenuItem">
          {/* <h2>Item:</h2> */}
          <input
            name="Item"
            id={updatedItem.item}
            placeholder="Item name"
            className="updateInput"
            onChange={handleChange}>
            </input>
          {/* <h2>Price:</h2> */}
          <input
            name="Price"
            id={updatedItem.Price}
            placeholder="$ Price"
            className="updateInput"
            onChange={handleChange}>
          </input>
          <button className="updateMenuButton">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default EditMenuItem