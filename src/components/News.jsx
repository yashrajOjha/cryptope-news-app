import React, { useState } from 'react';
import { Select,Typography,Row,Col,Avatar,Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
const {Text,Title} = Typography;
const {Option} = Select;

const demoImage ="https://images.mktw.net/im-429485?width=1280&size=1.33333333";
const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory,count:simplified?5:15})
  // console.log(cryptoNews)
  const {data} = useGetCryptosQuery(100);
  if(!cryptoNews?.value) return "Loading..";

  return (<>
  <Row gutter={[24,24]}>
    {!simplified &&(
      <Col span={24}>
        <Select 
        size="large"
        showSearch 
        className='select-news' 
        placeholder="Select a category" 
        optionFilterProp='children' 
        onChange={(value)=> setNewsCategory(value)}
        filterOption={(input,option)=> option.children.toLowerCase.indexOf(input.toLowerCase()>= 0)}
        >
          <Option value="Cryptocurrency">
            Cryptocurrency
          </Option>
          {data?.data?.coins.map((coin)=>
          <Option value={coin.name}>{coin.name}</Option>
          )}
        </Select> 
      </Col>
    )}
    {cryptoNews.value.map((newsarticle,i)=>(
      <Col xs={24} sm={12} lg={8} key={i}>
        <Card hoverable className='news-card'>
          <a href={newsarticle.url} target="_blank" rel="noreferrer">
            <div className='news-image-container'>
              <Title className='news-title' level={4}>
                {newsarticle.name}
              </Title>
              <img style={{maxWidth:'200px', maxHeight:'100px'}} src={newsarticle?.image?.thumbnail?.contentUrl || demoImage} alt='news'></img>
            </div>
            <p>
              {newsarticle.description > 100? `${newsarticle.description.substring(0,100)}...`: newsarticle.description}
            </p>
            <div className='provider-container'>
              <div>
                <Avatar src={newsarticle.provider[0]?.image?.thumbnail?.contentUrl || demoImage}/>
                <Text className='provider-name'>{newsarticle.provider[0]?.name}</Text>
              </div> 
              <Text>{moment(newsarticle.datePublished).startOf('ss').fromNow()}</Text>
            </div>
          </a>
        </Card>
      </Col>
    ))}
  </Row>
  </>);
};

export default News;
