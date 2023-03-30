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
  console.log(formState)
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await CreateRestaurant(formState)
    console.log(res, 'res')
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
    validButton = <h3>Restaurant name is required</h3>
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="restaurantForm">
        <h1>Add Restaurant</h1>
        <input 
          placeholder='Name'
          id="name"
          type="text"
          onChange={handleChange}
          value={formState.name} />
        <input 
          placeholder='Mile Marker'
          id='mile_marker'
          type="text"
          onChange={handleChange}
          value={formState.mile_marker} />
        <input
          placeholder="Picture URL:"
          id="picture_url"
          type="text"
          onChange={handleChange}
          value={formState.picture_url} />
          {validButton}
      </form>
    </div>
  )
}
export default RestaurantForms