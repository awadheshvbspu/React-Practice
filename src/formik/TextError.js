import { useThemeProps } from '@mui/material'
import React from 'react'

export default function TextError(props) {
  return (
    <div className='error'>
    {props.children}
    </div>
  )
}
