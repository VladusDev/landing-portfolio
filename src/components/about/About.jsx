import styles from "./About.module.scss";

import {
  AiIcon,
  DownloadIcon,
  FigmaIcon,
  PrIcon,
  PsIcon,
  XdIcon,
} from "../icons/Icons";
import { useState } from "react";
import { ButtonColor } from "../button/Button";
import aboutImg from "../../assets/images/about/about-img.png";
import Pie from "./Circle";

function About() {
  const [dataProgress, setDataProgress] = useState({
    figma: {
      name: "Figma",
      percentage: 100,
      colour: "#fd6f00",
    },
    xd: {
      name: "Adobe XD",
      percentage: 100,
      colour: "#fd6f00",
    },
    ps: {
      name: "Adobe Photoshop",
      percentage: 85,
      colour: "#fd6f00",
    },
    ai: {
      name: "Adobe Illustrator",
      percentage: 60,
      colour: "#fd6f00",
    },
    pr: {
      name: "Adobe Premiere",
      percentage: 70,
      colour: "#fd6f00",
    },
  });

  return (
    <div className="container">
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutTitle}>About Me</div>
          <div className={styles.aboutSubTitle}>
            User interface and user experience ans also video editing
          </div>
        </div>
        <div className={styles.aboutRow}>
          <div className={styles.aboutImg}>
            <img src={aboutImg} alt="" />
          </div>
          <div className={styles.aboutDesc}>
            <p>
              A software engineer, the modern-day architect of digital realms,
              navigates the ethereal landscapes of code, sculpting intangible
              structures that shape our technological world. With fingers poised
              over keyboards like virtuoso pianists, they compose symphonies of
              logic, their minds a labyrinth.
            </p>
            <div className={styles.aboutBtn}>
              <ButtonColor fz={20}>
                <div className={styles.aboutIcon}>
                  <DownloadIcon />
                  Download CV
                </div>
              </ButtonColor>
            </div>
          </div>
        </div>

        <div className={styles.aboutSkillsRow}>
          <div className={styles.aboutSkillCard}>
            <div className={styles.aboutSkillProgress}>
              <div className={styles.aboutSkillItem}>
                <Pie
                  percentage={dataProgress.figma.percentage}
                  colour={dataProgress.figma.colour}
                />
                <div className={styles.aboutSkillIcon}>
                  <FigmaIcon />
                </div>
              </div>
            </div>
            <div className={styles.aboutSkillDesc}>
              <div
                className={styles.aboutSkillPercentage}
              >{`${dataProgress.figma.percentage}%`}</div>
              <div className={styles.aboutSkillName}>
                {dataProgress.figma.name}
              </div>
            </div>
          </div>

          <div className={styles.aboutSkillCard}>
            <div className={styles.aboutSkillProgress}>
              <div className={styles.aboutSkillItem}>
                <Pie
                  percentage={dataProgress.xd.percentage}
                  colour={dataProgress.xd.colour}
                />
                <div className={styles.aboutSkillIcon}>
                  <XdIcon />
                </div>
              </div>
            </div>
            <div className={styles.aboutSkillDesc}>
              <div
                className={styles.aboutSkillPercentage}
              >{`${dataProgress.xd.percentage}%`}</div>
              <div className={styles.aboutSkillName}>
                {dataProgress.xd.name}
              </div>
            </div>
          </div>

          <div className={styles.aboutSkillCard}>
            <div className={styles.aboutSkillProgress}>
              <div className={styles.aboutSkillItem}>
                <Pie
                  percentage={dataProgress.ps.percentage}
                  colour={dataProgress.ps.colour}
                />
                <div className={styles.aboutSkillIcon}>
                  <PsIcon />
                </div>
              </div>
            </div>
            <div className={styles.aboutSkillDesc}>
              <div
                className={styles.aboutSkillPercentage}
              >{`${dataProgress.ps.percentage}%`}</div>
              <div className={styles.aboutSkillName}>
                {dataProgress.ps.name}
              </div>
            </div>
          </div>

          <div className={styles.aboutSkillCard}>
            <div className={styles.aboutSkillProgress}>
              <div className={styles.aboutSkillItem}>
                <Pie
                  percentage={dataProgress.ai.percentage}
                  colour={dataProgress.ai.colour}
                />
                <div className={styles.aboutSkillIcon}>
                  <AiIcon />
                </div>
              </div>
            </div>
            <div className={styles.aboutSkillDesc}>
              <div
                className={styles.aboutSkillPercentage}
              >{`${dataProgress.ai.percentage}%`}</div>
              <div className={styles.aboutSkillName}>
                {dataProgress.ai.name}
              </div>
            </div>
          </div>

          <div className={styles.aboutSkillCard}>
            <div className={styles.aboutSkillProgress}>
              <div className={styles.aboutSkillItem}>
                <Pie
                  percentage={dataProgress.pr.percentage}
                  colour={dataProgress.pr.colour}
                />
                <div className={styles.aboutSkillIcon}>
                  <PrIcon />
                </div>
              </div>
            </div>
            <div className={styles.aboutSkillDesc}>
              <div
                className={styles.aboutSkillPercentage}
              >{`${dataProgress.pr.percentage}%`}</div>
              <div className={styles.aboutSkillName}>
                {dataProgress.pr.name}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
