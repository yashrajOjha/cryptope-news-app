import React from 'react';
import millify from 'millify';
import { Typography,Row,Col,Statistic } from 'antd';
import { Link } from 'react-router-dom';

//fetching real crypto currency data from rapid api
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const {Title} = Typography; //destructuring the title from typography
const Homepage = () => {

  const { data, isFetching }= useGetCryptosQuery(10);
  //storing data in variables
  const globalStats = data?.data?.stats;
  if (isFetching) return 'Loading...';

  // console.log(data); //was to just check if data is being fetched from the API
  
  return (
    <>
    <Title level={2} className='heading'>
      Global Crypto Stats
    </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={globalStats.totalExchanges}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total 24 Hour Volume" value={millify(globalStats.total24hVolume)}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={globalStats.totalMarkets}/>
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={5} className='show-more'>
          <Link to='/cryptocurrencies'>Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified showmore/>
      {/* simplified will only make us show a specified number of cards on the home page */}
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Latest Crypto News
        </Title>
        <Title level={5} className='show-more'>
          <Link to='/news'>Show More</Link>
        </Title>
      </div>
      <News simplified/>
    </>
  );
};

export default Homepage;
