import React, { createContext } from 'react'
import ContextApi1 from '../contextapi/ContextApi1'

const BioData = createContext();

export default function ContaxtApi() {
  return (
    <BioData.Provider value="">
     <ContextApi1/>
    </BioData.Provider>
  )
}
export {BioData};
