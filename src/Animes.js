import React from 'react'
import { Link } from 'react-router-dom';
import styles from './css/Animes.module.css';

const Animes = () => {

  const [animes, setAnimes] = React.useState();

  React.useEffect(() => {

    async function getAnimes() {
      const request = await fetch('https://api.jikan.moe/v4/anime?limit=12');
      const { data } = await request.json();

      setAnimes(data);
    }

    getAnimes();

  }, []);

  console.log(animes);

  if(!animes) return null;

  return (
    <section className={styles.grid}>
      {
        animes.map(anime => {
          return (
            <Link to={`anime/${anime.mal_id}`} className={styles.container}>
              <div className={styles.imageContainer}>
                <img className={styles.img} src={anime.images.jpg.small_image_url} alt={anime.title} />
              </div>
              <h3 className={styles.title}>{anime.title}</h3>
            </Link>
          );
        })
      }
    </section>
  )
}

export default Animes