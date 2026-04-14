import { useEffect, useState } from "react";
import VendorForm from "../components/vendorform";
import { getVendors } from "../services/vendor";
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

export default function VendorPage() {
  const [vendors, setVendors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchVendors = () => {
    setLoading(true);
    getVendors()
      .then(data => setVendors(data))
      .catch(() => setError("Erreur lors du chargement des prestataires"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <div>
      <h1>Gestion des prestataires</h1>
      <VendorForm onAdd={fetchVendors} />
      <h2>Liste des prestataires</h2>
      {loading && <p>Chargement...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      <List>
        {vendors.map((vendor, idx) => (
          <ListItem key={vendor.id || idx}>
            <strong>{vendor.name}</strong>
            <span>Service : {vendor.service}</span>
            <span>Contact : {vendor.contact}</span>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
