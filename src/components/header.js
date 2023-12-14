import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>LINFENG WANG(Wanda)</h1>
      <p>--------------------------------------------------------------------------------------------------------</p>

      <div className="header-intro">
      <p>I am a passionate candidate from NUS postgraduate study specialized in System Analysis (ISS), and I am actively seeking an IT internship that aligns with my skill sets.
      </p><p>
The school internship commenced from <strong>March 2024 to July 2024</strong>, spanning a duration of 20 weeks.</p>
</div>
      <div className="header-container">
      
      {/* <img src="path-to-your-image.jpg" alt="ProfilePicture" /> */}

<div className="header-container-left">
      <p><strong>Tel: </strong> +65 80675509</p>
      <p><strong>GitHub: </strong>  https://github.com/wandadadada </p>
      </div>
      <div className="header-container-right">
      <p><strong>Email:</strong> <a href="wandawang1028@gmail.com">My Gmail</a></p>
      <p><strong>LinkedIn: </strong><a href="www.linkedin.com/in/wang-wanda">Link to my LinkedIn Profile</a></p>
      </div>
      </div>
    </header>
  );
};

export default Header;