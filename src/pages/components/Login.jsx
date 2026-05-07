import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../../features/user'

const Login = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <button
        onClick={()=> {
            dispatch(login({ name: "Yves", age: 23, email: "yves66@gmail.com"}))
        }}
        >
            Login
        </button>
        <button
        onClick={()=> {
            dispatch(logout({ name:"", age: 0, email: ""}))
        }}
        >
            Logout
        </button>
    </div>
  )
}

export default Login