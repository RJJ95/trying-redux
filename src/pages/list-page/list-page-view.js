import React from "react";
import styles from "./list-page.module.css";
import { connect } from "react-redux";

const ListPage = (props) => {
  function handleFormSubmit(e) {
    e.preventDefault();
    props.addListItem();
    props.resetToDoTitle();
  }

  return (
    <div className={styles.wrapper}>
      <h1>Your to do list :)</h1>
      {props.list.map((item, index) => (
        <div
          key={index}
          className={`${styles.itemRow} ${
            item.executed && styles.greenBackground
          }`}
        >
          <div className={styles.itemTitle}>{item.title}</div>
          <div>
            <button
              onClick={() => props.checkItem(item.id)}
              className={styles.checkItem}
            >
              Mark as done
            </button>
            <button
              onClick={() => props.removeItem(item.id)}
              className={styles.removeItem}
            >
              Remove item
            </button>
          </div>
        </div>
      ))}
      <form className={styles.addItemForm} onSubmit={handleFormSubmit}>
        <input
          value={props.toDoTitleValue}
          onChange={props.setToDoTitle}
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
    toDoTitleValue: state.toDoTitle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addListItem: () => dispatch({ type: "ADD_LIST_ITEM" }),
    setToDoTitle: (e) =>
      dispatch({ type: "SET_TODO_TITLE", title: e.target.value }),
    resetToDoTitle: () => dispatch({ type: "RESET_TODO_TITLE" }),
    removeItem: (itemId) => dispatch({ type: "REMOVE_ITEM", itemId: itemId }),
    checkItem: (itemId) => dispatch({ type: "CHECK_ITEM", itemId: itemId }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
