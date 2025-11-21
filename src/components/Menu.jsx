import "../styles/Menu.css";

export default function Menu({ onClose }) {
  const menuItems = [
    {
      id: 1,
      name: "Burrito",
      description: "Burrito ingredients",
      price: "$15",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/77b8ccf76bf68ce635ee5cd4658d055215580807?width=163",
      isVegetarian: true
    },
    {
      id: 2,
      name: "Burrito",
      description: "Burrito ingredients",
      price: "$15",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/77b8ccf76bf68ce635ee5cd4658d055215580807?width=163",
      isVegetarian: false
    },
    {
      id: 3,
      name: "Burrito",
      description: "Burrito ingredients",
      price: "$15",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/77b8ccf76bf68ce635ee5cd4658d055215580807?width=163",
      isVegetarian: false
    },
    {
      id: 4,
      name: "Burrito",
      description: "Burrito ingredients",
      price: "$15",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/77b8ccf76bf68ce635ee5cd4658d055215580807?width=163",
      isVegetarian: false
    }
  ];

  return (
    <div className="menu-page">
      <div className="menu-main-wrapper">
        <div className="menu-image-section">
          <img 
            className="menu-hero-image" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/15a57afe2e2df81c3581b437fbbede7b7c32d299?width=1856" 
            alt="Menu" 
          />
          <h1 className="menu-hero-title">Menu</h1>
        </div>

        <div className="menu-content-section">
          <div className="menu-content-inner">
            <div className="menu-header">
              <div className="menu-divider-left">
                <div className="menu-icon-diamond"></div>
                <div className="menu-divider-line"></div>
              </div>
              <h2 className="menu-title">Menu</h2>
              <div className="menu-divider-right">
                <div className="menu-divider-line"></div>
                <div className="menu-icon-diamond"></div>
              </div>
            </div>

            <div className="menu-items-list">
              {menuItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <div className="menu-item-image-wrapper">
                    <img 
                      className="menu-item-image" 
                      src={item.image} 
                      alt={item.name} 
                    />
                  </div>

                  <div className="menu-item-details">
                    <div className="menu-item-header">
                      <div className="menu-item-name-group">
                        <h3 className="menu-item-name">{item.name}</h3>
                        {item.isVegetarian && (
                          <svg className="menu-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8407 2.51193C13.8353 2.42019 13.7965 2.33361 13.7315 2.26863C13.6665 2.20365 13.5799 2.16479 13.4882 2.15943C8.77695 1.88193 5.00883 3.29443 3.4082 5.93756C2.3182 7.73693 2.3607 9.86256 3.52008 11.9501L2.23508 13.2351C2.19823 13.2694 2.16868 13.3108 2.14819 13.3568C2.12769 13.4028 2.11667 13.4524 2.11578 13.5028C2.11489 13.5531 2.12415 13.6032 2.14302 13.6499C2.16188 13.6966 2.18995 13.739 2.22556 13.7746C2.26117 13.8102 2.30358 13.8383 2.35028 13.8571C2.39697 13.876 2.44699 13.8852 2.49734 13.8844C2.54769 13.8835 2.59735 13.8724 2.64335 13.852C2.68935 13.8315 2.73075 13.8019 2.76508 13.7651L4.05008 12.4801C5.12945 13.0794 6.21883 13.3807 7.2682 13.3807C8.25466 13.3811 9.22193 13.1081 10.0626 12.5919C12.7057 10.9913 14.1176 7.22318 13.8407 2.51193ZM9.67445 11.9494C8.16945 12.8607 6.38445 12.8476 4.60383 11.9251L10.2657 6.26318C10.3319 6.1921 10.368 6.09807 10.3663 6.00092C10.3646 5.90377 10.3252 5.81108 10.2565 5.74237C10.1878 5.67367 10.0951 5.63431 9.99796 5.6326C9.90081 5.63088 9.80679 5.66694 9.7357 5.73318L4.07383 11.3963C3.15133 9.61568 3.13633 7.83381 4.04945 6.32568C5.46695 3.98631 8.83883 2.71318 13.112 2.89131C13.287 7.16131 12.0138 10.5338 9.67445 11.9507V11.9494Z" fill="#EFE7D2"/>
                          </svg>
                        )}
                      </div>
                      <div className="menu-item-dots">
                        <div className="menu-item-dots-line"></div>
                      </div>
                      <div className="menu-item-price">{item.price}</div>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
