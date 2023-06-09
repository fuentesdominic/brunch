import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateRestaurant } from '../services/UserServices'

const RestaurantForms = () => {

  let navigate = useNavigate()

  const user = localStorage.getItem('user')

  const initalState = {
    name: '',
    mile_marker: '',
    picture_url: '',
    user: user
  }

  const [formState, setFormState] = useState(initalState)
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await CreateRestaurant(formState)
    navigate('/home')
  }

  let validButton = ''
  if (formState.name) {
    validButton = (
      <button type='submit' className='validButton'>
        Add New Restaurant
      </button>
    )
  } else {
    validButton = <h3 className='validButtonText'>Restaurant name is required</h3>
  }

  return (
    <div className='restaurantForm'>
       <img className="updateImage" src="https://www.worldatlas.com/upload/70/97/1d/shutterstock-1478766713.jpg" alt=""></img>
      <form onSubmit={handleSubmit} className="restaurantForm">
        <h1 className='addFormTitle'>Add Restaurant</h1>
        <input 
          placeholder='Name'
          id="name"
          type="text"
          onChange={handleChange}
          className="addFormInput"
          value={formState.name} />
        <input 
          placeholder='Mile Marker'
          id='mile_marker'
          type="text"
          onChange={handleChange}
          className="addFormInput"
          value={formState.mile_marker} />
        <input
          placeholder="Picture URL:"
          id="picture_url"
          type="text"
          onChange={handleChange}
          className="addFormInput"
          value={formState.picture_url} />
          {validButton}
      </form>
    </div>
  )
}
export default RestaurantForms