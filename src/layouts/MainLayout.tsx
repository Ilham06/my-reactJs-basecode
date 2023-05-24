import { CssBaseline } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
      <CssBaseline/>
      layout
      <Outlet />
    </div>
  )
}
