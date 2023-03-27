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
    <div>SignIn</div>
  )
}
export default SignIn