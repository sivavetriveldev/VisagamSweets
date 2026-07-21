"use client";

import { useState } from "react";
import styles from "./ProductsSection.module.css";

const imagePool = [
  "/asset/Product-image/halwa-bites.webp",
  "/asset/Product-image/halwa-100g.webp",
  "/asset/Product-image/halwa-400g.webp",
];

const ITEMS_PER_PAGE = 3;

const productCategories = [
  {
    key: "sweets",
    title: "Sweets",
    subtitle: " ",
    products: [
      {
        id: "sweets-1",
        title: "Halwa Bites",
        desc: "Our classic. Soft, rich and made with pure ghee.",
        image: imagePool[0],
        oldPrice: 300.0,
        price: 200.0,
      },
      {
        id: "sweets-2",
        title: "Iruttukadai Halwa - 100 Gm",
        desc: "More ghee. More richness. Pure indulgence.",
        image: imagePool[1],
        oldPrice: 350.0,
        price: 275.0,
      },
      {
        id: "sweets-3",
        title: "Iruttukadai Halwa - 400 Gm",
        desc: "Special packs for your festive celebrations.",
        image: imagePool[2],
        oldPrice: 750.0,
        price: 700.0,
      },
      {
        id: "sweets-4",
        title: "Ghee Mysore Pak",
        desc: "Buttery, crumbly, and packed with festive sweetness.",
        image: imagePool[0],
        oldPrice: 320.0,
        price: 260.0,
      },
      {
        id: "sweets-5",
        title: "Coconut Halwa",
        desc: "A fragrant bite of coconut and cardamom bliss.",
        image: imagePool[1],
        oldPrice: 280.0,
        price: 240.0,
      },
      {
        id: "sweets-6",
        title: "Kesari Kalakand",
        desc: "Soft texture with a warm, rich golden finish.",
        image: imagePool[2],
        oldPrice: 400.0,
        price: 360.0,
      },
    ],
  },
  {
    key: "savories",
    title: "Savories",
    subtitle: " ",
    products: [
      {
        id: "savories-1",
        title: "Murukku",
        desc: "Crisp, spicy, and made for everyday munching.",
        image: imagePool[0],
        oldPrice: 220.0,
        price: 180.0,
      },
      {
        id: "savories-2",
        title: "Kara Boondhi",
        desc: "Crunchy, light, and packed with bold flavor.",
        image: imagePool[1],
        oldPrice: 240.0,
        price: 195.0,
      },
      {
        id: "savories-3",
        title: "Ribbon Pakoda",
        desc: "Golden strips with spice and crisp texture.",
        image: imagePool[2],
        oldPrice: 260.0,
        price: 210.0,
      },
      {
        id: "savories-4",
        title: "Nippat",
        desc: "A delicate bite with balanced seasoning and crunch.",
        image: imagePool[0],
        oldPrice: 230.0,
        price: 190.0,
      },
      {
        id: "savories-5",
        title: "Cheese Crunch",
        desc: "A savory snack with a hint of cheese and spice.",
        image: imagePool[1],
        oldPrice: 280.0,
        price: 235.0,
      },
      {
        id: "savories-6",
        title: "Masala Mixture",
        desc: "A mix of crunchy bites with peppery spice.",
        image: imagePool[2],
        oldPrice: 250.0,
        price: 205.0,
      },
    ],
  },
];

const createStateMap = (defaultValue) =>
  productCategories.flatMap((group) => group.products).reduce((acc, product) => {
    acc[product.id] = defaultValue;
    return acc;
  }, {});

