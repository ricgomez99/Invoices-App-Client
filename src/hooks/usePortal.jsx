import { useRef, useEffect } from 'react'
import { createPortalRoot } from '../utils/portal'

export default function usePortal({ isOpen, onClose }) {
  const bodyRef = useRef(document.querySelector('body'))
  const portalRootRef = useRef(
    document.getElementById('drawer-root') || createPortalRoot()
  )

  const updatePageScroll = () => {
    if (isOpen) {
      bodyRef.current.style.overflow = 'hidden'
    }

    bodyRef.current.style.overflow = ''
  }

  // Append Portal Root On Mount
  useEffect(() => {
    bodyRef.current.appendChild(portalRootRef.current)
    const portal = portalRootRef.current
    const bodyElement = bodyRef.current

    return () => {
      portal.remove()
      bodyElement.style.overflow = ''
    }
  }, [])

  // Prevent scrolling when the Drawer is open
  useEffect(() => {
    updatePageScroll()
  }, [isOpen])

  // Uses Escape Key to Dismiss the Drawer
  useEffect(() => {
    const onKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keyup', onKeyPress)
    }

    return () => {
      window.removeEventListener('keyup', onKeyPress)
    }
  }, [isOpen, onClose])

  return { portalRef: portalRootRef.current }
}
