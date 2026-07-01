import styles from "./MakingSection.module.css";

const steps = [
  {
    no: "1",
    icon: "/asset/art-wheat.svg",
    title: "SELECTED WHEAT",
    desc: "Carefully chosen for the best quality.",
  },
  {
    no: "2",
    icon: "/asset/wheat-milk.svg",
    title: "WHEAT MILK EXTRACTION",
    desc: "Extracted to perfection.",
  },
  {
    no: "3",
    icon: "/asset/slow-cooking.svg",
    title: "SLOW COOKING",
    desc: "Cooked patiently over controlled heat.",
  },
  {
    no: "4",
    icon: "/asset/ghee-pot.svg",
    title: "PURE GHEE",
    desc: "Pure ghee added gradually.",
  },
  {
    no: "5",
    icon: "/asset/perfect-texture.svg",
    title: "PERFECT TEXTURE",
    desc: "Expert hands ensure the right texture.",
  },
  {
    no: "6",
    icon: "/asset/fresh.svg",
    title: "FRESHLY SERVED",
    desc: "Made fresh and served with love.",
  },
];

export default function MakingSection() {
  return (
    <section className={styles.makingSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>THE ART OF MAKING HALWA</h2>

        <div className={styles.timeline}>
          {steps.map((step) => (
            <div className={styles.step} key={step.no}>
              <div className={styles.circle}>
                <img src={step.icon} alt="" aria-hidden="true" className={styles.icon} />
              </div>

              <div className={styles.number}>{step.no}</div>

              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
