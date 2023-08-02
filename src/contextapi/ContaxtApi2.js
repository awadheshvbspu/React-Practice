import React, { useContext } from 'react'
import {BioData} from './ContaxtApi'

export default function ContaxtApi2({name}) {
    const Name= useContext(BioData);
  return (
    <h1>{Name}</h1>
  )
}
