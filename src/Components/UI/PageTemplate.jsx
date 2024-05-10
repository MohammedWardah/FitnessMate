import styles from "./PageTemplate.module.css";

const PageTemplate = ({ title, children }) => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </main>
  );
};

export default PageTemplate;
