import LeftNavigation from './LeftNavigation'

const Layout = ({ children }) => {
  return (
    <div className="flex w-full font-roboto tracking-wide">
      <LeftNavigation className="bg-slate-200 dark:bg-gray-700" />
      <div>{children}</div>
    </div>
  )
}

export default Layout
