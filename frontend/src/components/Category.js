import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className='btn-container'>
      <Link to='/forming' className='filter-btn'>
        Forming
      </Link>
      <Link to='/nonforming' className='filter-btn'>
        Non Forming
      </Link>
    </div>
  );
};

export default Category;
