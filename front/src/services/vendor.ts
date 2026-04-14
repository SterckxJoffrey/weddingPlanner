import { API_URL } from "./api";

export async function createVendor(data: any) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/vendors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { "Authorization": `Bearer ${token}` } : {})
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    throw new Error("Erreur lors de la création du prestataire");
  }
  return res.json();
}

export async function getVendors() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/vendors`, {
    headers: {
      ...(token ? { "Authorization": `Bearer ${token}` } : {})
    }
  });
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des prestataires");
  }
  return res.json();
}
