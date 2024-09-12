import { DarkThemeToggle, Sidebar } from 'flowbite-react'
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi'

const LeftNavigation = () => {
  return (
    <Sidebar
      id="logo-sidebar"
      className="h-screen w-32 lg:w-48 sticky left-0 top-0"
      aria-label="Sidebar"
    >
      <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="logo" className="pt-5 pb-5">
        <h1 className="text-2xl">Inventory Pro</h1>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup className="">
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="Products">
            <Sidebar.Item href="#">Create Product</Sidebar.Item>
            <Sidebar.Item href="#">All Products</Sidebar.Item>
            <Sidebar.Item href="#">Brands</Sidebar.Item>
            <Sidebar.Item href="#">Categories</Sidebar.Item>
            <Sidebar.Item href="#">Units</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiInbox}>
            Stocks
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Quotations
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Purchases
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sells
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            asdfjkei
          </Sidebar.Item>
          <div className="w-10 h-10 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 ring-4 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg">
            <DarkThemeToggle />
          </div>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default LeftNavigation
