import styles from './index.module.css';
import Content from './Content';
import Title from './Title';

export default function ImproveArrayRender() {
  return (
    <div className={styles.Container}>
      <Title />
      <Content />
    </div>
  );
}
