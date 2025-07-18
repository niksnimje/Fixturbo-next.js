import React from 'react';
import PropTypes from 'prop-types';

function Title({ title, content }) {
  return (
    <>
      <div className="text-center mb-12 font-yantramanav-900 font-black">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-theam"></div>
          <span className="text-theam text-md uppercase font-extrabold">{title}</span>
          <div className="w-12 h-[2px] bg-theam"></div>
        </div>
        <h2
          className="text-2xl md:text-5xl lg:text-5xl text-gray-900 font-yantramanav-900" 
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}

  Title.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Title;