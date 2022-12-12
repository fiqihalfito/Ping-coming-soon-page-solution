"use client"

import { useState } from 'react'
import EmailInput from '../components/email-input'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Illustration from '../components/illustration'
import Logo from '../components/logo'
import SocialMedia from '../components/social-media'
import ValidationResult from '../components/validation-result'

import { emailFormat, validation } from '../constansts'

export default function Home() {

  const [warning, setWarning] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    validator(event.target.email.value)
  }

  function validator(email) {

    if (!email) {
      // empty email
      setWarning(validation.empty)
    } else {
      // email exists then check validation
      if (!email.match(emailFormat)) {
        setWarning(validation.invalid)
      } else {
        setWarning("")
      }
    }
  }

  return (
    <div className="h-screen w-screen md:w-1/2 md:mx-auto font-libreFranklin p-12 flex flex-col">
      <Logo />
      <Hero />

      <EmailInput onSubmit={handleSubmit} />
      {warning && <ValidationResult warning={warning} />}

      <Illustration />
      <div className="text-center">
        <SocialMedia />
        <Footer />
      </div>
    </div>
  )
}
