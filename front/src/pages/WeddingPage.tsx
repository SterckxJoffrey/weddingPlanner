import { useEffect, useState } from "react";
import Weddingsform from "../components/weddingsform";
import { getWeddings } from "../services/weddings";
import styled from "styled-components";

const List = styled.ul`
  margin: 2rem auto 2rem auto;
  max-width: 500px;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  background: #f7f7f7;
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export default function WeddingPage() {
  const [weddings, setWeddings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getWeddings()
      .then(data => setWeddings(data))
      .catch(() => setError("Erreur lors du chargement des mariages"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Gestion des mariages</h1>
      <Weddingsform />
      <h2>Liste des mariages</h2>
      {loading && <p>Chargement...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      <List>
        {weddings.map((wedding, idx) => (
          <ListItem key={wedding.id || idx}>
            <strong>{wedding.name}</strong>
            <span>Date : {wedding.date}</span>
            <span>Lieu : {wedding.location}</span>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
