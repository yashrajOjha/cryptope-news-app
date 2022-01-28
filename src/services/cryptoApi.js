import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// var axios = require("axios").default;

const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '43b83a68f8mshf1d4a39f272e8efp11730bjsnd066521aabb3'
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
            query:()=> createRequest('/coins')
        })
    })
});
//redux toolkit creates a custom hook to access the data fetched
export const {
    useGetCryptosQuery,
} = cryptoApi;