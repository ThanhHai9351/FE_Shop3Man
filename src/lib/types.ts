export interface IAccount {
  name: string
  email: string
  password: string
  role: string
  address?: string
  dob?: Date
  avata?: string
  display_avata?: string
}

export interface ICategory {
  name: string
  image: string
}
