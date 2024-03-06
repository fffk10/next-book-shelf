'use client'

import { Button } from '@yamada-ui/react'
import { ReactElement } from 'react'
import { FaPlus } from 'react-icons/fa6'

type CommonButtonProps = {
  text?: string
  variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  colorScheme?: string
  disable?: boolean
  onClick?: () => void
  leftIcon?: ReactElement
  rightIcon?: ReactElement
}

/**
 * 汎用ボタン
 * @param text テキスト
 * @param variant バリアント
 * @param size サイズ
 * @param colorScheme カラー
 * @param disable クリック無効
 * @param onClick クリックハンドラ
 * @param leftIcon レフトアイコン
 * @param rightIcon ライトアイコン
 * @returns ボタン
 */
export const CommonButton: React.FC<CommonButtonProps> = ({
  text = '',
  variant = 'outline',
  size = 'sm',
  colorScheme = 'secondary',
  disable = false,
  onClick = () => {},
  leftIcon = <></>,
  rightIcon = <></>,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      colorScheme={colorScheme}
      isDisabled={disable}
      onClick={onClick}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      {text}
    </Button>
  )
}
