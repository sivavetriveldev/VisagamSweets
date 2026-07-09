"use client";

import { useState } from "react";
import styles from "./ProductsSection.module.css";

const products = [
  {
    title: "Halwa Bites",
    desc: "Our classic. Soft, rich and made with pure ghee.",
    image: "/asset/Product-image/halwa-bytes.webp",
    oldPrice: 300.00,
    price: 200.00,
  },
  {
    title: "Iruttukadai Halwa - 100 Gm",
    desc: "More ghee. More richness. Pure indulgence.",
    image: "/asset/Product-image/halwa-100g.webp",
    oldPrice: 350.00,
    price: 275.00,
  },
  {
    title: "Iruttukadai Halwa - 400 Gm",
    desc: "Special packs for your festive celebrations.",
    image: "/asset/Product-image/halwa-400g.webp",
    oldPrice: 750.00,
    price: 700.00,
  },
];

export default function ProductsSection() {
  const [quantities, setQuantities] = useState(() =>
    products.reduce((acc, _, index) => {
      acc[index] = 1;
      return acc;
    }, {})
  );
  const [wishlist, setWishlist] = useState(() =>
    products.reduce((acc, _, index) => {
      acc[index] = false;
      return acc;
    }, {})
  );

  const updateQuantity = (index, delta) => {
    setQuantities((current) => ({
      ...current,
      [index]: Math.max(1, (current[index] || 1) + delta),
    }));
  };

  const toggleWishlist = (index) => {
    setWishlist((current) => ({
      ...current,
      [index]: !current[index],
    }));
  };

  return (
    <section id="halwa" className={styles.productsSection}>
      <div className={styles.productsContainer}>
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
              <div
                key={index}
                className={index === 1 ? styles.productAosWrap : undefined}
                data-aos={index === 1 ? "flip-left" : "fade-up"}
                data-aos-easing={index === 1 ? "ease-out-cubic" : "ease-in-out"}
                data-aos-duration={index === 1 ? "2000" : `${700 + index * 150}`}
                data-aos-delay={index === 1 ? "0" : `${index * 120}`}
              >
                <div className={styles.productItem}>
                  <div className={styles.imageWrap}>
                    <img src={item.image} alt={item.title} className={styles.productImage} />
                  </div>

                  <button
                    type="button"
                    className={`${styles.heartBtn} ${wishlist[index] ? styles.heartBtnActive : ""}`}
                    onClick={() => toggleWishlist(index)}
                    aria-pressed={wishlist[index]}
                    aria-label={
                      wishlist[index]
                        ? `Remove ${item.title} from wishlist`
                        : `Add ${item.title} to wishlist`
                    }
                  >
                    <img
                      src="/asset/heart.svg"
                      alt=""
                      aria-hidden="true"
                      className={styles.heartIcon}
                    />
                  </button>

                  <h4 className={styles.productTitle}>{item.title}</h4>
                  <p className={styles.productDesc}>{item.desc}</p>

                  <div className={styles.metaRow}>
                    <div className={styles.priceBlock}>
                      <span className={styles.oldPrice}>
                        <img
                          src="/asset/rupees.svg"
                          alt=""
                          aria-hidden="true"
                          className={styles.oldPriceIcon}
                        />
                        <span>{item.oldPrice.toFixed(2)}</span>
                      </span>
                      <div className={styles.priceRow}>
                        <div className={styles.priceValue}>
                          <img
                            src="/asset/rupees.svg"
                            alt=""
                            aria-hidden="true"
                            className={styles.priceIcon}
                          />
                          <span>{item.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.qtyBlock}>
                      <span className={styles.metaLabel}>Qty</span>
                      <div className={styles.qtySelector} aria-label={`Quantity for ${item.title}`}>
                        <button
                          type="button"
                          className={styles.qtyBtn}
                          onClick={() => updateQuantity(index, -1)}
                          aria-label={`Decrease quantity for ${item.title}`}
                        >
                          <img
                            src="/asset/minus.svg"
                            alt=""
                            aria-hidden="true"
                            className={styles.qtyIcon}
                          />
                        </button>
                        <span className={styles.qtyValue}>{quantities[index] || 1}</span>
                        <button
                          type="button"
                          className={styles.qtyBtn}
                          onClick={() => updateQuantity(index, 1)}
                          aria-label={`Increase quantity for ${item.title}`}
                        >
                          <img
                            src="/asset/plus.svg"
                            alt=""
                            aria-hidden="true"
                            className={styles.qtyIcon}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={styles.actionRow}>
                    <button type="button" className={styles.addToCartBtn}>
                      Add to Cart
                    </button>
                    <a href="#" className={styles.viewBtn}>
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
