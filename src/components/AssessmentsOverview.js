import React from "react";
import styles from "./AssessmentsOverview.module.css";

const AssessmentsOverview = () => {
  return (
    <div className={styles.property1frame1000010251Inner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.totalAssessmentParent}>
            <div className={styles.totalAssessment}>Total Assessment</div>
            <div className={styles.frameContainer}>
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-1000009100.svg"
              />
              <div className={styles.div}>34</div>
            </div>
          </div>
          <img className={styles.frameItem} alt="" src="/vector-364.svg" />
          <div className={styles.totalAssessmentParent}>
            <div className={styles.totalAssessment}>Total Purpose</div>
            <div className={styles.frameContainer}>
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-10000091001.svg"
              />
              <div className={styles.div}>11</div>
            </div>
          </div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector-361.svg" />
        <div className={styles.candidatesParent}>
          <div className={styles.totalAssessment}>Candidates</div>
          <div className={styles.frameParent1}>
            <img
              className={styles.frameChild}
              alt=""
              src="/frame-1000009353.svg"
            />
            <div className={styles.frameParent2}>
              <div className={styles.parent}>
                <div className={styles.div}>11,145</div>
                <div className={styles.div3}>+89</div>
              </div>
              <div className={styles.totalCandidate}>Total Candidate</div>
            </div>
            <img className={styles.frameChild1} alt="" src="/vector-250.svg" />
            <div className={styles.frameParent2}>
              <div className={styles.parent}>
                <div className={styles.div}>1,14</div>
                <div className={styles.div3}>+89</div>
              </div>
              <div className={styles.totalCandidate}>Who Attamped</div>
            </div>
          </div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector-361.svg" />
        <div className={styles.candidatesParent}>
          <div className={styles.totalAssessment}>Candidates Source</div>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameChild}
              alt=""
              src="/frame-1000005832.svg"
            />
            <div className={styles.frameParent2}>
              <div className={styles.parent}>
                <div className={styles.div}>11,000</div>
                <div className={styles.div3}>+89</div>
              </div>
              <div className={styles.totalCandidate}>E-mail</div>
            </div>
            <img className={styles.frameChild1} alt="" src="/vector-250.svg" />
            <div className={styles.frameParent2}>
              <div className={styles.parent}>
                <div className={styles.div}>11,000</div>
                <div className={styles.div3}>+89</div>
              </div>
              <div className={styles.totalCandidate}>Social Share</div>
            </div>
            <img className={styles.frameChild1} alt="" src="/vector-250.svg" />
            <div className={styles.frameParent2}>
              <div className={styles.parent}>
                <div className={styles.div}>11,000</div>
                <div className={styles.div3}>+89</div>
              </div>
              <div className={styles.totalCandidate}>Unique Link</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentsOverview;
