import React from 'react'

declare global {
  interface Window {
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
  const initScript = `
    (function() {
      if (typeof window !== 'undefined' && window.kofiWidgetOverlay) {
        window.kofiWidgetOverlay.draw('${username}', {
          'type': 'floating-chat',
          'floating-chat.donateButton.text': '${text || ''}',
          'floating-chat.donateButton.background-color': '${background || '#00b9fe'}',
          'floating-chat.donateButton.text-color': '${textColor || '#FFF'}'
        });
      }
    })();
  `;

  return (
    <>
      <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js' />
      <script dangerouslySetInnerHTML={{ __html: initScript }} />
    </>
  )
}
