import React from 'react'

function StockDetailTable() {
  return (
    <div className='flex justify-center items-center '>
    <table className="w-[80%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 place-items-center rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className='bg-slate-300'>
                <th scope="col" className="px-6 py-3">
                  Warehouse
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  This Month Sell
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-100 white border-b dark:bg-gray-700 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Yangon
                </th>
                <td className="px-6 py-4">383 Pcs</td>
                <td className="px-6 py-4">288 Pcs</td>
              </tr>
              <tr className="bg-slate-100 border-b dark:bg-gray-700 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  NaypyiTaw
                </th>
                <td className="px-6 py-4">435 Pcs</td>
                <td className="px-6 py-4">288 Pcs</td>
              </tr>
              <tr className="bg-slate-100 border-b dark:bg-gray-700 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Mandalay
                </th>
                <td className="px-6 py-4">785 Pcs</td>
                <td className="px-6 py-4">288 Pcs</td>
              </tr>
            </tbody>
          </table>
          </div>
  )
}

export default StockDetailTable