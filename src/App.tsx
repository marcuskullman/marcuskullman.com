import styles from "./app.module.scss"

export default function App() {
  return (
    <div className={styles.app}>
      <p>
        Freelancing senior interface development & expert interaction design
        consultant.
        <br />
        Ecommerce entrepreneur, writer, and photographer.
        <br />
        <a href="mailto:marcus@marcuskullman.com" className={styles.link}>
          marcus@marcuskullman.com
        </a>
      </p>
    </div>
  )
}
