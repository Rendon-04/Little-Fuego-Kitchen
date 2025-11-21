import "../styles/Hero.css";
export default function Hero() {
  return (
    <div className="hero-container">
      <div className="social-card">
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/a566cf2d89c7b07983dc27e654b63bf341aa75a9?width=48" className="rounded-corner-left" alt="" />
        <svg className="rounded-corner-top" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 24V0C24 13.2548 13.2548 24 0 24H24Z" fill="#0A0B0A"/>
        </svg>
      </div>
      <div className="hero-main-wrapper">
        <div className="hero-images">
          <img className="hero-background-image" src="https://api.builder.io/api/v1/image/assets/TEMP/56590445f7922877d9847b476c5f06e2ad748833?width=2856" alt="" />
          <img className="hero-foreground-image" src="https://api.builder.io/api/v1/image/assets/TEMP/ed8d2ec80b6f4b1e7586302033698a01a1e188bd?width=1716" alt="" />
        </div>
      </div>
    </div>
  );
}
