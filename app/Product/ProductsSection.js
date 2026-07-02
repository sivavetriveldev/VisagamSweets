import styles from "./ProductsSection.module.css";

const products = [
  {
    title: "Tirunelveli Halwa",
    desc: "Our classic. Soft, rich and made with pure ghee.",
    image: "/nature.png",
  },
  {
    title: "Pure Ghee Halwa",
    desc: "More ghee. More richness. Pure indulgence.",
    image: "/nature.png",
  },
  {
    title: "Festival Packs",
    desc: "Special packs for your festive celebrations.",
    image: "/Shop-logo.svg",
  },
];

export default function ProductsSection() {
  return (
    <section className={styles.productsSection}>
      {/* <h2 className={styles.sectionTitle}>Products</h2> */}

      <div className={styles.productsCard}>
        <h3 className={styles.collectionTitle}>Signature Collection</h3>

        <div className={styles.productGrid}>
          {products.map((item, index) => (
            <div className={styles.productItem} key={index}>
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.title} className={styles.productImage} />
              </div>

              <h4 className={styles.productTitle}>{item.title}</h4>
              <p className={styles.productDesc}>{item.desc}</p>
              <a href="#" className={styles.readMoreBtn}>
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
