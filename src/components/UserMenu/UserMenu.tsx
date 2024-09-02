import { useCallback, useState } from 'react'
import {
  FloatingFocusManager,
  FloatingPortal,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { useUser } from '../../data/useUser'
import { theme } from '../../utils/tailwindConfig'
import { Avatar } from '../Avatar/Avatar'
import { Icon } from '../Icon/Icon'
import { PopoverButton } from '../PopoverButton/PopoverButton'

interface UserMenuProps {
  className?: string
}

export const UserMenu: React.FC<UserMenuProps> = ({ className }) => {
  const { type } = useParams()
  const navigate = useNavigate()
  const { data: user } = useUser()

  const [isOpen, setIsOpen] = useState(false)

  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-end',
    middleware: [offset(8)],
  })

  const click = useClick(context)
  const role = useRole(context)
  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    role,
    dismiss,
  ])

  const handleLogout = useCallback(() => {
    navigate(type === 'personal' ? '/regular' : '/personal')
    setIsOpen(false)
  }, [type, navigate])

  if (!user) return null

  return (
    <>
      <button
        data-testid="user-menu"
        ref={refs.setReference}
        {...getReferenceProps()}
        className={
          'flex items-center hover:bg-hover p-[0.5rem] rounded-[0.25rem] text-text-heading text-sm border' +
          `border-${isOpen ? 'secondary' : 'transparent'} ` +
          `bg-${isOpen ? '[#F3F4F5]' : 'transparent'} ` +
          className
        }
      >
        <Avatar
          src={user.profile_picture_url}
          alt="User Avatar"
          size="small"
          className="mr-[0.5rem]"
        />
        {user.name}
        <Icon
          module="common"
          name={'arrow-bottom'}
          color={theme.colors.text.heading}
        />
      </button>
      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              className="modal-container"
              ref={refs.setFloating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
              }}
              {...getFloatingProps()}
            >
              <div className="flex p-[0.75rem]">
                <Avatar
                  src={user.profile_picture_url}
                  alt="User Avatar"
                  size="large"
                  className="mr-[1rem]"
                />
                <div>
                  <div className="font-bold text-text-heading">{user.name}</div>
                  <div className="body2">
                    {user.current_organisation.is_personal
                      ? 'Recipient'
                      : 'Member'}
                  </div>
                </div>
              </div>
              <div className="border-b border-divider my-[1rem]" />
              <PopoverButton
                dataTestid="logout-button"
                className="mt-[0.5rem]"
                icon={
                  <Icon
                    module="theme"
                    name="logout"
                    color={theme.colors.text.heading}
                  />
                }
                onClick={handleLogout}
              >
                Log out
              </PopoverButton>
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  )
}
