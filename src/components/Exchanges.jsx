import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';
import Title from 'antd/lib/skeleton/Title';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;
 // Note: To access this endpoint you need premium plan
  if (isFetching) return <Loader />;

  return (
    <>
        <Typography.Title level={4}>
        Buy the premium plan of Coinranking API to access exchanges.
        </Typography.Title>
    </>
  );
};

export default Exchanges;