
export const getGalleryPhotos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos")
  if (res.status !== 200) throw new Error("не удалось загрузить фото")
  const data = await res.json()
  return data 
}
