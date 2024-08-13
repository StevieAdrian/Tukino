import axios from "axios"

interface animeInfo {
  title: string;
  episodes: number;
  genre: string;
  studio: string;
  description: string;
  rating: number;
}

export const handleSubmit = (prop: animeInfo) => {
  axios.post('http://localhost:5286/api/anime', prop).then(response => {
    console.log("Anime added successfully", response.data)
  }).catch(error => {
    console.error("An error occured when adding the anime!", error);
  })
}