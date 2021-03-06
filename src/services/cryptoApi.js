import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// var axios = require("axios").default;

const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '' //get your API key at Rapid API
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'; 

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

//fetching data
export const cryptoApi = createApi({
    //reducer path what is this crypto for
    reducerPath: 'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos:builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`), //show only 10 crypto currency on the home page
        }),
        getCryptoDetails:builder.query({
            query:(coinId) => createRequest(`/coin/${coinId}`),   
        }),
        getCryptoHistory :builder.query({
            query:({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
        }),
        getExchanges: builder.query({
            query:()=> createRequest('/exchanges'),
        })
    })
});

//redux toolkit creates a custom hook to access the data fetched
export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery
} = cryptoApi;