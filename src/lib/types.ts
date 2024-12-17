export interface IAccount {
  _id: string
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
  dob: Date
  avatarUrl?: string
  phone?: string
}

export interface ICategory {
  _id: string
  name: string
  imageUrl: string
  description: string
  slug: string
}

export interface IProduct {
  _id: string
  name: string
  price: number
  slug: string
  imageUrl: string
  description: string
  categoryID: string
  items?: any
}
