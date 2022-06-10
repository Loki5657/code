import React from 'react';
import Button from './Button';
import NewsItem from './NewsList'
import Loading from './Loding'
let Saga = () => (
  <div>
     <Button />
     <Loading />
     <NewsItem />
     <input type='text'/>
  </div>
);
export default Saga;