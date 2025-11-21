import "../styles/Contact.css";
import instagramIcon from "../assets/instagram.png"; 



export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-main-wrapper">
        <div className="contact-image-wrapper">
          <img 
            className="contact-hero-image" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/bb65c9632b9d5852b889384a2912b3a31eee1835?width=1858" 
            alt="Contact" 
          />
          <h1 className="contact-title">Contact</h1>
        </div>

        <div className="contact-content-wrapper">
          <div className="contact-content">
            <div className="contact-top-section">
              <div className="hours-card">
                <div className="card-header">
                  <div className="header-decoration">
                    <div className="diamond-icon"></div>
                    <div className="line-decoration"></div>
                  </div>
                  <h2 className="card-title">Hours</h2>
                  <div className="header-decoration">
                    <div className="line-decoration"></div>
                    <div className="diamond-icon"></div>
                  </div>
                </div>

                <div className="hours-list">
                  <div className="hours-row">
                    <span className="day-label">Monday</span>
                    <div className="dots-separator">
                      <div className="dashed-line"></div>
                    </div>
                    <span className="time-label">9:00am - 5:00pm</span>
                  </div>
                  <div className="hours-row">
                    <span className="day-label">Tuesday</span>
                    <div className="dots-separator">
                      <div className="dashed-line"></div>
                    </div>
                    <span className="time-label">9:00am - 5:00pm</span>
                  </div>
                  <div className="hours-row">
                    <span className="day-label">Wednesday</span>
                    <div className="dots-separator">
                      <div className="dashed-line"></div>
                    </div>
                    <span className="time-label">9:00am - 5:00pm</span>
                  </div>
                  <div className="hours-row">
                    <span className="day-label">Thursday</span>
                    <div className="dots-separator">
                      <div className="dashed-line"></div>
                    </div>
                    <span className="time-label">9:00am - 5:00pm</span>
                  </div>
                  <div className="hours-row">
                    <span className="day-label">Friday</span>
                    <div className="dots-separator">
                      <div className="dashed-line"></div>
                    </div>
                    <span className="time-label">9:00am - 5:00pm</span>
                  </div>
                  <div className="hours-row">
                    <span className="day-label">Saturday & Sunday</span>
                    <div className="dots-separator">
                      <div className="dashed-line"></div>
                    </div>
                    <span className="time-label">9:00am - 5:00pm</span>
                  </div>
                </div>
              </div>

              <div className="photos-grid">
                <div className="photos-row">
                  <div className="photo-wrapper">
                  <img
                    className="contact-photo photo-opacity-low"
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9767b6364dc21e63e301032a8314ec0752113621?width=440"
                    alt="stacked burritos"
                  />
                  <a
                    href="https://www.instagram.com/littlefuegokitchen/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-link"
                  >
                    <img
                    className="instagram-icon"
                    src={instagramIcon}
                    alt="Instagram"
                  />
                  </a>
                </div>
                  <img 
                    className="contact-photo photo-opacity-high" 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/70227b7106af4a117aab34b2f8ff44d867923b63?width=440" 
                    alt="Holding burrito" 
                  />
                </div>
                <div className="photos-row">
                  <img 
                    className="contact-photo" 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/2ea19755079d683f56b91ee27a5ad88385f739ba?width=440" 
                    alt="Food photo 1" 
                  />
                  <img 
                    className="contact-photo" 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/6ada599f5663efcaa0f30ab5395488f1010f6319?width=440" 
                    alt="Food photo 2" 
                  />
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="card-header">
                <div className="header-decoration">
                  <div className="diamond-icon"></div>
                  <div className="line-decoration"></div>
                </div>
                <h2 className="card-title">Get in touch</h2>
                <div className="header-decoration">
                  <div className="line-decoration"></div>
                  <div className="diamond-icon"></div>
                </div>
              </div>

              <div className="contact-details">
                <div className="contact-row">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+ 415-123-4567</span>
                </div>
                <div className="contact-row">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">order@littlefuegokitchen.com</span>
                </div>
                <div className="contact-row">
                  <span className="contact-label">Follow</span>
                  <div className="social-icons">
              
                    <a
                      href="https://www.instagram.com/littlefuegokitchen/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                    >
                      <svg className="social-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5.76562C8.3603 5.76562 7.73497 5.95532 7.20308 6.31072C6.67119 6.66611 6.25663 7.17125 6.01183 7.76226C5.76702 8.35326 5.70297 9.00359 5.82777 9.631C5.95257 10.2584 6.26062 10.8347 6.71295 11.287C7.16529 11.7394 7.7416 12.0474 8.369 12.1722C8.99641 12.297 9.64674 12.233 10.2377 11.9882C10.8287 11.7434 11.3339 11.3288 11.6893 10.7969C12.0447 10.265 12.2344 9.6397 12.2344 9C12.2344 8.14219 11.8936 7.31951 11.287 6.71295C10.6805 6.10639 9.85781 5.76562 9 5.76562ZM9 11.3906C8.52718 11.3906 8.06498 11.2504 7.67184 10.9877C7.2787 10.725 6.97229 10.3517 6.79135 9.91485C6.61041 9.47802 6.56307 8.99735 6.65531 8.53361C6.74755 8.06988 6.97524 7.64391 7.30957 7.30957C7.64391 6.97524 8.06988 6.74755 8.53361 6.65531C8.99735 6.56307 9.47802 6.61041 9.91485 6.79135C10.3517 6.97229 10.725 7.2787 10.9877 7.67184C11.2504 8.06498 11.3906 8.52718 11.3906 9C11.3888 9.63346 11.1363 10.2404 10.6884 10.6884C10.2404 11.1363 9.63346 11.3888 9 11.3906ZM12.0938 2.10938H5.90625C4.89926 2.10937 3.93351 2.5094 3.22145 3.22145C2.5094 3.93351 2.10938 4.89926 2.10938 5.90625V12.0938C2.10937 13.1007 2.5094 14.0665 3.22145 14.7785C3.93351 15.4906 4.89926 15.8906 5.90625 15.8906H12.0938C13.1007 15.8906 14.0665 15.4906 14.7785 14.7785C15.4906 14.0665 15.8906 13.1007 15.8906 12.0938V5.90625C15.8906 4.89926 15.4906 3.93351 14.7785 3.22145C14.0665 2.5094 13.1007 2.10938 12.0938 2.10938ZM15.0469 12.0938C15.0469 12.877 14.7357 13.6281 14.1819 14.1819C13.6281 14.7357 12.877 15.0469 12.0938 15.0469H5.90625C5.123 15.0469 4.37194 14.7357 3.81806 14.1819C3.26417 13.6281 2.95312 12.877 2.95312 12.0938V5.90625C2.95312 5.123 3.26417 4.37194 3.81806 3.81806C4.37194 3.26417 5.123 2.95312 5.90625 2.95312H12.0938C12.877 2.95312 13.6281 3.26417 14.1819 3.81806C14.7357 4.37194 15.0469 5.123 15.0469 5.90625V12.0938ZM13.3594 4.64062C13.3594 4.77927 13.3181 4.91476 13.2408 5.02986C13.1635 5.14495 13.0539 5.2345 12.9254 5.28719C12.7968 5.33987 12.6555 5.35337 12.5193 5.32596C12.3831 5.29854 12.2579 5.23145 12.1588 5.13234C12.0596 5.03323 11.9925 4.90806 11.9651 4.77186C11.9377 4.63566 11.9512 4.49438 12.0039 4.36582C12.0566 4.23726 12.1461 4.12769 12.2612 4.05036C12.3763 3.97304 12.5118 3.93177 12.6504 3.93177C12.8361 3.93193 13.0141 4.00567 13.1419 4.13349C13.2697 4.26131 13.3434 4.43932 13.3435 4.625L13.3594 4.64062Z" fill="#EFE7D2" fillOpacity="0.9"/>
                      </svg>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
