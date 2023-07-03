import React from 'react';

const MainHeaderComponent = () => {
  const renderSpans = () => {
    const letters = ['S', 'E', 'T', 'H', ' ', 'B', 'E', 'H', 'A', 'R'];
    return letters.map((letter, index) => (
      <span key={index} style={{'--i': index + 1}}>
        {letter}
      </span>
    ));
  };

  return <div className="main-header">{renderSpans()}</div>;
};

export default MainHeaderComponent;
