import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate(-1,{})
        },1000)
    },[])
    return <h1>Page Not Found.</h1>
    // return <Navigate to="/"/>
}
