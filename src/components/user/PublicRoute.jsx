import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
  const userId=localStorage.getItem('userId')
  return userId?<Navigate
    to={'/'}
  />:<Outlet/>
}

export default PublicRoute
