import { ReactNode, useState } from 'react'
import {
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import { theme } from '../../utils/tailwindConfig'
import { Icon } from '../Icon/Icon'

interface RowActionsProps {
  children: ReactNode
}

export const RowActions: React.FC<RowActionsProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-end',
    middleware: [offset(0)],
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ])

  return (
    <>
      <button
        className="min-w-[3.5rem] h-[4rem] flex items-center justify-center m-auto"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <Icon module="common" name="kebab" color={theme.colors.text.primary} />
      </button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: 'max-content',
            zIndex: 1000,
          }}
          {...getFloatingProps()}
          className="bg-white shadow-md rounded-md"
        >
          {children}
        </div>
      )}
    </>
  )
}
