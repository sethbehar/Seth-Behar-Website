import React from 'react';

const MainHeaderComponent = () => {
  const renderSpansFirst = (letters) => {
    return letters.map((letter, index) => (
      <span key={index} style={{ '--i': index + 1 }}>
        {letter}
      </span>
    ));
  };
  const renderSpansLast = (letters) => {
    return letters.map((letter, index) => (
      <span key={index} style={{ '--i': index + 4 }}>
        {letter}
      </span>
    ));

    
  };
  const headerContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center the headers horizontally
    alignItems: 'center',     // Center the headers vertically
    flexWrap: 'wrap',         // Allow items to wrap on small screens
  };

  const firstNameStyle = {
    display: 'flex',
    alignItems: 'center', // Center the letters vertically
  };

  const lastNameStyle = {
    display: 'flex',
    alignItems: 'center', // Center the letters vertically
  };

  // Define a CSS class to apply only on mobile screens
  const mobileHeaderClass = 'mobile-header';

  // Check the screen width and apply the class conditionally
  if (window.innerWidth <= 768) {
    headerContainerStyle['className'] = mobileHeaderClass;
  }

  return (
    <div style={headerContainerStyle}>
      <div style={firstNameStyle} className="fistName-header">
        {renderSpansFirst(['S', 'E', 'T', 'H'])}
      </div>
      <div style={lastNameStyle} className="lastName-header">
        {renderSpansLast(['B', 'E', 'H', 'A', 'R'])}
      </div>
    </div>
  );
};

export default MainHeaderComponent;
