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
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.wrapper}>
      <h1>Your to do list :)</h1>
      {list.map((item) => (
        <div className={styles.itemRow}>
          <div className={styles.itemTitle}>{item.title}</div>
          <div>
            <button className={styles.checkItem}>Mark as done</button>
            <button className={styles.removeItem}>Remove this item</button>
          </div>
        </div>
      ))}
      <form className={styles.addItemForm} onSubmit={handleSubmit}>
        <input
          className={styles.addItemInput}
          type="text"
          placeholder="What do you need to do?"
          required
        />
        <button type="submit">Add item</button>
      </form>
    </div>
  );
};

export default ListPage;
