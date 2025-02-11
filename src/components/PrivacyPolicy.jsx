const PrivacyPolicy = ({ theme }) => {
  return (
    <section className={` bg-${theme ? "dark text-white" : "light text-black"}  privacy-policy py-0 `}>
      <div className="banner_bottom_shave " style={{transform:"rotate(180deg)"}}>
        <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" class="fill-white"></path>
        </svg>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col">
          

            <h2>1. Introduction</h2>
            <p>
              Your privacy is important to us. This Privacy Policy explains how we
              collect, use, and protect your personal information.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of data:</p>
            <ul>
              <li>Personal details (name, email, etc.)</li>
              <li>Usage data (pages visited, interactions, etc.)</li>
              <li>Cookies and tracking data</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Improve user experience</li>
              <li>Personalize content</li>
              <li>Analyze website performance</li>
            </ul>

            <h2>4. Data Protection</h2>
            <p>
              We take reasonable security measures to protect your data but cannot
              guarantee absolute security.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to request data deletion, access your information,
              and opt out of tracking.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions, feel free to contact us at{" "}
              <a href="mailto:support@payansh.com">support@example.com</a>.
            </p>
          </div>
        </div>
      </div>
      <div className="banner_bottom_shave " >
        <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" class="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
