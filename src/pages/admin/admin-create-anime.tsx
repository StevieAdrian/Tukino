import AnimeInput from "../../components/elements/input/AnimeInput";
import CreateAnimeLayout from "../../components/layouts/CreateAnimeLayout";
import { useAnimeForm } from "../../hooks/useAnimeForm";


const AdminCreateAnime = () => {
  const { formData, handleInputChange, handleFormSubmit } = useAnimeForm();
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
        </form>
      </CreateAnimeLayout>
    </div>
  )
}


export default AdminCreateAnime;