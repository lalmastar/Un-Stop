import { useNavigate } from "react-router-dom";
import styles from "./SubSection.module.css";
import { useCallback, useState } from "react";
const SubSection = ({ onClose }) => {

  const handleNext = () => {
    alert("Next Page")
  }

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.subSectionDetailsWrapper}>
            <div className={styles.subSectionDetails}>Sub-Section Details</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.checkWrapper}>
              <img className={styles.checkIcon} alt="" src="/check.svg" />
            </div>
            <div className={styles.cutWrapper} >
              <div onClick={onClose}>
              <img  className={styles.cutIcon} alt="" src="/cut1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameParent1}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.nameOfAssessment}>Name of assessment</div>
          </div>
          <input type="text" className={styles.typeHereWrapper} placeholder="Type Here"/>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.nameOfAssessment}>Purpose of the test is</div>
          </div>
          <select className={styles.selectParent}>
            <option value="UI/UX and Design">Job</option>
            <option value="No of Question">Knowledge</option>
            <option value="Web Development">Improve Skills</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.nameOfAssessment}>Description</div>
          </div>
          <select className={styles.selectParent}>
            <option value="UI/UX and Design">UI/UX and Design</option>
            <option value="No of Question">No of Question</option>
            <option value="Web Development">Web Development</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.nameOfAssessment}>Skills</div>
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent6}>
                <div className={styles.frameWrapper2}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.nameOfAssessment}>
                      UI/UX and Design
                    </div>
                    <img className={styles.closeIcon} alt="" src="/close.svg" />
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.nameOfAssessment}>
                      Web Development
                    </div>
                    <img className={styles.closeIcon} alt="" src="/close.svg" />
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.nameOfAssessment}>
                      UI/UX and Design
                    </div>
                    <img className={styles.closeIcon} alt="" src="/close.svg" />
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.nameOfAssessment}>
                      No of Question
                    </div>
                    <img className={styles.closeIcon} alt="" src="/close.svg" />
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.uiuxAndDesignParent}>
                    <div className={styles.nameOfAssessment}>
                      Web Development
                    </div>
                    <img className={styles.closeIcon} alt="" src="/close.svg" />
                  </div>
                </div>
              </div>
            </div>
            <input className={styles.typeHereContainer} type="text" placeholder="Type Here"/>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.nameOfAssessment}>
              Duration of assessment
            </div>
          </div>
          <input className={styles.selectParent} value="00:00:00" type="time" step="2"/>        
        </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <div className={styles.buttons}>
          <div className={styles.subSectionDetails} onClick={handleNext}>
            <a style={{color: "aliceblue", textDecoration: "none"}} href="#">Next</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSection;
