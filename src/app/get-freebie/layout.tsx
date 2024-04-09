import Navbar from './navbar'
// import Footer from './footer'
import localFont from 'next/font/local'
//  import {} from '../../../public'
// Font files can be colocated inside of `pages`
// const myFont = localFont(
//   { src: [
//     {
//       path: '../../../public/fonts/haskoy/woff2/static/Haskoy-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     // {
//     //   path: './Roboto-Italic.woff2',
//     //   weight: '400',
//     //   style: 'italic',
//     // },
//     // {
//     //   path: './Roboto-Bold.woff2',
//     //   weight: '700',
//     //   style: 'normal',
//     // },
//     // {
//     //   path: './Roboto-BoldItalic.woff2',
//     //   weight: '700',
//     //   style: 'italic',
//     // },
//   ], variable: '--font-haskoy' }
//   )
 
export default function Layout({ children } : { children: React.ReactNode}) {
  return (
    <>
      <Navbar />
      <main className={'--font-haskoy'}>{children}</main>
      {/* <Footer /> */}
    </>
  )
}