export default function Button({ type, handleClick, children }) {
  return (
    <button
      className="p-3 my-1 text-white border-2 border-black bg-black font-semibold text-base ease-in-out hover:bg-transparent hover:text-[#111] hover:ease-in-out rounded-xl"
      type={type ?? 'button'}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
