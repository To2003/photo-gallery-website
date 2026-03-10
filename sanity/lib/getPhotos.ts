// lib/getPhotos.ts
import { client } from '../lib/client'
export async function getPhotos() {
  const query = `*[_type == "foto"] | order(_createdAt desc) {
    _id,
    titulo,
    "categoria": categoria->nombre, // <--- Traemos el nombre de la categoría referenciada
    "url": imagen.asset->url,
    imagen
  }`
  return await client.fetch(query)
}