import styles from "./loaders.module.css";

export default function FullPageLoader({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.fullPageWrap}>
        <div className={styles.fullPage}>
          <div className={styles.boxWrap}>
            <div className={styles.box}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
