import { useNavigate } from "react-router-dom";
import styles from "./NewAssessment.module.css";
import { useCallback } from "react";
const NewAssessment = ({onClose}) => {
  
  const navigate = useNavigate();

  const handleSave = () => {
    alert("Saved")
  }
  const homeHandle = useCallback(() => {
    // Please sync "iPhone 13 mini - 7" to the project
    navigate('/');
  }, []);
  return (
    <div className={styles.frameParent}>
      <div className={styles.createNewAssessmentParent}>
        <div className={styles.button} onClick={homeHandle}>Create new assessment</div>
        <div onClick={onClose}>
          <img className={styles.cutIcon1} alt="" src="/cut.svg" />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameDiv}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.typeHere}>Name of assessment</div>
          </div>
          <input type="text" className={styles.typeHereWrapper} placeholder="Type Here"/>
        </div>

        <div className={styles.frameDiv}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.typeHere}>Purpose of the test is</div>
          </div>
          <select className={styles.selectParent}>
            <option value="UI/UX and Design">Job</option>
            <option value="No of Question">Knowledge</option>
            <option value="Web Development">Improve Skills</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={styles.frameDiv}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.typeHere}>Description</div>
          </div>
          <select className={styles.selectParent}>
            <option value="UI/UX and Design">UI/UX and Design</option>
            <option value="No of Question">No of Question</option>
            <option value="Web Development">Web Development</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={styles.frameDiv}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.typeHere}>Skills</div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.frameParent5}>
              <div className={styles.frameParent6}>
                <div className={styles.frameWrapper}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.typeHere}>UI/UX and Design</div>
                    <img
                      className={styles.closeIcon5}
                      alt=""
                      src="/close.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.typeHere}>No of Question</div>
                    <img
                      className={styles.closeIcon5}
                      alt=""
                      src="/close.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.typeHere}>Web Development</div>
                    <img
                      className={styles.closeIcon5}
                      alt=""
                      src="/close.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.frameWrapper}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.typeHere}>UI/UX and Design</div>
                    <img
                      className={styles.closeIcon5}
                      alt=""
                      src="/close.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.typeHere}>Web Development</div>
                    <img
                      className={styles.closeIcon5}
                      alt=""
                      src="/close.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <input className={styles.typeHereContainer} type="text" placeholder="Type Here"/>
          </div>
        </div>
        {/* <div className={styles.frameDiv}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.typeHere}>Duration of assessment</div>
          </div>
          <input className={styles.hhmmssParent} value="00:00:00" type="time" step="2"/>
        </div> */}
      </div>
      <div className={styles.buttonsWrapper}>
        <div className={styles.buttons}>
          <div onClick={handleSave}>
            <a style={{color: "aliceblue", textDecoration: "none"}} href="#">Save</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAssessment;
