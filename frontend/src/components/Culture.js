import React, { Fragment, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

export const Row = ({ cultures, loading, handleNonforming, handleForming }) => {
  if (loading) {
    return <h1 className='header'>Loading....</h1>;
  }
  return (
    <>
      <ul className='culture'>
        {cultures.map((culture) => {
          const { id, url } = culture;
          return (
            <li key={id}>
              <p>{id}</p>
              <img src={url} alt={url} />
              <div className='form'>
                <button className='btn' onClick={() => handleForming(id)}>
                  Forming
                </button>

                <button className='btn' onClick={() => handleNonforming(id)}>
                  Not forming
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default function App() {
  return (
    <Fragment>
      <InfiniteLoader itemCount={1000}>
        {({ onItemsRendered, ref }) => (
          <List
            className='culture'
            height={150}
            itemCount={2100}
            itemSize={30}
            onItemsRendered={onItemsRendered}
            ref={ref}
            width={300}
          >
            {Row}
          </List>
        )}
      </InfiniteLoader>
    </Fragment>
  );
}
