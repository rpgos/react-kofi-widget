import React, { useEffect } from 'react'

declare global {
  interface Window {
    kofiWidgetOverlay?: any;
  }
}

interface KofiFloatingButtonProps {
  background?: string
  textColor?: string
  text?: string
  username: string
}

export default function KofiFloatingButton({ background, textColor, username, text }: KofiFloatingButtonProps) {
  useEffect(() => {
    window.kofiWidgetOverlay.draw(username, {
      'type': 'floating-chat',
      'floating-chat.donateButton.text': text || '',
      'floating-chat.donateButton.background-color': background || '#00b9fe',
      'floating-chat.donateButton.text-color': textColor || '#FFF'
    })
  }, [])

  return (
    <>
      <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js' />
    </>
  )
}
