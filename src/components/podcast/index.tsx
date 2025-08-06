import { type FC } from "react"
import Banner from "./podcast.webp"
import styles from "./podcast.module.scss"

export const Podcast: FC = () => {
  return (
    <>
      <div className={styles.podcast}>
        <figure className={styles.figure}>
          <img
            src={Banner}
            className={styles.image}
            alt="Marcus Kullman Podcast"
          />
          <div className={styles.links}>
            <p className={styles.description}>marcus@marcuskullman.com</p>
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
              Min GPT
            </a>
            {" | "}
            <a href="https://www.bokaro.se" className={styles.link}>
              Bokaro
            </a>
            {" | "}
            <a
              href="https://kvartal.se/medverkande/marcus-kullman/"
              className={styles.link}
            >
              Kvartal
            </a>
          </div>
        </figure>
      </div>
      <div className={styles.vignette}>
        <img src={Banner} className={styles.image2} alt="" />
      </div>
    </>
  )
}
