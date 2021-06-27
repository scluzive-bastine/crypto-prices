import React from 'react'
import Coin from './Coin'

export const Coins = ({ coins, search }) => {
  const filteredCoins = coins.filter((coins) =>
    coins.name.toLowerCase().includes(search.toLocaleLowerCase())
  )
  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-black'>
              <thead style={{ backgroundColor: '#09203e' }}>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
                  >
                    #
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
                  >
                    Price
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
                  >
                    24%
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
                  >
                    Market cap
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
                  >
                    Circulating supply
                  </th>
                </tr>
              </thead>
              <tbody
                className='divide-y divide-black'
                style={{ backgroundColor: '#061529' }}
              >
                {filteredCoins.map((coin) => {
                  return <Coin coin={coin} key={coin.id}></Coin>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Coins
