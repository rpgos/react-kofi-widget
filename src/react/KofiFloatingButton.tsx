import React, { useEffect, useRef } from 'react'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kofiWidgetOverlay?: any;
  }
}

export interface KofiFloatingButtonProps {
  background?: string
  textColor?: string
  text?: string
  username: string
}

export default function KofiFloatingButton({ background, textColor, username, text }: KofiFloatingButtonProps) {
  const intervalId = useRef<number | undefined>(undefined)
  const retries = useRef<number>(0)

  const draw = () => {
    if(typeof window.kofiWidgetOverlay !== 'undefined') {
      window.kofiWidgetOverlay.draw(username, {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': text || '',
        'floating-chat.donateButton.background-color': background || '#00b9fe',
        'floating-chat.donateButton.text-color': textColor || '#fff'
      })
    }
  }

  const fixIframe = () => {
    return setInterval(() => {
      document.getElementsByClassName('floatingchat-container')[0].setAttribute('style', 'color-scheme: normal;')
      document.getElementsByClassName('floatingchat-container-mobi')[0].setAttribute('style', 'color-scheme: normal;')

      if(retries.current >= 5) {
        clearInterval(intervalId.current)
      }

      retries.current = retries.current + 1
    }, 100)
  }

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
    script.onload = draw

    document.body.appendChild(script)
    intervalId.current = fixIframe()
  }, [])

  return (
    <div>
    </div>
  )
}
