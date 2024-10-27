import GetToUs from '@/components/contact-us/GetToUs'
import GlobalPresent from '@/components/contact-us/GlobalPresent'
import GoogleMapComponent from '@/components/contact-us/GoogleMapComponent'
import HowCanWeHelp from '@/components/contact-us/HowCanWeHelp'
import React from 'react'

const ContactPage = () => {
  return (
    <main>
      <GetToUs />
      <HowCanWeHelp />
      <GlobalPresent />
      <GoogleMapComponent />
    </main>
  )
}

export default ContactPage