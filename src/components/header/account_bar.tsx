import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Avata from "@/shared/avatar/avatar_bar"
import Link from "next/link"

const AccountBar = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='link'>
          <Avata />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className=' leading-none text-center font-semibold'>Account</h4>
            <hr />
          </div>
          <div className='grid gap-2'>
            <Link className="m-auto" href={"/account/login"}>
                <Button variant='default'>Sign In</Button>
            </Link>
          </div>
          <div className='grid gap-2'>
            <p className='font-mono text-sm'>
              Dont have an account!
              <Link className='text-red-500 mx-2 font-semibold' href={"/account/register"}>
                Sign up now!
              </Link>
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default AccountBar