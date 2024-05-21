import usePortal from '../../hooks/usePortal'
import { createPortal } from 'react-dom'
import FocusTrap from 'focus-trap-react'
import { useRef } from 'react'

export default function Drawer({
  isOpen,
  onClose,
  children,
  position,
  removeWhenClosed = true,
}) {
  const { portalRef } = usePortal({ isOpen, onClose })
  const inputRef = useRef(null)

  return createPortal(
    <FocusTrap
      active={!isOpen}
      focusTrapOptions={{ initialFocus: inputRef, onDeactivate: onClose }}
    >
      <div aria-hidden={isOpen ? 'false' : 'true'}>
        <div
          role="dialog"
          className={`bg-[#0C0C0C] w-[25%] h-[calc(100vh)] p-4 overflow-auto fixed transition-all duration-1000 ease-in-out z-[1000] top-0 left-0 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {children}
        </div>
        <div
          className="bg-[#00000080] transition-all duration-1000 ease-in-out w-full h-full top-0 left-0 fixed z-[999]"
          onClick={onClose}
        />
      </div>
    </FocusTrap>,
    portalRef
  )
}
