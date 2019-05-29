declare module '*.vue' {
  import { Vue } from 'nuxt-property-decorator'

  export default Vue
}

interface Window {
  BsBookingWidget: BookingWidget
}
