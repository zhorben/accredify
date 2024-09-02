import React, { FC } from 'react'

type AvatarSize = 'small' | 'medium' | 'large'

interface AvatarProps {
  src: string
  alt: string
  size?: AvatarSize
  className?: string
}

const sizeClasses = {
  small: 'w-avatar-sm h-avatar-sm',
  medium: 'w-avatar-md h-avatar-md',
  large: 'w-avatar-lg h-avatar-lg',
}

export const Avatar: FC<AvatarProps> = ({
  src,
  alt,
  size = 'medium',
  className = '',
}) => {
  return (
    <div
      className={`rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}
