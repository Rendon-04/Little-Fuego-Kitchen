import "../styles/About.css";
import contactImg from "../assets/contact-img.svg"; 

export default function About({ onClose }) {
  return (
    <div className="about-page">
      <div className="about-main-wrapper">
        <div className="about-image-container">
          <img
            className="about-hero-image"
            src="https://api.builder.io/api/v1/image/assets/TEMP/ab999fa3ac00adee60c5a098eee322a3e70dbae9?width=1864"
            alt="About"
          />
          <h1 className="about-title">About</h1>
        </div>

        <div className="about-content-grid">
          <div className="about-content-wrapper">
            <div className="about-top-grid">
              <div className="about-what-we-make-card">
                <h2 className="about-section-title">What we make</h2>
                <p className="about-description">
                At Little Fuego Kitchen, we focus on the simple magic of honest, time-honored cooking. Our dishes celebrate the bold, comforting flavors of Northern Mexican antojitos, slow, simmered guisados, freshly pressed tortillas, and ingredients treated with patience and respect. 
                </p>
              </div>
              <div className="about-image-card">
                <img
                  className="about-food-image"
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3bb9deed2e17c779b45a7ca967ca358933787db8?width=912"
                  alt="What we make"
                />
              </div>
            </div>

            <div className="about-reviews-grid">
              <div className="about-review-card">
                <div className="about-stars">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                </div>
                <div className="about-review-text-wrapper">
                  <h3 className="about-review-name">Ivan Rendon</h3>
                  <p className="about-review-text">"Favorite breakfast burritos!"</p>
                </div>
              </div>

              <div className="about-review-card">
                <div className="about-stars">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                </div>
                <div className="about-review-text-wrapper">
                  <h3 className="about-review-name">Teddy Kramer</h3>
                  <p className="about-review-text">"I've tried all of Saira's creations and they are all equally delicious."</p>
                </div>
              </div>

              <div className="about-review-card">
                <div className="about-stars">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5135L12.1197 14.0002L11.0263 9.3135L14.6663 6.16016L9.87301 5.7535L7.99967 1.3335L6.12634 5.7535L1.33301 6.16016L4.97301 9.3135L3.87967 14.0002L7.99967 11.5135Z" fill="#EFE7D2"/>
                  </svg>
                </div>
                <div className="about-review-text-wrapper">
                  <h3 className="about-review-name">Chloe Brooks</h3>
                  <p className="about-review-text">"If you're looking for authentic, LFK does it best! "</p>
                </div>
              </div>
            </div>

            <div className="about-bottom-grid">
              <div className="about-story-image-card">
                <img
                  className="about-story-image"
                  src={contactImg}
                  alt="Chiles and tomatoes"
                />
              </div>
              <div className="about-story-card">
                <div className="about-story-header">
                  <div className="about-story-divider">
                    <div className="about-diamond"></div>
                    <div className="about-line"></div>
                  </div>
                  <h2 className="about-story-title">Our Story</h2>
                  <div className="about-story-divider">
                    <div className="about-line"></div>
                    <div className="about-diamond"></div>
                  </div>
                </div>
                <p className="about-description">
                Little Fuego Kitchen began with a craving our chef-founder, Saira Fregoso, couldn’t shake. The bold, comforting flavors of Northern Mexico she grew up with were missing in San Francisco. What started as her personal search for those authentic flavors became a mission to share real, soulful Mexican cooking with the city and that’s how LFK came to be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
