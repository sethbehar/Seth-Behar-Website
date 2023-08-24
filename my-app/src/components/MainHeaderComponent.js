import React from 'react';


const MainHeaderComponent = () => {
  const renderSpans = () => {
    const letters = ['S', 'E', 'T', 'H', ' ', 'B', 'E', 'H', 'A', 'R'];

    const firstName = ['S', 'E', 'T', 'H'].map((letter, index) => {
      return <span key={index} style={{'--i': index + 1}}>{letter}</span>
    })

    const lastName = ['B', 'E', 'H', 'A', 'R'].map((letter, index) => {
      return <span key={index} style={{'--i': index + 1}}>{letter}</span>
    })

    return {firstName, lastName}
    // return letters.map((letter, index) => (
    //   <span key={index} style={{'--i': index + 1}}>
    //     {letter}
    //   </span>
    // ));

    
  };

  const firstNameStyle = {
    display: 'flex',
  };

  const lastNameStyle = {
    display: 'flex',
  }

  return <>
      <div style={firstNameStyle} className="fistName-header">{renderSpans().firstName}</div>
      <div style={lastNameStyle} className="lastName-header">{renderSpans().lastName}</div>
    </>
  //return <div className="main-header">{renderSpans()}</div>;
};

export default MainHeaderComponent;
