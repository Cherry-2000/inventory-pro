import { Button, Checkbox, Table } from 'flowbite-react'
import React from 'react'
import { BsFillFileEarmarkExcelFill, BsFillFileEarmarkPdfFill } from 'react-icons/bs'
import { FaList } from 'react-icons/fa'
import { IoMdAddCircleOutline } from 'react-icons/io'

function Brands() {
  return (
    <div className="ml-8">
      <div className="flex gap-3 pt-5 text-3xl font-semibold  text-gray-800 dark:text-gray-100">
        <FaList className="h-10" />
        Brands
      </div>
      <hr className="h-px mt-6 mb-4 bg-gray-800 border-0 dark:bg-gray-100" />
      <div className="flex">
        <div className="flex px-5 items-center gap-3">
          <div id="DeleteButton" className="">
            <Button gradientDuoTone="purpleToBlue" className="h-14 items-center">
              <IoMdAddCircleOutline className="mr-2 h-7 w-7" />
              <div className="text-lg">Add New Brand</div>
            </Button>
          </div>
          <div id="DeleteButton" className="">
            <Button color="red" className="float-left">
              Delete
            </Button>
          </div>
        </div>
        <div className="flex px-5 w-auto float-right justify-end items-center gap-1">
          <div className="pl-5 text-center text-lg pr-1 font-bold text-gray-900 dark:text-white">
            Download -{' '}
          </div>
          <Button color="red">
            <BsFillFileEarmarkPdfFill className="text-xl pr-1" />
            PDF
          </Button>
          <Button color="green">
            <BsFillFileEarmarkExcelFill className="text-xl pr-1" />
            Excel
          </Button>
          <form className="mx-5">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-64 lg:w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Brands..."
              />
            </div>
          </form>
        </div>
      </div>
      <div className="mt-16">
        <div className="items-center">
          <Table hoverable className="">
            <Table.Head className="">
              <Table.HeadCell className="p-4 bg-gray-300 dark:border-gray-800 dark:bg-gray-950">
                <Checkbox id="CheckAll" />
              </Table.HeadCell>
              <Table.HeadCell className="p-4 bg-gray-300  dark:border-gray-800 dark:bg-gray-950">
                Image
              </Table.HeadCell>
              <Table.HeadCell className="p-4 bg-gray-300 dark:border-gray-800 dark:bg-gray-950">
                Name
              </Table.HeadCell>

              <Table.HeadCell className="p-4 bg-gray-300 dark:border-gray-800 dark:bg-gray-950">
                Description
              </Table.HeadCell>

              <Table.HeadCell className="p-4 bg-gray-300 dark:border-gray-800 dark:bg-gray-950">
                <span className="sr-only">Action</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className=""></Table.Body>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Brands
