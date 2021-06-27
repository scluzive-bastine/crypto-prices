import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Coins } from './Coins'

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const BASE_URL =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => {
        setLoading(false)
        setCoins(res.data)
      })
      .catch((e) => {
        setLoading(false)
        setError(true)
      })
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='container mx-auto px-4'>
      <div className='img'></div>
      <h1 className='text-3xl text-center font-extrabold mt-10 uppercase'>
        Today's Cryptocurrency Prices
      </h1>
      <h2 className='text-2xl text-center font-bold mt-3'>Top 100</h2>
      <form action='' className='flex justify-center mt-10'>
        <input
          type='text'
          name=''
          id=''
          className='flex justify-center p-3 placeholder-gray-800 rounded-lg w-1/5 text-gray-900'
          placeholder='Search...'
          onChange={handleSearch}
        />
      </form>
      <div className='mt-5'>
        {loading && <h1 className='text-center text-lg'>Loading...</h1>}
        {error && (
          <h1 className='text-center text-lg'>
            An error occured, Try refreshing!!
          </h1>
        )}

        <Coins coins={coins} search={search}></Coins>
      </div>
    </div>
  )
}

export default App
