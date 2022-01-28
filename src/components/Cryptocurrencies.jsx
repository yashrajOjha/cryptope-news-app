import React, {useState, useEffect} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card,Row,Col,Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { SearchOutlined } from '@ant-design/icons';
const Cryptocurrencies = ({ simplified,showmore }) => {
  const count = simplified ?10:50;
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // console.log(cryptos)
  useEffect(()=>{
    // setCryptos(cryptosList?.data?.coins);
    const filteredData = cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData) 
  },[cryptosList, searchTerm]);
  if(isFetching) return "Loading...";

  return(
    <>
    {!showmore && <div className='search-crypto'>
      <Input size="large" prefix={<SearchOutlined />} placeholder='Search Cryptocurrency' onChange={(e)=> setSearchTerm(e.target.value)}/>
    </div> }
     <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((eachcrypto) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={eachcrypto.uuid}
          >

            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={eachcrypto.uuid} to={`/crypto/${eachcrypto.uuid}`}>
              <Card
                title={`${eachcrypto.rank}. ${eachcrypto.name}`}
                extra={<img className="crypto-image" src={eachcrypto.iconUrl} />}
                hoverable
                // loading
              >
                <p>Price: {millify(eachcrypto.price)}</p>
                <p>Market Cap: {millify(eachcrypto.marketCap)}</p>
                <p>Daily Change: {eachcrypto.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
