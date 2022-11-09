import React, {useState} from 'react'
import axios from 'axios'


export default function RegisterPage() {

    const [user,setUser ] = useState({
        name: '',
        email: '',
        password: ''
    })

    const onChange = (event:any) =>{      
        setUser({...user, [event.target.name] : event.target.value});
    }

    const submitRegister = async (event: any ) =>{
        event.preventDefault()
        try{
            const res = await axios.post('http://localhost:5000/user/register',user)
            console.log(user)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="register">
            <h2>Register Form </h2>
            <form >
                <label>Name</label>
                <input
                    type="text"
                    required
                    name="name"
                    value={user.name}
                    onChange={onChange}
                />
                <label>Email</label>
                <input
                    type="email"
                    required
                    name="email"
                    value={user.email}
                    onChange={onChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    required
                    name="password"
                    value={user.password}
                    onChange={onChange}
                />
                <button type="submit"> Register</button>
            </form>
        </div>
    )
    }
