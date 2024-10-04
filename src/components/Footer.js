const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-left">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from metta muse.</p>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Enter Email"
                style={{
                  height: "32px",
                  borderRadius: "5px",
                  border: "none",
                  width: "250px",
                  padding: "5px",
                }}
              />
              <button className="subbtn">SUBSCRIBE</button>
            </div>
          </div>
          <div className="footer-top-right">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h3>CURRENCY</h3>
            <b>USD</b>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        <div className="footer-down">
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <h3>metta muse</h3>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <h3>QUICK LINKS</h3>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <h3>FOLLOW US</h3>
            <h3>metta muse ACCEPTS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
