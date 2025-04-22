// // import React, { createContext, useState } from 'react'
// // export const Mycontext = createContext();
// // export default function Mycontext({children})

// // {
// //     const [user ,setUser] = useState(null)
// //   return (
// //     <Mycontext.Provider value={initialState}>{children}</Mycontext.Provider>
// //   )
// // }

import { createContext } from 'react';
import { useState } from 'react'

export const myContext = createContext();

export default function Mycontext({children}) {
  const [user ,setUser] = useState(null)
  const initialState = {user,setUser}
  return (
    <myContext.Provider value={initialState}>{children}</myContext.Provider>
  )
}
