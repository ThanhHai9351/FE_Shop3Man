"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters long.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(3, {
      message: "Password must be at least 3 characters long.",
    }),
    repassword: z.string().min(3, {
      message: "Password must be at least 3 characters long.",
    }),
    address: z.string().min(3, {
      message: "Address must be at least 3 characters long.",
    }),
    dob: z.date({
      required_error: "Please select a valid date.",
      invalid_type_error: "That's not a valid date.",
    }),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Passwords do not match.",
    path: ["repassword"],
  })

const FormRegister = () => {
  const toast = useToast()
  const router = useRouter()
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      address: "",
      dob: undefined,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { repassword, ...valuesWithoutRepassword } = values
    const dataUser = { ...valuesWithoutRepassword, role: "user" }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BEHOST}/user/register`, {
      method: "POST",
      body: JSON.stringify(dataUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    const data = await response.json()
    if (data.status !== 404) {
      toast.toast({
        variant: "default",
        title: "Đăng ký thành công",
        description: "Tài khoản hợp lệ!",
      })
      setTimeout(() => {
        router.push("/account/login")
      }, 1500)
    } else {
      toast.toast({
        variant: "destructive",
        title: "Đăng nhập thất bại!",
        description: "Vui lòng kiểm tra lại tài khoản, hoặc mật khẩu!",
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
          Sign Up
        </h2>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name='repassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder='******' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='address'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder='Enter the address' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='dob'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='mr-5'>Date of Birth</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={date}
                      onSelect={(selectedDate) => {
                        setDate(selectedDate)
                        field.onChange(selectedDate)
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
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

export default FormRegister
