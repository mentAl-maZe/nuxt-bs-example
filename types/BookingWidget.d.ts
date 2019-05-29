interface BookingWidget {
  accommodationId: number
  lang?: 'de' | 'it' | 'en'
  arrival?: string
  departure?: string
  currentMonth?: string
  occupations?: number[][]
  layout?: 'one-pager' | '4-steps' | 'compact'
  defaultOfferList?: 'rooms' | 'specials'
  offerId?: number
  roomId?: number
  promotion?: [string, string, string]
  source?: number
  onBookingSuccess?(data: BookingData): void
  onBookingError?(data: BookingData): void
  onRequestSuccess?(data: RequestData): void
}

interface RoomData {
  id: number
  title: string
  code: string
  roomSeq: number
  roomType: 1 | 2
  adults: 18[]
  children: number[]
}

interface OfferData {
  id: number
  title: string
  price: number
  service: 0 | 1 | 2 | 3 | 4 | 5
  room: RoomData
}

interface ExtraData {
  id: number
  title: string
  amount: number
  price: number
}

interface CompanyData {
  name: string
  taxnumber: string
  street: string
  city: string
  zipcode: string
  country: string
}

interface GuestData {
  gender: 'm' | 'f'
  firstname: string
  lastname: string
  email: string
  phone: string
  street: string
  city: string
  zipcode: string
  country: string
  note: string
  company: CompanyData
}

interface RequestData {
  bookingId: number
  arrival: string
  departure: string
  nights: number
  offers: OfferData[]
  guest: GuestData
}

interface BookingData extends RequestData {
  price: number
  extras: ExtraData[]
}
