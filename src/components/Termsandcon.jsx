import React from 'react'

const Termsandcon = ({ theme }) => {
    return (
        <>
            <section className={`bg-${theme ? "dark text-white" : "light text-black"}  privacy-policy py-0 `}>
                <div className="banner_bottom_shave " style={{ transform: "rotate(180deg)" }}>
                    <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" className="fill-white"></path>
                    </svg>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <h2>Terms and Conditions</h2>
                            <p><strong>Last Updated:</strong> [Insert Date]</p>

                            <h3>1. Use of the Website</h3>
                            <p>You must be at least 18 years old to use this website.</p>
                            <p>You agree to use our website only for lawful purposes.</p>
                            <p>We reserve the right to modify or discontinue any part of the website at any time without notice.</p>

                            <h3>2. User Accounts</h3>
                            <p>If you create an account, you are responsible for maintaining the confidentiality of your login credentials.</p>
                            <p>You agree to provide accurate and up-to-date information.</p>
                            <p>We have the right to terminate or suspend your account if we find any misuse.</p>

                            <h3>3. Intellectual Property</h3>
                            <p>All content on this website, including text, images, and graphics, is owned by us or licensed to us.</p>
                            <p>You may not copy, reproduce, or distribute our content without permission.</p>

                            <h3>4. Limitation of Liability</h3>
                            <p>We are not responsible for any direct, indirect, or incidental damages caused by using our website.</p>
                            <p>We do not guarantee that our website will always be available or free from errors.</p>

                            <h3>5. Privacy Policy</h3>
                            <p>Your use of our website is also governed by our <a href="#">Privacy Policy</a>.</p>

                            <h3>6. Changes to Terms</h3>
                            <p>We may update these Terms and Conditions at any time. The latest version will be posted on this page.</p>

                            <h3>7. Contact Us</h3>
                            <p>If you have any questions, you can contact us at <strong>[Your Email]</strong>.</p>

                        </div>
                    </div>
                </div>
                <div className="banner_bottom_shave " >
                    <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" className="fill-white"></path>
                    </svg>
                </div>
            </section>


        </>
    )
}

export default Termsandcon
