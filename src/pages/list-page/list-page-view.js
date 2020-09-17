import React from "react";
import styles from "./list-page.module.css";
import { connect } from "react-redux";

const ListPage = (props) => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.wrapper}>
      <h1>Your to do list :)</h1>
      {props.list.map((item) => (
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

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps)(ListPage);
