
import { useEffect, useState } from 'react'
import ProfitChart from '../components/ProfitChart'
import TopSellPie from '../components/TopSellPie'

import InventoryChart from '../components/InventoryChart'

const Home = () => {
  

  return (
    <div className="ml-4 mr-2 pt-6">
      <div className="flex justify-end mr-10 items-baseline">
        {/* dropdown choose wearhouse */}
        <label htmlFor="warehouse" className="pl-9 pr-3 text-lg text-gray-800 dark:text-gray-100">
          Choose Warehouse :{' '}
        </label>
        <select className="block rounded-lg px-0 border-0 border-b-2 border-gray-200 appearance-none dark:border-gray-900 dark:bg-gray-900 focus:outline-none focus:ring-0 focus:border-gray-200 peer pr-3 pl-3 text-md font-semibold  text-gray-800 dark:text-gray-100">
          <option selected>All Warehouse</option>
          <option>Yangon</option>
          <option>Mandalay</option>
          <option>Pathein</option>
          <option>Nay Pyi Taw</option>
        </select>
        {/*****************************************/}

        {/* dropdown choose time */}
        <label htmlFor="warehouse" className="pl-9 pr-3 text-lg  text-gray-800 dark:text-gray-100">
          Time :{' '}
        </label>
        <select className="block rounded-lg px-0 border-0 border-b-2 border-gray-200 appearance-none dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-0 focus:border-gray-200 peer pr-3 pl-3 text-md font-semibold  text-gray-800 dark:text-gray-100">
          <option selected>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
          <option>Last Year</option>
        </select>
        <div>warehoue name</div>
      </div>

      {/*****************************************/}
      <div className="pl-4 pt-4 border-2 dark:border-gray-700 ">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="justify-center p-2 h-32 rounded-lg shadow bg-white dark:bg-gray-800">
            <div className="primaryText">Sale</div>
            <div className="mainText flex justify-end items-baseline">
              <div className="numText">{4100000 / 2}</div>&nbsp;&nbsp;Kyats
            </div>
          </div>
          <div className="justify-center p-2 h-34 rounded-lg shadow bg-white dark:bg-gray-800">
            <div className="primaryText">Purchases</div>
            <div className="mainText flex justify-end items-baseline">
              <div className="numText">3,100,000</div>&nbsp;&nbsp;Kyats
            </div>
          </div>
          <div className="justify-center p-2 h-34 rounded-lg shadow bg-white dark:bg-gray-800">
            <div className="primaryText">Profit</div>
            <div className="mainText flex justify-end items-baseline">
              <div className="numText">1,000,000</div>&nbsp;&nbsp;Kyats
            </div>
          </div>
        </div>
        {/*****************************************/}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/*sale Chart*/}

          <div className="col-span-2 justify-center h-96 w-full rounded-lg p-2 shadow bg-white dark:bg-gray-800 md:p-6">
            <div className="flex justify-between">
              <div>
                <h5 className="leading-none text-2xl font-semibold text-gray-900 dark:text-white pb-2">
                  Chart
                </h5>
              </div>

              <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-gray-900 dark:text-white text-center">
                Profit -
                <div className="flex items-center px-1 text-2xl font-semibold text-green-500 dark:text-green-300 text-center">
                  12%
                  <svg
                    className="w-3 h-3 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13V1m0 0L1 5m4-4 4 4"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <ProfitChart></ProfitChart>
          </div>
          {/*****************************************/}
          {/*Pie Chart*/}

          <div className="justify-center h-96 w-full rounded-lg shadow bg-white dark:bg-gray-800">
            <h5 className="leading-none text-2xl font-semibold text-gray-900 dark:text-white pb-2 mt-4 ml-5">
              Top Selling Products
            </h5>
            <TopSellPie className="d-flex justify-center"></TopSellPie>
          </div>
        </div>

        <div className="items-center justify-center h-96 mb-4 pb-12 rounded-lg shadow bg-gray-50 dark:bg-gray-800">
          <h5 className="leading-none text-2xl font-semibold text-gray-900 dark:text-white pb-2 pt-5 mt-4 ml-5 pb-5">
            AI Recommentations
          </h5>
          <div className="pl-10 text-gray-950 dark:text-white">
            <div className="pb-2">asiasdlkfalskdfljkasdfjkl;asdfjklasdjklfasjkldflkjsd;f</div>
            <div className="pb-2">
              asiasdlkfalskdfljkasdfjkl;asdfjklasdjasdfgasdklfasjkldflkjsd;f
            </div>
            <div className="pb-2">
              asiasdlkfalskdfljkasdfjkl;asdasdfasdfjklasdjklfasjkldflkjsd;f
            </div>
            <div className="pb-2">
              asiasdlkfalskdfljkasdfjkl;asdfasdfasdfjklasdjklfasjkldflkjsd;f
            </div>
          </div>
        </div>

        <div className="items-center justify-center h-96 mb-4 pb-14 rounded-lg shadow bg-gray-50 dark:bg-gray-800">
          <h5 className="leading-none text-2xl font-semibold text-gray-900 dark:text-white pb-2 pt-5 pb-3 mt-4 ml-5">
            Stock Overview
          </h5>
          <InventoryChart className="flex justify-center"></InventoryChart>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center justify-center rounded-lg bg-gray-50 h-28 dark:bg-gray-800">
            <p className="maintext">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="maintext">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="maintext">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="maintext">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <p className="maintext">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="maintext">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="maintext">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="maintext">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="maintext">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
