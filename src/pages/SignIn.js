import { useState } from "react"
import { SignInUser } from "../services/Auth"
import { useNavigate } from 'react-router-dom'

const SignIn = (props) => {

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({name: '', email: '' })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({ name: '', email: '' })
        props.setUser(payload)
        props.toggleAuthenticated(true)
        navigate('/home')
    }

    return (
    <div className="signIn main">
        <form className="hs signin form" onSubmit={handleSubmit}>
            <h3>Sign In</h3>
            <div className="hs signin">
                <label htmlFor="email">Email</label>
                <input
                    onChange={handleChange}
                    name='email'
                    type='email'
                    placeholder="example@example.com"
                    value={formValues.email}
                    required />
            </div>
            <div className="hs signin">
                <label htmlFor="password">Password</label>
                <input 
                    onChange={handleChange}
                    type='password'
                    name='password'
                    value={formValues.password}
                    required />
            </div>
            <button disabled={!formValues.email || !formValues.password}>Sign In</button>
        </form>
    </div>
  )
}
export default SignIn