export default function ProductsSection() {
  const [quantities, setQuantities] = useState(() => createStateMap(1));
  const [wishlist, setWishlist] = useState(() => createStateMap(false));
  const [carouselIndex, setCarouselIndex] = useState({ sweets: 0, savories: 0 });

  const updateQuantity = (productId, delta) => {
    setQuantities((current) => ({
      ...current,
      [productId]: Math.max(1, (current[productId] || 1) + delta),
    }));
  };

  const toggleWishlist = (productId) => {
    setWishlist((current) => ({
      ...current,
      [productId]: !current[productId],
    }));
  };

  const changeSlide = (categoryKey, direction) => {
    setCarouselIndex((current) => {
      const group = productCategories.find((item) => item.key === categoryKey);
      const totalPages = Math.max(1, Math.ceil((group?.products?.length || 0) / ITEMS_PER_PAGE));
      const nextPage = (current[categoryKey] || 0) + direction;
      const safePage = Math.max(0, Math.min(nextPage, totalPages - 1));

      return {
        ...current,
        [categoryKey]: safePage,
      };
    });
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
            <span className={styles.tagText}>Products</span>
          </p>

          <h3 className={styles.collectionTitle}>Signature Collection</h3>
          <p className={styles.collectionSubtitle}>
            Handpicked favorites prepared with our authentic taste and tradition.
          </p>

          {productCategories.map((group) => {
            const activeIndex = carouselIndex[group.key] || 0;
            const totalPages = Math.max(1, Math.ceil(group.products.length / ITEMS_PER_PAGE));
            const productPages = Array.from({ length: totalPages }, (_, pageIndex) =>
              group.products.slice(
                pageIndex * ITEMS_PER_PAGE,
                pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
              )
            );

            return (
              <div key={group.key} className={styles.categorySection}>
                <div className={styles.categoryHeader}>
                  <div>
                    <p className={styles.categoryLabel}> </p>
                    <h4 className={styles.categoryTitle}>{group.title}</h4>
                    <p className={styles.categorySubtitle}>{group.subtitle}</p>
                  </div>
                </div>

                <div className={styles.productGrid}>
                  <button
                    type="button"
                    className={`${styles.carouselBtn} ${styles.carouselBtnLeft}`}
                    onClick={() => changeSlide(group.key, -1)}
                    aria-label={`Previous ${group.title} products`}
                    disabled={activeIndex === 0}
                  >
                    {"<"}
                  </button>

                  <div
                    className={styles.productTrack}
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    {productPages.map((page, pageIndex) => (
                      <div className={styles.productPage} key={`${group.key}-page-${pageIndex}`}>
                        {page.map((item, index) => (
                          <div
                            key={item.id}
                            className={styles.productAosWrap}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-out"
                            data-aos-duration={`${700 + index * 120}`}
                            data-aos-delay={`${index * 90}`}
                          >
                            <div className={styles.productItem}>
                              <div className={styles.imageWrap}>
                                <img src={item.image} alt={item.title} className={styles.productImage} />
                              </div>

                              <button
                                type="button"
                                className={`${styles.heartBtn} ${wishlist[item.id] ? styles.heartBtnActive : ""}`}
                                onClick={() => toggleWishlist(item.id)}
                                aria-pressed={wishlist[item.id]}
                                aria-label={
                                  wishlist[item.id]
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
                                      onClick={() => updateQuantity(item.id, -1)}
                                      aria-label={`Decrease quantity for ${item.title}`}
                                    >
                                      <img
                                        src="/asset/minus.svg"
                                        alt=""
                                        aria-hidden="true"
                                        className={styles.qtyIcon}
                                      />
                                    </button>
                                    <span className={styles.qtyValue}>{quantities[item.id] || 1}</span>
                                    <button
                                      type="button"
                                      className={styles.qtyBtn}
                                      onClick={() => updateQuantity(item.id, 1)}
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
                    ))}
                  </div>

                  <button
                    type="button"
                    className={`${styles.carouselBtn} ${styles.carouselBtnRight}`}
                    onClick={() => changeSlide(group.key, 1)}
                    aria-label={`Next ${group.title} products`}
                    disabled={activeIndex >= totalPages - 1}
                  >
                    {">"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
