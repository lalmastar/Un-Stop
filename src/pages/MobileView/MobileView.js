import { useState, useCallback } from "react";
import PortalPopup from "../../components/PortalPopup";
import styles from "./MobileView.module.css";
import { useNavigate } from "react-router-dom";
import MenuOption from "../../components/MenuOption";
import AssessmentsOverview from "../../components/AssessmentsOverview";
import SubSection from "../../components/SubSection";
const MobileView = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);
  const [isFrame2Open, setFrame2Open] = useState(false);
  const [isFrame3Open, setFrame3Open] = useState(false);

  const navigate = useNavigate();

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    // Please sync "Frame 1000009409" to the project
  }, []);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  const openFrame3 = useCallback(() => {
    setFrame3Open(true);
  }, []);

  const closeFrame3 = useCallback(() => {
    setFrame3Open(false);
  }, []);

  const onFrameContainer155Click = useCallback(() => {
    // Please sync "Frame 1000009409" to the project
    navigate('/');
  }, []);

  return (
    <>
      <div className={styles.iphone13Mini7}>
        <div className={styles.frameParent}>

          <div className={styles.statusBarParent}>
            <div className={styles.statusBar}>
              <img className={styles.icon} alt="" src="/941.svg" />
              <div className={styles.frame}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-1000007851.svg"
                />
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.segmentWrapper} onClick={openFrame}>
                  <img
                    className={styles.segmentIcon}
                    alt=""
                    src="/segment.svg"
                  />
                </div>
                <div className={styles.assessment}>Assessment</div>
              </div>
              <div
                className={styles.laptopMacWrapper}
                onClick={onFrameContainer3Click}
              >
                <img
                  className={styles.laptopMacIcon}
                  alt=""
                  src="/laptop-mac.svg"
                />
              </div>
            </div>
            
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.myAssessmentsWrapper}>
                  <div className={styles.myAssessments}>My Assessments</div>
                </div>
                <div className={styles.unstopAssessmentsWrapper}>
                  <div className={styles.myAssessments}>Unstop Assessments</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.component61Wrapper}>
          <AssessmentsOverview/>
            <div className={styles.statusBarParent}>
              <div className={styles.frameParent1}>
                <div className={styles.myAssessmentParent}>
                  <div className={styles.myAssessment}>My Assessment</div>
                  <div className={styles.frameParent2}>
                    <div className={styles.searchWrapper}>
                      <img
                        className={styles.searchIcon}
                        alt=""
                        src="/search.svg"
                      />
                    </div>
                    <div className={styles.searchWrapper}>
                      <img
                        className={styles.filterListAltIcon}
                        alt=""
                        src="/filter-list-alt.svg"
                      />
                    </div>
                    <div className={styles.searchWrapper}>
                      <div className={styles.barChartWrapper}>
                        <img
                          className={styles.barChartIcon}
                          alt=""
                          src="/bar-chart.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.frameParent4} onClick={openFrame1}>
                    <div className={styles.frameParent5}>
                      <div className={styles.addWrapper}>
                        <img className={styles.addIcon} alt="" src="/add.svg" />
                      </div>
                      <div className={styles.myAssessment}>New Assessment</div>
                    </div>
                    <div className={styles.fromHereYou}>
                      From here you can add questions of multiple types like
                      MCQs, subjective (text or paragraph)!
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className={styles.mathAssessmentParent}>
                          <div className={styles.myAssessment}>
                            Math Assessment
                          </div>
                          <div className={styles.jobParent}>
                            <div className={styles.job}>Job</div>
                            <img
                              className={styles.frameInner}
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className={styles.frameWrapper1}>
                              <div className={styles.scheduleParent}>
                                <img
                                  className={styles.scheduleIcon}
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className={styles.myAssessments}>
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dotWrapper}>
                        <img
                          className={styles.barChartIcon}
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Duration</div>
                        </div>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Questions</div>
                        </div>
                      </div>
                      <div className={styles.frameParent11}>
                        <div className={styles.linkParent}>
                          <img
                            className={styles.linkIcon}
                            alt=""
                            src="/link.svg"
                          />
                          <div className={styles.share}>Share</div>
                        </div>
                        <div className={styles.frameWrapper2}>
                          <div className={styles.lpWrapper}>
                            <b className={styles.lp}>LP</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className={styles.mathAssessmentParent}>
                          <div className={styles.myAssessment}>
                            Math Assessment
                          </div>
                          <div className={styles.jobParent}>
                            <div className={styles.job}>Job</div>
                            <img
                              className={styles.frameInner}
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className={styles.frameWrapper1}>
                              <div className={styles.scheduleParent}>
                                <img
                                  className={styles.scheduleIcon}
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className={styles.myAssessments}>
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dotWrapper}>
                        <img
                          className={styles.barChartIcon}
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Duration</div>
                        </div>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Questions</div>
                        </div>
                      </div>
                      <div className={styles.frameParent17}>
                        <div className={styles.linkParent}>
                          <img
                            className={styles.linkIcon}
                            alt=""
                            src="/link1.svg"
                          />
                          <div className={styles.share}>Share</div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.frameParent19}>
                            <div className={styles.lpContainer}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpFrame}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpWrapper1}>
                              <b className={styles.lp}>LP</b>
                            </div>
                          </div>
                          <div className={styles.div4}>+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className={styles.mathAssessmentParent}>
                          <div className={styles.myAssessment}>
                            Math Assessment
                          </div>
                          <div className={styles.jobParent}>
                            <div className={styles.job}>Job</div>
                            <img
                              className={styles.frameInner}
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className={styles.frameWrapper1}>
                              <div className={styles.scheduleParent}>
                                <img
                                  className={styles.scheduleIcon}
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className={styles.myAssessments}>
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dotWrapper}>
                        <img
                          className={styles.barChartIcon}
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Duration</div>
                        </div>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Questions</div>
                        </div>
                      </div>
                      <div className={styles.frameParent17}>
                        <div className={styles.linkParent}>
                          <img
                            className={styles.linkIcon}
                            alt=""
                            src="/link2.svg"
                          />
                          <div className={styles.share}>Share</div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.frameParent19}>
                            <div className={styles.lpContainer}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpFrame}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpWrapper1}>
                              <b className={styles.lp}>LP</b>
                            </div>
                          </div>
                          <div className={styles.div4}>+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className={styles.mathAssessmentParent}>
                          <div className={styles.myAssessment}>
                            Math Assessment
                          </div>
                          <div className={styles.jobParent}>
                            <div className={styles.job}>Job</div>
                            <img
                              className={styles.frameInner}
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className={styles.frameWrapper1}>
                              <div className={styles.scheduleParent}>
                                <img
                                  className={styles.scheduleIcon}
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className={styles.myAssessments}>
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dotWrapper}>
                        <img
                          className={styles.barChartIcon}
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Duration</div>
                        </div>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Questions</div>
                        </div>
                      </div>
                      <div className={styles.frameParent17}>
                        <div className={styles.linkParent}>
                          <img
                            className={styles.linkIcon}
                            alt=""
                            src="/link2.svg"
                          />
                          <div className={styles.share}>Share</div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.frameParent19}>
                            <div className={styles.lpContainer}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpFrame}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpWrapper1}>
                              <b className={styles.lp}>LP</b>
                            </div>
                          </div>
                          <div className={styles.div4}>+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className={styles.mathAssessmentParent}>
                          <div className={styles.myAssessment}>
                            Math Assessment
                          </div>
                          <div className={styles.jobParent}>
                            <div className={styles.job}>Job</div>
                            <img
                              className={styles.frameInner}
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className={styles.frameWrapper1}>
                              <div className={styles.scheduleParent}>
                                <img
                                  className={styles.scheduleIcon}
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className={styles.myAssessments}>
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dotWrapper}>
                        <img
                          className={styles.barChartIcon}
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Duration</div>
                        </div>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Questions</div>
                        </div>
                      </div>
                      <div className={styles.frameParent17}>
                        <div className={styles.linkParent}>
                          <img
                            className={styles.linkIcon}
                            alt=""
                            src="/link1.svg"
                          />
                          <div className={styles.share}>Share</div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.frameParent19}>
                            <div className={styles.lpContainer}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpFrame}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpWrapper1}>
                              <b className={styles.lp}>LP</b>
                            </div>
                          </div>
                          <div className={styles.div4}>+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className={styles.mathAssessmentParent}>
                          <div className={styles.myAssessment}>
                            Math Assessment
                          </div>
                          <div className={styles.jobParent}>
                            <div className={styles.job}>Job</div>
                            <img
                              className={styles.frameInner}
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className={styles.frameWrapper1}>
                              <div className={styles.scheduleParent}>
                                <img
                                  className={styles.scheduleIcon}
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className={styles.myAssessments}>
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dotWrapper}>
                        <img
                          className={styles.barChartIcon}
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Duration</div>
                        </div>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Questions</div>
                        </div>
                      </div>
                      <div className={styles.frameParent17}>
                        <div className={styles.linkParent}>
                          <img
                            className={styles.linkIcon}
                            alt=""
                            src="/link1.svg"
                          />
                          <div className={styles.share}>Share</div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.frameParent19}>
                            <div className={styles.lpContainer}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpFrame}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpWrapper1}>
                              <b className={styles.lp}>LP</b>
                            </div>
                          </div>
                          <div className={styles.div4}>+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className={styles.mathAssessmentParent}>
                          <div className={styles.myAssessment}>
                            Math Assessment
                          </div>
                          <div className={styles.jobParent}>
                            <div className={styles.job}>Job</div>
                            <img
                              className={styles.frameInner}
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className={styles.frameWrapper1}>
                              <div className={styles.scheduleParent}>
                                <img
                                  className={styles.scheduleIcon}
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className={styles.myAssessments}>
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dotWrapper}>
                        <img
                          className={styles.barChartIcon}
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Duration</div>
                        </div>
                        <div className={styles.parent}>
                          <div className={styles.myAssessment}>00</div>
                          <div className={styles.duration}>Questions</div>
                        </div>
                      </div>
                      <div className={styles.frameParent17}>
                        <div className={styles.linkParent}>
                          <img
                            className={styles.linkIcon}
                            alt=""
                            src="/link3.svg"
                          />
                          <div className={styles.share}>Share</div>
                        </div>
                        <div className={styles.frameParent18}>
                          <div className={styles.frameParent19}>
                            <div className={styles.lpContainer}>
                              <b className={styles.lp}>LP</b>
                            </div>
                            <div className={styles.lpWrapper1}>
                              <b className={styles.lp}>LP</b>
                            </div>
                          </div>
                          <div className={styles.div4}>+32,4090</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addContainer} onClick={openFrame2}>
          <img className={styles.addIcon} alt="" src="/add1.svg" />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.statusBar}>
            <img className={styles.icon} alt="" src="/941.svg" />
            <div className={styles.frame}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-1000007851.svg"
              />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.segmentWrapper} onClick={openFrame3}>
                <img className={styles.segmentIcon} alt="" src="/segment.svg" />
              </div>
              <div className={styles.assessment}>Assessment</div>
            </div>
            <div
              className={styles.laptopMacWrapper}
              onClick={onFrameContainer155Click}
            >
              <img
                className={styles.laptopMacIcon}
                alt=""
                src="/laptop-mac.svg"
              />
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.myAssessmentsWrapper}>
                <div className={styles.myAssessments}>My Assessments</div>
              </div>
              <div className={styles.frameActive}>
                <div className={styles.unstopAssessmentsWrapper}>
                  <div className={styles.myAssessments}>Unstop Assessments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <MenuOption onClose={closeFrame} />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <SubSection onClose={closeFrame1} />
        </PortalPopup>
      )}
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <SubSection onClose={closeFrame2} />
        </PortalPopup>
      )}
      {isFrame3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame3}
        >
          <MenuOption onClose={closeFrame3} />
        </PortalPopup>
      )}
    </>
  );
};

export default MobileView;
