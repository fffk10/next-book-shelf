'use client'

import { ColorModeScript, defaultConfig } from '@yamada-ui/react'

export default function ThemeScript() {
  return (
    <ColorModeScript
      type='cookie'
      nonce='testing'
      initialColorMode={defaultConfig.initialColorMode}
    />
  )
}
