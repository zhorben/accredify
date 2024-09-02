import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { NavMenu } from '../NavMenu/NavMenu'

export const Layout: FC = () => {
  return (
    <div className="flex h-screen">
      <NavMenu />
      <div className="flex-1 flex flex-col">
        <div className="w-full">
          <Header />
        </div>
        <div className="flex-1 overflow-auto py-[3rem] px-[9rem]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
