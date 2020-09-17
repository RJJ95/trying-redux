import React from "react";
import styles from "./list-page.module.css";
import { connect } from "react-redux";

const ListPage = (props) => {
  function handleFormSubmit(e) {
    e.preventDefault();
    props.addListItem()
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
      <form className={styles.addItemForm} onSubmit={() => handleFormSubmit()}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addListItem: () => dispatch({ type: "ADD_LIST_ITEM" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
