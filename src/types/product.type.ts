export type productType = {
  _id: string
  name: string
  photoUrl: string
  rawPhoto: string
  price: number
  quality: number
  tax: number
  optional: Optional[]
}

type Optional = {
  _id: string
  name: string
  price: number
  image?: string
}
