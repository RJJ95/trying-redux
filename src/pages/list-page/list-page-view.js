import React from "react";
import styles from "./list-page.module.css";

const list = [
  {
    title: "Hello darkness, my old friend",
    executed: false,
  },
  {
    title: "I've come to talk to you again",
    executed: true,
  },
  {
    title: "Because a vision softly creeping",
    executed: false,
  },
];

const ListPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Your to do list :)</h1>
      </div>
      <div className={styles.listBody}>
        {list.map((item) => (
          <div className={styles.itemRow}>
            <div className={styles.itemTitle}>{item.title}</div>
            <div className={styles.buttonGroup}>
              <button className={styles.checkItem}>Mark as done</button>
              <button className={styles.removeItem}>Remove this item</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPage;
