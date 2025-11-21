import "../styles/Order.css";

export default function Order() {
  return (
    <div className="order-page">
      <div className="order-main-wrapper">
        <div className="order-image-section">
          <img 
            className="order-hero-image" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/cb8cd5a782f6ff99c08f1a82bc2c8173fd441ef0?width=1856" 
            alt="Order" 
          />
          <h1 className="order-hero-title">Order</h1>
        </div>

        <div className="order-form-section">
          <div className="order-form-content">
            <div className="order-form-inner">
              <div className="order-header">
                <div className="order-divider-left">
                  <div className="order-icon-diamond"></div>
                  <div className="order-divider-line"></div>
                </div>
                <h2 className="order-title">Order Inquiry</h2>
                <div className="order-divider-right">
                  <div className="order-divider-line"></div>
                  <div className="order-icon-diamond"></div>
                </div>
              </div>

              <p className="order-subtitle">Secure your burritos with Little Fuego Kitchen</p>
            
              {/* turned this into a real form that submits to Google Forms */}
              <form
                className="order-form"
                action="https://docs.google.com/forms/d/e/1FAIpQLSdVpnjZNQ8MvbIMyKSxKQDKDyjAU69Fpq2nuV10WwdZDESYyQ/formResponse"
                method="POST"
                target="_blank"  // optional: keep your site open, open Google "response" in new tab
              >
                <div className="order-input">
                  <span>Name:</span>
                  <input
                    type="text"
                    name="entry.1654056729"
                    required
                    className="order-input-field"
                    placeholder="Full Name"
                  />
                </div>

                <div className="order-input">
                  <span>Phone Number:</span>
                  <input
                    type="tel"
                    name="entry.1908642240"
                    required
                    className="order-input-field"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="order-input">
                  <span>Email:</span>
                  <input
                    type="email"
                    name="entry.1597401303"
                    required
                    className="order-input-field"
                    placeholder="Email Address"
                  />
                </div>

                <div className="order-input">
                  <span>Event Type:</span>
                  <input
                    type="text"
                    name="entry.1996588891"
                    className="order-input-field"
                    placeholder="Type of Event"
                  />
                </div>

                <div className="order-input-row">
                  <div className="order-input">
                    <span>Guest Count:</span>
                    <input
                      type="number"
                      name="entry.3201346"
                      min="1"
                      className="order-input-field"
                    />
                  </div>

                  <div className="order-input">
                    <span>Date:</span>
                    <input
                      type="date"
                      name="entry.1611821085"
                      className="order-input-field"
                    />
                  </div>

                  <div className="order-input order-input-time">
                    <span>Time:</span>
                    <input
                      type="time"
                      name="entry.1651572394"
                      className="order-input-field"
                    />
                  </div>
                </div>

                <div className="order-input order-input-textarea">
                  <span>Additional Details:</span>
                  <textarea
                    name="entry.845783359"
                    rows={4}
                    className="order-input-field order-textarea"
                  />
                </div>

                <button className="order-submit-button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


