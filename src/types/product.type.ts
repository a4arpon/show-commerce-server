export type productType = {
  _id: string
  name: string
  photoUrl: string
  price: number
  quantity: number
  size: 'Small' | 'Couple' | 'Friends Bucket' | 'Family Packet'
  quality: number
  tax: number
  optional: Optional[]
}

type Optional = {
  _id: string
  name: string
  price: number
  image: string
}
