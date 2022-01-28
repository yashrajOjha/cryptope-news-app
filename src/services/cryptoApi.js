import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '43b83a68f8mshf1d4a39f272e8efp11730bjsnd066521aabb3'
}
const baseURL = 'https://coinranking1.p.rapidapi.com/coins'; 

const createrequest = (url) =>({url,headers:cryptoApiHeaders})

//fetching data
export const cryptoApi = createApi({
    //reducer path what is this crypto for
    reducerPath: 'cryptoApi',
    baseQuery:fetchBaseQuery({baseURL}),
    endpoints: (builder) =>({
        getCryptos:builder.query({
            query:()=> createrequest('/coins')
        })
    })
})
//redux toolkit creates a custom hook to access the data fetched
export const {
    useGetCryptosQuery,
} = cryptoApi;