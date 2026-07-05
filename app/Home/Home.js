import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.headerWrap}>
        <div className={styles.logoRow}>
        
          <img src="/irutukadai-logo.png" alt="Shop Logo" className={styles.shopLogo} />
        </div>

        <div className={styles.navBar}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About Us</a>
          <a href="#halwa" className={styles.navLink}>Halwa</a>
          <a href="#news" className={styles.navLink}>News & Events</a>
          <a href="#contact" className={styles.navLink}>Contact Us</a>
          {/* <a href="#" className={styles.navLink}>Media</a>
          <a href="#" className={styles.navLink}>Contact</a> */}
          <a href="#" className={styles.orderBtn}>
            <img src="/asset/cart.svg" alt="" aria-hidden="true" className={styles.orderIcon} />
            <span>Order Online</span>
          </a>
        </div>
      </div>

     
      
      <section id="home" className={styles.heroSection}>
  <div className={styles.heroLeft}>
    <p className={styles.heroSmall}>The Original Taste Of</p>
    <h1 className={styles.heroTitle}>Tirunelveli</h1>
    <p className={styles.heroDesc}>
      Crafted with tradition, pure ingredients and cherished for generations.
    </p>

    <div className={styles.heroButtons}>
      <a href="#" className={styles.primaryBtn}>
        <img src="/asset/cart.svg" alt="" aria-hidden="true" className={styles.orderIcon} />
        <span>Order Now</span>
      </a>
      <a href="#" className={styles.secondaryBtn}>
        <img src="/asset/location.svg" alt="" aria-hidden="true" className={styles.orderIcon} />
        <span>Visit Our Shop</span>
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
