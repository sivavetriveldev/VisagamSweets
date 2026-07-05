import styles from "./MakingSection.module.css";

const steps = [
  {
    no: "1",
    icon: "/asset/art-wheat.svg",
    title: "Selected Wheat",
    desc: "Carefully chosen for the best quality.",
  },
  {
    no: "2",
    icon: "/asset/wheat-milk.svg",
    title: "Wheat Milk Extraction",
    desc: "Extracted to perfection.",
  },
  {
    no: "3",
    icon: "/asset/slow-cooking.svg",
    title: "Slow Cooking",
    desc: "Cooked patiently over controlled heat.",
  },
  {
    no: "4",
    icon: "/asset/ghee-pot.svg",
    title: "Pure Ghee",
    desc: "Pure ghee added gradually.",
  },
  {
    no: "5",
    icon: "/asset/perfect-texture.svg",
    title: "Perfect Texture",
    desc: "Expert hands ensure the right texture.",
  },
  {
    no: "6",
    icon: "/asset/fresh.svg",
    title: "Freshly Served",
    desc: "Made fresh and served with love.",
  },
];

export default function MakingSection() {
  return (
    <section className={styles.makingSection}>
      <div className={styles.wrapper}>
        <div className={styles.sectionHeader}>
          <p className={styles.tag}>
            <img
              src="/asset/heading-icon.svg"
              alt=""
              aria-hidden="true"
              className={styles.tagIcon}
            />
            <span>Our Process</span>
          </p>
          <h2 className={styles.title}>The Art Of Making Halwa</h2>
          <p className={styles.subtitle}>
            Every step is done with patience, care, and the same traditional
            methods passed down through generations.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
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
