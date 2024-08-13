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
          <div className="flex justify-end p-4 border-t">
            <button style={{backgroundColor: '#EA4C88', }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cc3b72')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EA4C88")} className="px-4 py-2 text-white transition rounded-lg"> Add </button>
          </div>
        </form>
      </CreateAnimeLayout>
    </div>
  )
}

export default AdminCreateAnime;