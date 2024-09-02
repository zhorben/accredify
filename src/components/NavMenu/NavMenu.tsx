import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useUser } from '../../data/useUser'
import { NAVIGATION_ITEMS, NavItem } from '../../utils/navigation'
import { Avatar } from '../Avatar/Avatar'
import { Icon } from '../Icon/Icon'

export const NavMenu: React.FC = () => {
  const location = useLocation()

  const { data: user } = useUser()

  return (
    <nav className="w-[3.75rem] bg-[#151F32] flex flex-col items-center py-4">
      {user && (
        <NavLink
          to="/profile"
          className="w-[3.75rem] h-[3.75rem] flex items-center justify-center mb-[1.75rem]"
        >
          <Avatar
            src={
              user.current_organisation.is_personal
                ? user.profile_picture_url
                : user.current_organisation.logo_url
            }
            alt="Organisation or User Avatar"
            size="medium"
          />
        </NavLink>
      )}
      {NAVIGATION_ITEMS.map((item: NavItem) => {
        return (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `w-[3.75rem] h-[3.75rem] flex items-center justify-center hover:bg-gray-700 mb-[0.5rem] ${
                isActive ? 'bg-white bg-opacity-10' : ''
              }`
            }
            aria-label={item.label}
          >
            <Icon
              module="nav"
              name={item.icon}
              color={location.pathname === item.path ? '#FFFFFF' : '#D0D2D6'}
            />
          </NavLink>
        )
      })}
    </nav>
  )
}
