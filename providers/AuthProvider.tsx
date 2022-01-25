import React, { createContext, useState, useContext } from 'react'
import { AuthData, AuthContextData } from '../services/authService'

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData | undefined>({
    token: '',
    email: '',
    name: '',
  })

  //The loading part will be explained in the persist step session
  const [loading, setLoading] = useState(false)

  const signIn = async () => {
    console.log('Sign in')
    //call the service passing credential (email and password).
    //In a real App this data will be provided by the user from some InputText components.
    // const _authData = await authService.signIn(
    //   'lucasgarcez@email.com',
    //   '123456',r
    // );

    // //Set the data in the context, so the App can be notified
    // //and send the user to the AuthStack
    // setAuthData(_authData);
  }

  const signOut = async () => {
    console.log('Sign out')
    //Remove data from context, so the App can be notified
    //and send the user to the AuthStack
    setAuthData(undefined)
  }

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
