import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '43b83a68f8mshf1d4a39f272e8efp11730bjsnd066521aabb3'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    //reducer path what is this crypto for
    reducerPath: 'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptoNews:builder.query({
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;