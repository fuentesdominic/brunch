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
    <div className="signInMain">
        <img className="signInLogo" src="https://cdn-icons-png.flaticon.com/512/4825/4825292.png" alt=""></img>
            <h1 className="signInTitle">Sign In</h1>
        <form className="signIn form" onSubmit={handleSubmit}>
            <div className="signIn">
                <label className="signInLabel" htmlFor="email">Email: </label>
                <input
                    onChange={handleChange}
                    name='email'
                    type='email'
                    placeholder="example@example.com"
                    className="signInInput"
                    value={formValues.email}
                    required />
            </div>
            <div className="signIn">
                <label className="signInLabel" htmlFor="password">Password: </label>
                <input 
                    onChange={handleChange}
                    type='password'
                    name='password'
                    placeholder="1234"
                    className="signInInput"
                    value={formValues.password}
                    required />
            </div>
            <button className="signInButton" disabled={!formValues.email || !formValues.password}>Sign In</button>
        </form>
    </div>
  )
}
export default SignIn