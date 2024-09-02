import React from 'react'

interface IconProps {
  module: string
  name: string
  color: string
  className?: string
}

export const Icon: React.FC<IconProps> = ({
  module,
  name,
  color,
  className = '',
}) => {
  return (
    <svg className={`w-6 h-6 ${className}`}>
      <use href={`/assets/${module}.svg#${name}`} style={{ color }} />
    </svg>
  )
}
