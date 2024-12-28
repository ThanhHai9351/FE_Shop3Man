import { IProduct } from "@/lib/types"
import { IoHeart } from "react-icons/io5"
import { GiShatteredHeart } from "react-icons/gi"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useAddWhistlistMutation, useRemoveWhistlistMutation } from "@/store/services/whistlist.service"

const ButtonWhistlisted = ({ product }: { product: IProduct }) => {
  const toast = useToast()
  const [whistlisted, setWhistlisted] = useState(product.isWhistlisted)
  const accessToken = localStorage.getItem("accessToken") || ""
  const [addWhistListed] = useAddWhistlistMutation()
  const [removeWhistlisted] = useRemoveWhistlistMutation()
  const handleWhistlisted = async () => {
    if (whistlisted) {
      const res = await removeWhistlisted({ productId: product._id, accessToken }).unwrap()
      if ((await res).status === 200) {
        setWhistlisted(false)
        toast.toast({
          variant: "default",
          title: "Remove whistlist successfully!",
          description: "Whistlist handle!",
        })
      }
      if ((await res).status === 400) {
        toast.toast({
          variant: "destructive",
          title: "Remove whistlist failed!",
          description: "Whistlist handle!",
        })
      }
    } else {
      const res = addWhistListed({ productId: product._id, accessToken }).unwrap()
      if ((await res).status === 200) {
        setWhistlisted(true)
        toast.toast({
          variant: "default",
          title: "Add whistlist successfully!",
          description: "Whistlist handle!",
        })
      }
    }
  }
  return (
    <Button onClick={handleWhistlisted} variant={"outline"}>
      {whistlisted ? <IoHeart /> : <GiShatteredHeart />}
    </Button>
  )
}

export default ButtonWhistlisted
