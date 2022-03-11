import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import Culture from './components/Cultures';
import Forming from './components/Forming';
import Nonforming from './components/Nonforming';
import Pagination from './components/Pagination';
import ReactPaginate from 'react-paginate';

const App = () => {
  const [cultures, setCulture] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrenPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);

  const getCultures = async () => {
    const url = `http://localhost:9000/api/cultures?offset=${0}`;
    setLoading(true);
    const response = await fetch(url);
    const cultures = await response.json();

    console.log('objects', response);
    setCulture(cultures);
    console.log(cultures);
    setLoading(false);
  };
  useEffect(() => {
    getCultures();
  }, []);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://localhost:9000/api/cultures?offset=${currentPage}`
    );

    const data = await res.json();
    return data;
  };
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFistPost = indexOfLastPost - postsPerPage;
  // const currentPosts = cultures.slice(indexOfFistPost, indexOfLastPost);

  // //change page

  // const paginate = (pageNumber) => setCurrenPage(pageNumber);
  const handlePageClick = async (data) => {
    console.log('selected', data.selected);
    let currentPage = data.selected + 1;
    const commserver = await fetchComments(currentPage * 10);
    console.log('return', commserver);
    setCulture(commserver);
  };

  return (
    <>
      <h1 className='header'>Culture App</h1>
      <h3 className='header'>Uclassified page</h3>
      <Category />
      <Culture cultures={cultures} loading={loading} />
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={49}
        marginPagesDisplayed={'4'}
        pageRangeDisplayed={20}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </>
  );
};

export default App;
