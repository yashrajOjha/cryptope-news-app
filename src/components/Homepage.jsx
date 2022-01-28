import React from 'react';
import millify from 'millify';
import { Typography,Row,Col,Statistic } from 'antd';
import { Link } from 'react-router-dom';

//fetching real crypto currency data from rapid api
import { useGetCryptosQuery } from '../services/cryptoApi';

const {Title} = Typography; //destructuring the title from typography
const Homepage = () => {
  const { data, isFetching }= useGetCryptosQuery();
  console.log(data);
  return (
    <>
    <Title level={2} className='heading'>
      Global Crypto Stats
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value="5"/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value="5"/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value="5"/>
        </Col>
        <Col span={12}>
          <Statistic title="Total 24 Hour Volume" value="5"/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="5"/>
        </Col>
      </Row>
    </Title>
    </>
  );
};

export default Homepage;
