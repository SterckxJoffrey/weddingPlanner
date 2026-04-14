
import { useState } from "react"
import { loginUser } from "../services/auth.ts"
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 350px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
`;

const StyledInput = styled.input`
  padding: 0.7rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #b48b31;
    box-shadow: 0 0 0 2px #f7e7b1;
  }
`;

const StyledButton = styled.button`
  background: #b48b31;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #a07a28;
  }
`;

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
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledInput
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton type="submit">Se connecter</StyledButton>
    </StyledForm>
  )
}