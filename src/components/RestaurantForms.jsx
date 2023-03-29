import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RestaurantForms = () => {

  let navigate = useNavigate()

  const initalState = {
    name: '',
    mile_marker: '',
    picture_url: ''
  }

  const [formState, setFormState] = useState(initalState)
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div>RestaurantForms</div>
  )
}
export default RestaurantForms