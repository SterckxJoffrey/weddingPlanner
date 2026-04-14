import { useState } from "react"
import { loginUser } from "../services/auth.ts"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await loginUser({ email, password })

      // stocker le token
      localStorage.setItem("token", response.token)

      console.log("Connecté ✅")
    } catch {
      console.log("Erreur login ❌")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Se connecter</button>
    </form>
  )
}