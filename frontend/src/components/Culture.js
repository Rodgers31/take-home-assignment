import React, { Fragment, PureComponent } from 'react';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

const LOADING = 1;
const LOADED = 2;
let itemStatusMap = {};

const isItemLoaded = (index) => !!itemStatusMap[index];
const loadMoreItems = (startIndex, stopIndex) => {
  for (let index = startIndex; index <= stopIndex; index++) {
    itemStatusMap[index] = LOADING;
  }
  return new Promise((resolve) =>
    setTimeout(() => {
      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMap[index] = LOADED;
      }
      resolve();
    }, 2500)
  );
};

export const Row = ({ cultures }) => {
  return (
    <>
      <ul className='culture'>
        {cultures.map((culture) => {
          const { id, url } = culture;
          return (
            <li key={id}>
              <img src={url} alt={url} />
              <div className='form'>
                <button className='btn'>Forming</button>
                <button className='btn'>Not forming</button>
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
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={1000}
        loadMoreItems={loadMoreItems}
      >
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
