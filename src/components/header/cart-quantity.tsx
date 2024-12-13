import { FiMinus, FiPlus } from "react-icons/fi"
const CartQuantity = () => {
  return (
    <div className={`flex items-center h-10`}>
      <button
        disabled={true}
        className='flex h-8 w-8 items-center justify-center rounded-l border border-neutral-200 
                   hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50'
      >
        <FiMinus className='h-4 w-4' />
      </button>

      <div className='flex h-8 w-12 items-center justify-center border-y border-neutral-200 bg-white'>10</div>

      <button
        disabled={true}
        className='flex h-8 w-8 items-center justify-center rounded-r border border-neutral-200 
                   hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50'
      >
        <FiPlus className='h-4 w-4' />
      </button>
    </div>
  )
}

export default CartQuantity
