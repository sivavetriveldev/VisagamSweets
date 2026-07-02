import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.headerWrap}>
        <div className={styles.logoRow}>
        
          <img src="/irutukadai-logo.png" alt="Shop Logo" className={styles.shopLogo} />
        </div>

        <div className={styles.navBar}>
          <a href="#" className={styles.navLink}>HOME</a>
          <a href="#" className={styles.navLink}>OUR LEGACY</a>
          <a href="#" className={styles.navLink}>PRODUCTS</a>
          <a href="#" className={styles.navLink}>MAKING</a>
          <a href="#" className={styles.navLink}>GALLERY</a>
          <a href="#" className={styles.navLink}>MEDIA</a>
          <a href="#" className={styles.navLink}>CONTACT</a>
          <a href="#" className={styles.orderBtn}>
            <img src="/asset/cart.svg" alt="" aria-hidden="true" className={styles.orderIcon} />
            <span>ORDER ONLINE</span>
          </a>
        </div>
      </div>

     
      
      <section className={styles.heroSection}>
  <div className={styles.heroLeft}>
    <p className={styles.heroSmall}>THE ORIGINAL TASTE OF</p>
    <h1 className={styles.heroTitle}>TIRUNELVELI</h1>
    <p className={styles.heroDesc}>
      Crafted with tradition, pure ingredients and cherished for generations.
    </p>

    <div className={styles.heroButtons}>
      <a href="#" className={styles.primaryBtn}>
        <img src="/asset/cart.svg" alt="" aria-hidden="true" className={styles.orderIcon} />
        <span>ORDER NOW</span>
      </a>
      <a href="#" className={styles.secondaryBtn}>
        <img src="/asset/location.svg" alt="" aria-hidden="true" className={styles.orderIcon} />
        <span>VISIT OUR SHOP</span>
      </a>
    </div>
   
  </div>
    <img src="/nature.png" alt="Nature Art" className={styles.natureArt} />
{/* 
        <div className={styles.heroRight}>
          <div className={styles.splashBg}></div>
          <img src="/nature.png" alt="Halwa" className={styles.halwaPhoto} />
        </div> */}
      </section>

      <div className={styles.bottomArt}></div>
    </div>
  );
}
