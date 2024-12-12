import React from 'react'

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

  const drawWidget = () => {
    setTimeout(() => {
      window.kofiWidgetOverlay.draw(username, {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': text || '',
        'floating-chat.donateButton.background-color': background || '#00b9fe',
        'floating-chat.donateButton.text-color': textColor || '#FFF'
      })
    }, 500)

    return true
  }

  return (
    <>
      <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js' async />
      {drawWidget()}
    </>
  )
}
