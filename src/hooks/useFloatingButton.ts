import { useEffect } from "react";
import { KofiFloatingButtonProps } from "../components/KofiFloatingButton/KofiFloatingButton";

export function useFloatingButton({ username, background, textColor, text }: KofiFloatingButtonProps) {
  useEffect(() => {
    if(document.querySelector(`script[src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"]`)) return;

    const script = document.createElement('script');

    script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
    script.onload = draw

    document.body.appendChild(script)
  }, [])

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
}
