import { useState } from "react";
import styled from "styled-components";
import { createVendor } from "../services/vendor";

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

export default function VendorForm({ onAdd }: { onAdd: () => void }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createVendor({ name, service, contact });
      setName("");
      setService("");
      setContact("");
      onAdd();
    } catch (err) {
      alert("Erreur lors de l'ajout du prestataire");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Nom du prestataire"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <StyledInput
        type="text"
        placeholder="Type de service"
        value={service}
        onChange={e => setService(e.target.value)}
        required
      />
      <StyledInput
        type="text"
        placeholder="Contact"
        value={contact}
        onChange={e => setContact(e.target.value)}
        required
      />
      <StyledButton type="submit">Ajouter</StyledButton>
    </StyledForm>
  );
}
