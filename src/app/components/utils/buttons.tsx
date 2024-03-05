'use client'

import { Button } from '@yamada-ui/react'
import { FaPlus } from 'react-icons/fa6'

type CommonButtonProps = {
  variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  onClick: () => void
}

export const AddButton: React.FC<CommonButtonProps> = ({
  variant = 'outline',
  size = 'sm',
  colorScheme = 'secondary',
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      colorScheme={colorScheme}
      onClick={onClick}
      leftIcon={<FaPlus />}
    >
      追加
    </Button>
  )
}
