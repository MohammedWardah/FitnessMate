import styles from "./PageTemplate.module.css";

const PageTemplate = ({ title, children }) => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
      <div className={styles.bottomFiller}></div>
    </main>
  );
};

export default PageTemplate;
