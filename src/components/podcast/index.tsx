import { type FC } from "react"
import Banner from "./podcast.webp"
import styles from "./podcast.module.scss"

export const Podcast: FC = () => {
  return (
    <div className={styles.podcast}>
      <figure className={styles.figure}>
        <img
          src={Banner}
          className={styles.image}
          alt="Marcus Kullman Podcast"
        />
        <div className={styles.links}>
          <p className={styles.description}>
            Frilansande gränssnittsutvecklare, interaktionsdesigner, fotograf &
            författare.
          </p>
          <a
            href="https://open.spotify.com/show/2JjIvkufqT8WGaggtlHOy9?si=30d85af9c45f483f"
            className={styles.link}
          >
            Podcast
          </a>
          {" | "}
          <a
            href="https://chatgpt.com/g/g-68721b3f753081918f555423389902d2-marcus-kullman"
            className={styles.link}
          >
            ChatGPT-avatar
          </a>
          {" | "}
          <a href="https://x.com/marcuskallman" className={styles.link}>
            Profil på X
          </a>
        </div>
      </figure>
      <div className={styles.vignette}>
        <img src={Banner} className={styles.image2} alt="" />
      </div>
    </div>
  )
}
