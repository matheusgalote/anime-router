import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './css/Anime.module.css';
import Title from './Title';

const Anime = () => {

  const { id } = useParams();
  const [anime, setAnime] = React.useState();

  React.useEffect(() => {
    async function getAnime() {
      const request = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
      const { data } = await request.json();

      setAnime(data);
    }
    getAnime()
  }, []);

  console.log(anime)

  if (anime)
    for (let i = 0; i < anime.genres.length; i++) {
      console.log(anime.genres[i].name)
    }

  if (!anime) return null;
  return (
    <div className={styles.container}>
      <Title title={anime.title} />
      <div className={styles.grid}>
        <div className={styles.image}>
          <img className={styles.img} src={anime.images.jpg.image_url} alt={anime.title} />
        </div>
        <div className={styles.tags}>
          <span className={styles.tag}>{anime.rating}</span>
          {
            anime.genres.map(genero => <span className={styles.genero}>{genero.name}</span>)
          }
        </div>
      </div>
      <p className={styles.description}>{anime.synopsis}</p>
    </div>
  )
}

export default Anime