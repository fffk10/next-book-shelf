'use client'

import { Button } from '@yamada-ui/react'
import { ReactElement } from 'react'

type CommonButtonProps = {
  /** テキスト */
  text?: string
  /** バリアント */
  variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled'
  /** サイズ */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /** カラースキーム */
  colorScheme?: string
  /** disable */
  disable?: boolean
  /** クリックハンドラ */
  onClick?: () => void
  /** ボタン左側のアイコン */
  leftIcon?: ReactElement
  /** ボタン右側のアイコン */
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
export function CommonButton({
  text = '',
  variant = 'outline',
  size = 'sm',
  colorScheme = 'secondary',
  disable = false,
  onClick = () => {},
  leftIcon = <></>,
  rightIcon = <></>,
}: CommonButtonProps) {
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
