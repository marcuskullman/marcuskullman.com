import styles from "./app.module.scss"

export default function App() {
  return (
    <div className={styles.app}>
      <div>
        <h1 className={styles.heading}>
          Marcus
          <br />
          Kullman
        </h1>
        <h2 className={styles.subheading}>
          Interface development & interaction design
        </h2>
      </div>
    </div>
  )
}
