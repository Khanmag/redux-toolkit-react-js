
export const getGalleryPhotos = async (page) => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/photos/?page=" + page)
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/?_page=${page}`)
  if (res.status !== 200) throw new Error("не удалось загрузить фото")
  const data = await res.json()
  return data 
}
