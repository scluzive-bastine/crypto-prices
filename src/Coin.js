import React from 'react'

const Coin = ({ coin }) => {
  return (
    <tr key={coin.id}>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-white'>{coin.market_cap_rank}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 h-10 w-10'>
            <img
              className='h-10 w-10 rounded-full'
              src={coin.image}
              alt={coin.name}
            />
          </div>
          <div className='text-white ml-2 font-weight-bold'>
            {coin.name}{' '}
            <span className='text-sm font-weight-bold'>
              {coin.symbol.toUpperCase()}
            </span>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-200'>
          ${coin.current_price.toLocaleString()}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-white'>{coin.title}</div>
        <div className='text-sm text-gray-200'>
          {coin.price_change_percentage_24h < 0 ? (
            <h6 className='text-red-500'>
              {coin.price_change_percentage_24h}%
            </h6>
          ) : (
            <h6 className='text-green-500'>
              {coin.price_change_percentage_24h}%
            </h6>
          )}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-200'>
          ${coin.market_cap.toLocaleString()}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-200'>
        ${coin.circulating_supply.toLocaleString()}
      </td>
    </tr>
  )
}

export default Coin
