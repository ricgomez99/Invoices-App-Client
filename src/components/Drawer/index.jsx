import usePortal from '../../hooks/usePortal'
import { createPortal } from 'react-dom'
import FocusTrap from 'focus-trap-react'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'

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
        <motion.div
          variants={fadeIn('left', 'tween', 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          role="dialog"
          className={`bg-[#0C0C0C] lg:w-[300px] md:w-[300px] sm:w-[35%] h-[calc(100vh)] p-4 overflow-auto fixed z-[1000] top-0 left-0 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {children}
        </motion.div>
        {isOpen && (
          <div
            className={`bg-[#00000080] transition-opacity duration-1000 ease-linear w-full h-full top-0 left-0 fixed z-[999] ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={onClose}
          />
        )}
      </div>
    </FocusTrap>,
    portalRef
  )
}
