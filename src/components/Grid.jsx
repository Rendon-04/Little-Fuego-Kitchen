import "../styles/Grid.css";

export default function Grid({ onMenuClick, onOrderClick, onAboutClick }) {
  return (
    <div className="grid">
      <div className="image-wrapper" onClick={onMenuClick}>
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/c4df32820d4600c948a20b0563b86b6858bd2442?width=824" className="grid-image" alt="grid-img-one" />
        <div className="grid-card">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/a566cf2d89c7b07983dc27e654b63bf341aa75a9?width=48" className="rounded-edge-left" alt="Rounded Edge" />
          <svg className="rounded-edge-top" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 24V0C24 13.2548 13.2548 24 0 24H24Z" fill="#0A0B0A"/>
          </svg>
          <div className="button-icon">
            <div className="button-text">Menu</div>
            <div className="icon-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7625 8.26264L9.2625 12.7626C9.22803 12.7971 9.1871 12.8245 9.14206 12.8431C9.09702 12.8618 9.04875 12.8714 9 12.8714C8.95125 12.8714 8.90298 12.8618 8.85794 12.8431C8.8129 12.8245 8.77197 12.7971 8.7375 12.7626C8.70303 12.7282 8.67568 12.6872 8.65703 12.6422C8.63837 12.5972 8.62877 12.5489 8.62877 12.5001C8.62877 12.4514 8.63837 12.4031 8.65703 12.3581C8.67568 12.313 8.70303 12.2721 8.7375 12.2376L12.5938 8.37514H2.5C2.40054 8.37514 2.30516 8.33563 2.23483 8.2653C2.16451 8.19498 2.125 8.09959 2.125 8.00014C2.125 7.90068 2.16451 7.8053 2.23483 7.73497C2.30516 7.66465 2.40054 7.62514 2.5 7.62514H12.5938L8.7375 3.76264C8.66788 3.69302 8.62877 3.59859 8.62877 3.50014C8.62877 3.40168 8.66788 3.30726 8.7375 3.23764C8.80712 3.16802 8.90154 3.12891 9 3.12891C9.09846 3.12891 9.19288 3.16802 9.2625 3.23764L13.7625 7.73764C13.798 7.77149 13.8264 7.81222 13.8457 7.85734C13.865 7.90246 13.875 7.95105 13.875 8.00014C13.875 8.04923 13.865 8.09781 13.8457 8.14293C13.8264 8.18806 13.798 8.22878 13.7625 8.26264Z" fill="#EFE7D2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="image-wrapper" onClick={onOrderClick}>
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/973681c2d1c09cce0fda5d5a3aa374f932531c28?width=840" className="grid-image" alt="grid-img-two" />
        <div className="grid-card">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/a566cf2d89c7b07983dc27e654b63bf341aa75a9?width=48" className="rounded-edge-left" alt="Rounded Edge" />
          <svg className="rounded-edge-top" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 24V0C24 13.2548 13.2548 24 0 24H24Z" fill="#0A0B0A"/>
          </svg>
          <div className="button-icon">
            <div className="button-text">order</div>
            <div className="icon-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7625 8.26264L9.2625 12.7626C9.22803 12.7971 9.1871 12.8245 9.14206 12.8431C9.09702 12.8618 9.04875 12.8714 9 12.8714C8.95125 12.8714 8.90298 12.8618 8.85794 12.8431C8.8129 12.8245 8.77197 12.7971 8.7375 12.7626C8.70303 12.7282 8.67568 12.6872 8.65703 12.6422C8.63837 12.5972 8.62877 12.5489 8.62877 12.5001C8.62877 12.4514 8.63837 12.4031 8.65703 12.3581C8.67568 12.313 8.70303 12.2721 8.7375 12.2376L12.5938 8.37514H2.5C2.40054 8.37514 2.30516 8.33563 2.23483 8.2653C2.16451 8.19498 2.125 8.09959 2.125 8.00014C2.125 7.90068 2.16451 7.8053 2.23483 7.73497C2.30516 7.66465 2.40054 7.62514 2.5 7.62514H12.5938L8.7375 3.76264C8.66788 3.69302 8.62877 3.59859 8.62877 3.50014C8.62877 3.40168 8.66788 3.30726 8.7375 3.23764C8.80712 3.16802 8.90154 3.12891 9 3.12891C9.09846 3.12891 9.19288 3.16802 9.2625 3.23764L13.7625 7.73764C13.798 7.77149 13.8264 7.81222 13.8457 7.85734C13.865 7.90246 13.875 7.95105 13.875 8.00014C13.875 8.04923 13.865 8.09781 13.8457 8.14293C13.8264 8.18806 13.798 8.22878 13.7625 8.26264Z" fill="#EFE7D2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="image-wrapper" onClick={onAboutClick}>
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/2fcc4fe4c3480d809abc70d90dd4c10f285cb8ef?width=812" className="grid-image" alt="grid-img-three" />
        <div className="grid-card">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/a566cf2d89c7b07983dc27e654b63bf341aa75a9?width=48" className="rounded-edge-left" alt="Rounded Edge" />
          <svg className="rounded-edge-top" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 24V0C24 13.2548 13.2548 24 0 24H24Z" fill="#0A0B0A"/>
          </svg>
          <div className="button-icon">
            <div className="button-text">ABOUT</div>
            <div className="icon-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7625 8.26264L9.2625 12.7626C9.22803 12.7971 9.1871 12.8245 9.14206 12.8431C9.09702 12.8618 9.04875 12.8714 9 12.8714C8.95125 12.8714 8.90298 12.8618 8.85794 12.8431C8.8129 12.8245 8.77197 12.7971 8.7375 12.7626C8.70303 12.7282 8.67568 12.6872 8.65703 12.6422C8.63837 12.5972 8.62877 12.5489 8.62877 12.5001C8.62877 12.4514 8.63837 12.4031 8.65703 12.3581C8.67568 12.313 8.70303 12.2721 8.7375 12.2376L12.5938 8.37514H2.5C2.40054 8.37514 2.30516 8.33563 2.23483 8.2653C2.16451 8.19498 2.125 8.09959 2.125 8.00014C2.125 7.90068 2.16451 7.8053 2.23483 7.73497C2.30516 7.66465 2.40054 7.62514 2.5 7.62514H12.5938L8.7375 3.76264C8.66788 3.69302 8.62877 3.59859 8.62877 3.50014C8.62877 3.40168 8.66788 3.30726 8.7375 3.23764C8.80712 3.16802 8.90154 3.12891 9 3.12891C9.09846 3.12891 9.19288 3.16802 9.2625 3.23764L13.7625 7.73764C13.798 7.77149 13.8264 7.81222 13.8457 7.85734C13.865 7.90246 13.875 7.95105 13.875 8.00014C13.875 8.04923 13.865 8.09781 13.8457 8.14293C13.8264 8.18806 13.798 8.22878 13.7625 8.26264Z" fill="#EFE7D2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
