'use client'
import { ThemeConfig, extendConfig } from '@yamada-ui/react'

export const config: ThemeConfig = {
  initialColorMode: 'system',
}

export const customConfig = extendConfig(config)
