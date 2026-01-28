import React from 'react'
import AuthContext from './AuthContext'

const AuthProvider = ({children}) => {
    const user ={
        id:1,
        name:"Bhavana",
        email:"parasareddybhavana@gmail.com"
    }
  return (
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider