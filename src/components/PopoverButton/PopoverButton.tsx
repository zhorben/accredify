interface PopoverButtonProps {
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
  dataTestid?: string
  onClick?: () => void
}

export const PopoverButton: React.FC<PopoverButtonProps> = ({
  children,
  icon = null,
  className = '',
  dataTestid = '',
  onClick,
}) => {
  return (
    <button
      data-testid={dataTestid}
      className={`flex items-center p-[0.75rem] w-full min-w-[15.5rem] justify-start hover:bg-hover ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-[0.5rem]"> {icon}</span>}
      {children}
    </button>
  )
}
