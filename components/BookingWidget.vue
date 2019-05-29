<template>
  <div id="widget-container" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue implements BookingWidget {
  @Prop({ required: true }) readonly accommodationId
  @Prop() readonly source
  @Prop({ default: 'de' }) readonly lang

  widgetScript?: HTMLScriptElement

  mounted() {
    if (process.browser) {
      window.BsBookingWidget = {
        accommodationId: this.accommodationId,
        source: this.source
      }

      const widget = document.createElement('div')
      widget.setAttribute('id', 'Bs-BookingWidget')
      document.body.append(widget)

      this.widgetScript = document.createElement('script')

      this.widgetScript.setAttribute(
        'src',
        'https://widget.bookingsuedtirol.com/widget.js'
      )

      document.body.append(this.widgetScript)
    }
  }

  beforeDestroy() {
    if (this.widgetScript && this.widgetScript.parentNode) {
      this.widgetScript.parentNode.removeChild(this.widgetScript)
    }
  }
}
</script>
