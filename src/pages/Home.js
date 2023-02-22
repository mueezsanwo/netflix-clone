import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Request';

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowId='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
        <Row rowId='2' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowId='3' title='TopRated' fetchURL={requests.requestTopRated} />
        <Row rowId='4' title='Latest' fetchURL={requests.requestLatest} />
        <Row rowId='5' title='Trending' fetchURL={requests.requestTrending} />
    </div>
  )
}

export default Home