import styles from './index.module.css';

export default function Title() {
  return (
    <div className={styles.Title}>
      <p>
        The content below includes some boxes, open react dev tool settings, and tick "Highlight
        updates when components render" you will see when dragging one of the boxes around the whole
        content(all boxes and sidebar) is re-rendered, it is not efficient at all when only the box
        that we were dragging and the position of that box need to be re-rendered. You will fix
        that, if you use any state management outside of React tree(like{' '}
        <a href="https://github.com/reduxjs/redux">Redux</a>,{' '}
        <a href="https://github.com/pmndrs/zustand">Zustand</a>, etc.) you have to implement it on
        your own (it just needs to be simple to solve this problem, we recommend flowing the API of{' '}
        <a href="https://github.com/pmndrs/zustand">Zustand</a> or event-driven pattern).
      </p>
    </div>
  );
}
