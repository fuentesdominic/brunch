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
    <div className='signIn main'>
      <div className='signIn text'>
      <form className='signIn form' onSubmit={handleSubmit}>
        <div className='signIn'>
          <label htmlFor='name'>Name</label>
          <input 
            onChange={handleChange}
            name='name'
            type='name'
            placeholder='John Smith'
            value={formValues.name}
            required />
          </div>
          <div className='signIn'>
            <label htmlFor='email'>Email</label>
            <input 
              onChange={handleChange}
              name='email'
              type='email'
              placeholder='JohnSmith@email.com'
              value={formValues.email}
              required />
          </div>
          <div className='signIn'>
            <label htmlFor='password'>Password</label>
            <input
              onChange={handleChange}
              type='password'
              name='password'
              value={formValues.password}
              required />
          <div className='signIn'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input 
              onChange={handleChange}
              type='password'
              name='confirmPassword'
              value={formValues.confirmPassword}
              required />
          </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Register