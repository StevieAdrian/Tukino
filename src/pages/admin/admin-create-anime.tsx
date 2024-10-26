import { useState } from "react";
import AnimeInput from "../../components/elements/input/AnimeInput";
import CreateAnimeLayout from "../../components/layouts/CreateAnimeLayout";
import { useAnimeForm } from "../../hooks/useAnimeForm";
import images from "../../assets/login.png";


const AdminCreateAnime = () => {
  const { formData, handleInputChange, handleFormSubmit, handleImageChange } = useAnimeForm();
  return (
    <div>
      <CreateAnimeLayout>
        <form onSubmit={handleFormSubmit} action="">
          <AnimeInput type="text" name="title" value={formData.title} onChange={handleInputChange}>Title</AnimeInput>
          <AnimeInput type="number" name="episodes" value={formData.episodes} onChange={handleInputChange}>Episode(s)</AnimeInput>
          <AnimeInput type="text" name="genre" value={formData.genre} onChange={handleInputChange}>Genre</AnimeInput>
          <AnimeInput type="text" name="studio" value={formData.studio} onChange={handleInputChange}>Studio</AnimeInput>
          <AnimeInput type="text" name="description" value={formData.description} onChange={handleInputChange}>Description</AnimeInput>
          <AnimeInput type="number" name="rating" value={formData.rating} onChange={handleInputChange}>Rating</AnimeInput>
          <ImageInput onFileChange={handleImageChange}></ImageInput>
          <div className="flex justify-end p-4 border-t">
            <button type="submit" style={{backgroundColor: '#EA4C88', }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cc3b72')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EA4C88")} className="px-4 py-2 text-white transition rounded-lg"> Add </button>
          </div>
        </form>
      </CreateAnimeLayout>
    </div>
  )
}

const ImageInput = ({onFileChange}: {onFileChange: (fileBase64: string | null) => void}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]){
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = () => {
        const base64String = reader.result as string;
        console.log("Loaded base64: ", base64String);
        setSelectedImage(base64String);
        onFileChange(base64String);
      }
      
      reader.readAsDataURL(file);
    }

  }

  const triggerFileSelect = () => {
    const fileInput = document.getElementById("file-input");
      if (fileInput) {
        fileInput.click();
      }
  };
    
  return (
    <div className="flex items-center justify-center w-1/3">
      <input id="file-input" type="file" style={{display: "none"}} accept="image/*" onChange={handleImageChange}/>
      <img src={selectedImage || images} alt="Form Image" className="w-64 rounded-lg shadow-l" onClick={triggerFileSelect} />   
    </div>
  )
}

export default AdminCreateAnime;