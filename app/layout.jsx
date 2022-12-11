// import './globals.css'
import '../styles/dist.css'
import { Libre_Franklin } from "@next/font/google"

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
  variable: "--font-libreFranklin"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={libreFranklin.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='
        text-xl     
      '>{children}</body>
    </html>
  )
}
