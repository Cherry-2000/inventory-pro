import { Checkbox, Drawer, Table } from 'flowbite-react'
import { useState } from 'react'
import { AiOutlineFullscreen } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'
import { HiClipboardList } from 'react-icons/hi'
import { MdDelete } from 'react-icons/md'
import ProductDetails from '../../ProductDetails'
const AllProductsTable = ({ data, handleCheckboxChange, selectedIds }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)
  const {
    image,
    productName,
    productVariant,
    category,
    brand,
    buyingprice,
    sellingprice,
    quantity,
    unit,
    id
  } = data

  return (
    <>
      <Table.Row
        className="items-center h-24 bg-white hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Table.Cell className="p-4">
          <Checkbox
            id="checkbox1"
            value={id}
            // checked={selectedIds.includes(id)}
            onChange={handleCheckboxChange}
          />
        </Table.Cell>

        <Table.Cell>{image}</Table.Cell>
        <Table.Cell className=" font-medium text-gray-900 dark:text-white items-center">
          {productName}
          <span className="text-cyan-700 dark:text-cyan-300"> - {productVariant}</span>
        </Table.Cell>

        <Table.Cell>{category}</Table.Cell>
        <Table.Cell>{brand}</Table.Cell>
        <Table.Cell>${buyingprice}</Table.Cell>
        <Table.Cell>${sellingprice}</Table.Cell>
        <Table.Cell>
          {quantity}
          {unit}
        </Table.Cell>

        <Table.Cell>
          <div className="flex justify-end">
            <a
              href="#"
              className="text-2xl mx-2 text-cyan-600 hover:underline dark:text-cyan-500 dark:hover:text-yellow-400 hover:text-yellow-400"
            >
              <AiOutlineFullscreen />
            </a>

            <a
              href="#"
              className="text-2xl mx-1 text-cyan-600 hover:underline dark:text-cyan-500 dark:hover:text-yellow-400 hover:text-yellow-400"
            >
              <FaEdit />
            </a>
            <a
              href="#"
              className="text-2xl mx-1 text-cyan-600 hover:underline dark:text-cyan-500 dark:hover:text-yellow-400 hover:text-yellow-400"
            >
              <MdDelete />
            </a>
          </div>
        </Table.Cell>
      </Table.Row>

      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="bottom"
        className="h-[90%] items-center rounded-2xl dark:bg-cyan-900 scrollbar-thumb-rounded-full
       scrollbar-track-rounded-full scrollbar-thumb-cyan-700 scrollbar-thin  scrollbar-track-slate-300 h-[90%] overflow-y-scroll"
      >
        <Drawer.Header title="Product Details" titleIcon={HiClipboardList} />
        <Drawer.Items>
          <ProductDetails />
        </Drawer.Items>
      </Drawer>
    </>
  )
}

export default AllProductsTable
