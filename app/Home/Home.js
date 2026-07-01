import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.headerWrap}>
        <div className={styles.logoRow}>
        
          <img src="/Shop-logo.svg" alt="Shop Logo" className={styles.shopLogo} />
        </div>

        <div className={styles.navBar}>
          <a href="#" className={styles.navLinkActive}>HOME</a>
          <a href="#" className={styles.navLink}>OUR LEGACY</a>
          <a href="#" className={styles.navLink}>PRODUCTS</a>
          <a href="#" className={styles.navLink}>MAKING</a>
          <a href="#" className={styles.navLink}>GALLERY</a>
          <a href="#" className={styles.navLink}>MEDIA</a>
          <a href="#" className={styles.navLink}>CONTACT</a>
          <a href="#" className={styles.orderBtn}>ORDER ONLINE</a>
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
      <a href="#" className={styles.primaryBtn}>ORDER NOW</a>
      <a href="#" className={styles.secondaryBtn}>VISIT OUR SHOP</a>
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