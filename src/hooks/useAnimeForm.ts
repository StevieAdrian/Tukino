import { useState } from "react";
import { handleSubmit } from "../services/anime-service";

interface AnimeFormData {
  title: string;
  episodes: number;
  genre: string;  
  studio: string;
  description: string;
  rating: number;
  images: string | null;
}
export const useAnimeForm = () => {
  const [formData, setFormData] = useState<AnimeFormData>({
    title: '',
    episodes: 0,
    genre: '',
    studio: '',
    description: '',
    rating: 0,
    images: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    const newValue = name === "episodes" || name === "rating" ? parseFloat(value) : value;
    setFormData({
      ...formData,
      [name]: newValue,
    })
  }

  const handleImageChange = (base64String: string | null) => {
    console.log("Base64 Image:", base64String);
    setFormData({
      ...formData,
      images: base64String
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
    handleImageChange,
    handleFormSubmit
  }
}