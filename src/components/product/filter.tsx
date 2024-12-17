import "rc-slider/assets/index.css"

import { pathOr } from "ramda"
import Slider from "rc-slider"
import { FC, useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { formatCurrencyVND } from "@/helpers/format"

interface SideBarProps {
  fetchData: (search: string, price: number[]) => void
  search: string
  price: number[]
}

const PRICE_RANGE = [1, 20000000] // Constant price range

const SidebarFilters: FC<SideBarProps> = ({ fetchData, search, price }) => {
  const [searchTerm, setSearchTerm] = useState(search)
  const [priceTerm, setPriceTerm] = useState(price)

  const renderTabsPriceRange = () => {
    const [activeTab, setActiveTab] = useState(true)

    return (
      <div className='relative flex flex-col space-y-5 p-5'>
        <div className='space-y-5'>
          <div className='flex justify-between'>
            <button type='button' className='font-medium uppercase' onClick={() => setActiveTab((prev) => !prev)}>
              Price
            </button>
            <span>
              <Button
                variant='outline'
                className='text-neutral-500 underline dark:text-neutral-300'
                onClick={() => setPriceTerm([...PRICE_RANGE])} // Reset to full range
              >
                Reset
              </Button>
            </span>
          </div>
          <div className={`space-y-2 overflow-hidden ${activeTab ? "h-auto pt-4" : "h-0"}`}>
            <Slider
              range
              min={PRICE_RANGE[0]} // Use constant min value
              max={PRICE_RANGE[1]} // Use constant max value
              step={1}
              defaultValue={[priceTerm[0], priceTerm[1]]}
              allowCross={false}
              onChange={(input: number | number[]) => Array.isArray(input) && input.length === 2 && setPriceTerm(input)}
            />
            <span className='mt-2 text-sm text-neutral-500'>
              Price: {formatCurrencyVND(priceTerm[0])} - {formatCurrencyVND(priceTerm[1])}
            </span>
          </div>
        </div>
      </div>
    )
  }

  const renderTextFilters = () => {
    const [activeTab, setActiveTab] = useState(true)

    return (
      <div className='relative flex flex-col space-y-5 p-5'>
        <div className='space-y-5'>
          <div className='flex justify-between'>
            <button type='button' className='font-medium uppercase' onClick={() => setActiveTab((prev) => !prev)}>
              Name
            </button>
            <span>
              <Button
                variant='outline'
                className='text-neutral-500 underline dark:text-neutral-300'
                onClick={() => setSearchTerm("")}
              >
                Reset
              </Button>
            </span>
          </div>
          <div className={`space-y-2 overflow-hidden ${activeTab ? "h-auto pt-4" : "h-0"}`}>
            <Label className='text-sm font-medium'>Search by name</Label>
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type='text'
              className='border rounded p-2 w-full'
              placeholder='Enter the name...'
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='rounded-md bg-white dark:bg-neutral-900'>
      <div className='divide-y divide-neutral-300 dark:divide-neutral-600'>
        {renderTextFilters()}
        {renderTabsPriceRange()}
      </div>
      <div className='flex place-items-end justify-end pr-5'>
        <Button onClick={() => fetchData(searchTerm, priceTerm)}>Search</Button>
      </div>
    </div>
  )
}

export default SidebarFilters
