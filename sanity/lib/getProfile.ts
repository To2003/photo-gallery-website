import { client } from '../lib/client'

export async function getProfile() {
  const query = `*[_type == "perfil"][0]{
    biografia,
    instagramUser,
    "fotoSobreMi": fotoSobreMi,
    "imagenesContacto": imagenesContacto
  }`
  return await client.fetch(query)
}