"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z, type infer } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAppContext } from "@/app/app_provider"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useLoginAccountMutation } from "@/store/services/account.service"
import { saveToLocalstorage } from "@/lib/storage"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(3, {
    message: "Password must be at least 3 characters long.",
  }),
})

const FormLogin = () => {
  const toast = useToast()
  const router = useRouter()
  const [loginAccount, loginAccountResult] = useLoginAccountMutation()
  const { setSessionToken } = useAppContext()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await loginAccount(values).unwrap()
      if (result.status === 200) {
        setSessionToken(result.accessToken)
        saveToLocalstorage("accessToken", result.accessToken)
        saveToLocalstorage("refreshToken", result.refreshToken)
        toast.toast({
          variant: "default",
          title: "Login Successfully!",
          description: "Account Validate!",
        })
        setTimeout(() => {
          router.push("/")
        }, 1500)
      } else {
        toast.toast({
          variant: "destructive",
          title: "Login Failed!",
          description: "Please to check your information again!",
          action: <ToastAction altText='Try again'>Try again</ToastAction>,
        })
      }
    } catch {
      toast.toast({
        variant: "destructive",
        title: "Network failed!",
        description: "Please to check network before register again!",
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 border border-gray-300 rounded-md shadow-md p-4 w-1/3 '
      >
        <h2 className='scroll-m-20 border-b text-3xl font-semibold tracking-tight first:mt-0 text-center pb-5'>
          Sign In
        </h2>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder='abc@gmail.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder='******' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='text-center'>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Form>
  )
}

export default FormLogin
