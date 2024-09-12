import BarcodeGenerator from './components/BarcodeGenerator'

import ProductImage from '../assets/images/product.jpg'

function ProductDetails() {
  return (
    <div className="ml-8 mr-2 ">
      {/*
      <div className="flex gap-1 pt-5 text-3xl items-center font-semibold  text-gray-800 dark:text-gray-100">
        <HiClipboardList className="h-12 w-12 -ml-2" />
        Product Details
      </div>
      */}
      <hr className="h-px mt-6 mb-4 bg-gray-800 border-0 dark:bg-gray-100" />
      <div className="px-24 bg-slate-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow grid grid-cols-10 pb-6 pt-6 place-items-center">
        <div className="rounded-lg relative overflow-x-auto col-span-5">
          <table className=" w-96 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Brand
                </td>
                <td className="text-gray-900 dark:text-white font-semibold px-6 py-4">Coke </td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Name {'(Variant)'}
                </td>
                <td className="text-gray-900 dark:text-white font-semibold px-6 py-4">
                  Coke {'(1.25 liter)'}
                </td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Category
                </td>
                <td className="text-gray-900 dark:text-white font-semibold px-6 py-4">
                  Soda Drink
                </td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Product Code
                </td>
                <td className="text-gray-900 dark:text-white font-semibold px-6 py-4">
                  Soda000002327
                </td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Buying Price
                </td>
                <td className="text-gray-900 dark:text-white font-semibold px-6 py-4">2000</td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Selling Price
                </td>
                <td className="text-gray-900 dark:text-white font-semibold px-6 py-4">2400</td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Stock Alert
                </td>
                <td className="text-gray-900 dark:text-white font-semibold px-6 py-4">5</td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Description
                </td>
                <td className="text-gray-900 dark:text-white font-semibold px-6 py-4">
                  This is a Product.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Image */}
        {/* <img src={'https://www.w3schools.com/images/lamp.jpg'} /> */}
        <div className="items-center grid grid-rows-6 col-span-5 place-items-center">
          <div className=" row-span-4 rounded-lg">
            <img src={ProductImage} className="rounded-lg w-72" />
          </div>

          {/* Barcode */}
          <div className=" row-span-2 mt-6">
            <div className=" bg-white h-28 w-72 rounded-lg ring-2 justify-center">
              <div className="flex items-center justify-center">
                <div className="text-black text-xs font-bold mx-2 mt-1.5 ">Cocacola 1.25 liter</div>
                <div className="text-black font-normal ml-6 mx-2 mt-1.5">3400 Kyats</div>
              </div>
              <div className="flex justify-center -mt-1">
                <BarcodeGenerator className="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stock Details */}
      <div className="px-10 mt-4 bg-slate-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow pb-8 pt-3">
        <h1 className="text-xl font-bold py-5">Stock Details</h1>

        <div className="rounded-lg">
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
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
