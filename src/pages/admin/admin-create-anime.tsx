import AnimeInput from "../../components/elements/input/AnimeInput";
import CreateAnimeLayout from "../../components/layouts/CreateAnimeLayout";


const AdminCreateAnime = () => {
  return (
    <div>
      <CreateAnimeLayout>
        <AnimeInput type="text">Title</AnimeInput>
        <AnimeInput type="text">Episode(s)</AnimeInput>
        <AnimeInput type="text">Genre</AnimeInput>
        <AnimeInput type="text">Studio</AnimeInput>
        <AnimeInput type="text">Description</AnimeInput>
        <AnimeInput type="number">Rating</AnimeInput>
      </CreateAnimeLayout>
    </div>
  )
}


export default AdminCreateAnime;