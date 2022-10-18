import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h2>POPULAR SUBURBS</h2>
        <ul>
          <li>Castle Hill</li>
          <li>KellyVille</li>
          <li>CheeryBrook</li>
          <li>Baulkam Hills</li>
          <li>Pennant Hills</li>
        </ul>
      </div>

      <div>
        <h2>PAGES</h2>
        <ul>
          <li>About Us</li>
          <li>Shop Registration</li>
          <li>Shop & Drive for Us</li>
          <li>Terms & Condition</li>
        </ul>
      </div>

      <div>
        <h2>KEEP IN TOUCH</h2>
        <ul>
          <li>Contact Us</li>
          <li>Help Center</li>
        </ul>
      </div>

    </div>
  </footer>
);

export default Footer