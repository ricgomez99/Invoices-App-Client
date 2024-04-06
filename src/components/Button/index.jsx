export default function Button({ type, handleClick, children }) {
  return (
    <button
      className="p-[12px] my-1 mx-0 text-[#fff] bg-black font-medium text-[16px] ease-in-out hover:bg-[#ccc] hovev:text-[#111] hover:ease-in-out"
      type={type ?? 'button'}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
