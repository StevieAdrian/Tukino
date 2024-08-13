import { useState } from "react";
import { handleSubmit } from "../services/anime-service";

interface AnimeFormData {
  title: string;
  episodes: number;
  genre: string;
  studio: string;
  description: string;
  rating: number;
}
export const useAnimeForm = () => {
  const [formData, setFormData] = useState<AnimeFormData>({
    title: '',
    episodes: 0,
    genre: '',
    studio: '',
    description: '',
    rating: 0
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    const newValue = name === "episodes" || name === "rating" ? parseFloat(value) : value;
    setFormData({
      ...formData,
      [name]: newValue,
    })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)
    handleSubmit(formData)
  }

  return {
    formData,
    handleInputChange,
    handleFormSubmit
  }
}