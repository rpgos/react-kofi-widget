import React from 'react'

declare global {
  interface Window {
    kofiWidgetOverlay?: any;
  }
}

interface KofiButtonProps {
  background?: string
  textColor?: string
  text?: string
  username: string
}

export default function KofiFloatingButton({ background, textColor, username, text }: KofiButtonProps) {

  const drawWidget = () => {
    window.kofiWidgetOverlay.draw(username, {
      'type': 'floating-chat',
      'floating-chat.donateButton.text': text || '',
      'floating-chat.donateButton.background-color': background || '#00b9fe',
      'floating-chat.donateButton.text-color': textColor || '#FFF'
    })
  }

  return (
    <>
      <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js' />
      {drawWidget()}
    </>
  )
}
