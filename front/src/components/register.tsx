import { useState } from "react"
import { registerUser } from "../services/auth.ts"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await registerUser({ email, password })
      console.log("Utilisateur créé ✅")
    } catch (error) {
      console.log("Erreur inscription ❌")
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

      <button type="submit">S'inscrire</button>
    </form>
  )
}