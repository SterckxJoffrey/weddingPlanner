export const API_URL = 'http://localhost:8000/api'


export async function apiCall(endPoint : String) :Promise<any> {
    const res = await fetch(`${API_URL}/${endPoint}`);
    const data = res.json();
    return data;
}

