export type AuthContextData = {
  authData?: AuthData
  loading: boolean
  signIn(): Promise<void>
  signOut(): void
}

export type AuthData = {
  token: string
  email: string
  name: string
}
