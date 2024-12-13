import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import type { IAccount } from "@/lib/types"
import { getUserFromToken } from "@/services/account.service"
import AvatarBar from "@/shared/avatar/avatar_bar"
import ButtonLogout from "@/shared/button/button_logout"
import { cookies } from "next/headers"
import Link from "next/link"

const AccountBar = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value || ""
  const userData: IAccount = (await getUserFromToken(accessToken as string)) || null

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='link'>
          <AvatarBar
            avatar={
              userData?.avatarUrl
                ? userData?.avatarUrl
                : "https://www.reshot.com/preview-assets/icons/CSGHD3W8VY/orange-shirt-CSGHD3W8VY.svg"
            }
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className=' leading-none text-center font-semibold'>Account</h4>
            <hr />
          </div>
          {userData && (
            <div>
              <p>{`webcome to ${userData.firstName} ${userData.lastName}`}</p>
              <ButtonLogout />
            </div>
          )}
          {userData === null && (
            <div>
              <div className='grid gap-2'>
                <Link className='m-auto' href={"/account/login"}>
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
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default AccountBar
