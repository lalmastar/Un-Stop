import styles from "./MenuOption.module.css";
const MenuOption = ({ onClose }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.menuParent}>
          <div className={styles.menu}>Menu</div>
          <div onClick={onClose}>
            <img className={styles.cutIcon} alt="" src="/cut.svg" />
          </div>
        </div>

        <div className={styles.commonContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.dashboardParent}>
              <img className={styles.dashboardIcon} alt="" src="/dashboard.svg" />
              <div className={styles.menu}>Dashboard</div>
            </div>
          </div>
        </div>

        <div className={styles.commonContainer}>
          <div className={styles.frameContainer}>
            <div className={styles.noteAltParent}>
              <img className={styles.noteAltIcon} alt="" src="/note-alt.svg" />
              <div className={styles.assessment}>Assessment</div>
            </div>
            <div className={styles.frameChild} />
          </div>
        </div>

        <div className={styles.commonContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.dashboardParent}>
              <img className={styles.noteAltIcon} alt="" src="/quiz.svg" />
              <div className={styles.menu}>My Library</div>
            </div>
          </div>
        </div>
      </div>
      
      <img className={styles.frameItem} alt="" src="/vector-267.svg" />

      <div className={styles.frameWrapper1}>
        <div className={styles.frameParent1}>
          <div className={styles.dashboardParent}>
            <img className={styles.noteAltIcon} alt="" src="/admin-meds.svg" />
            <div className={styles.menu}>Round Status</div>
          </div>
          <div className={styles.adminWrapper}>
            <div className={styles.admin}>Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOption;
