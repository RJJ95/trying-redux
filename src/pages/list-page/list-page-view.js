import React from "react";
import styles from "./list-page.module.css";

const ListPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.listBody}>
          {list.map((item) => (
            <div className={styles.itemRow}>
              <div className={styles.itemTitle}></div>
              <div className={styles.buttonGroup}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
