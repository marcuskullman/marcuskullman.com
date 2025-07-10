import { type FC } from "react"
import Banner from "./podcast.webp"
import styles from "./podcast.module.scss"

export const Podcast: FC = () => {
  return (
    <a
      href="https://open.spotify.com/show/2JjIvkufqT8WGaggtlHOy9?si=30d85af9c45f483f"
      className={styles.podcast}
    >
      <figure className={styles.figure}>
        <img
          src={Banner}
          className={styles.image}
          alt="Marcus Kullman Podcast"
        />
      </figure>
      <div className={styles.vignette}>
        <img
          src={Banner}
          className={styles.image2}
          alt="Marcus Kullman Podcast"
        />
      </div>
    </a>
  )
}
