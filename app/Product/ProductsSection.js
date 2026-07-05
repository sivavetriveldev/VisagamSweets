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
    <section id="halwa" className={styles.productsSection}>
      {/* <h2 className={styles.sectionTitle}>Products</h2> */}

      <div className={styles.productsCard}>
        <p className={styles.tag}>
          <img
            src="/asset/heading-icon.svg"
            alt=""
            aria-hidden="true"
            className={styles.tagIcon}
          />
          <span>Products</span>
        </p>

        <h3 className={styles.collectionTitle}>Signature Collection</h3>
        <p className={styles.collectionSubtitle}>
          Handpicked favorites prepared with our authentic taste and tradition.
        </p>

        <div className={styles.productGrid}>
          {products.map((item, index) => (
            <div className={styles.productItem} key={index}>
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.title} className={styles.productImage} />
              </div>

              <h4 className={styles.productTitle}>{item.title}</h4>
              <p className={styles.productDesc}>{item.desc}</p>
              <div className={styles.actionRow}>
                <a href="#" className={styles.addToCartBtn}>
                  Add to Cart
                </a>
                <a href="#" className={styles.viewBtn}>
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
