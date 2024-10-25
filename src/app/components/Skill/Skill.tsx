import styles from "../Skill/skill.module.css"
function Skill() {
  return (
    <>
      {/*MY SKILLS ANIMATION TEXT */}
      <div className={styles.skillParent}>
        <h1 >MY SKILLS</h1>
          <div className={styles.skillAnimatedText}>
            → Html &nbsp;→ Css &nbsp;→ Tailwind &nbsp;→ JavaScript &nbsp;→
            TypeScript &nbsp;→ React.js &nbsp;→ Next.js &nbsp;→ Node.js
          </div>
      </div>
    </>
  );
}

export default Skill;
