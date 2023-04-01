import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterUser({
            name: formValues.name,
            email: formValues.email,
            password: formValues.password
        })
        setFormValues({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        navigate('/')
      }
  return (
    <div className='registerMain'>
      <h1 className='registerTitle'>Register</h1>
      <img className="registerImage" src="https://www.worldatlas.com/upload/70/97/1d/shutterstock-1478766713.jpg" alt=""></img>
      <div className='signIn text'>
      <form className='signIn form' onSubmit={handleSubmit}>
        <div className='signIn'>
          <label className='registerLabel' htmlFor='name'>Name: </label>
          <input 
            onChange={handleChange}
            name='name'
            type='name'
            placeholder='John Smith'
            className='registerInput'
            value={formValues.name}
            required />
          </div>
          <div className='signIn'>
            <label className='registerLabel' htmlFor='email'>Email: </label>
            <input 
              onChange={handleChange}
              name='email'
              type='email'
              placeholder='JohnSmith@email.com'
              className='registerInput'
              value={formValues.email}
              required />
          </div>
          <div className='signIn'>
            <label className='registerLabel' htmlFor='password'>Password: </label>
            <input
              onChange={handleChange}
              type='password'
              name='password'
              placeholder='1234'
              className='registerInput'
              value={formValues.password}
              required />
          <div className='signIn'>
            <label className='registerLabel' htmlFor='confirmPassword'>Confirm Password: </label>
            <input 
              onChange={handleChange}
              type='password'
              name='confirmPassword'
              placeholder='1234'
              className='registerInput'
              value={formValues.confirmPassword}
              required />
          </div>
          <button className='registerButton'
            disabled={!formValues.email || 
              (!formValues.password && 
                formValues.confirmPassword === formValues.password)}>
                  Confirm
                </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Register