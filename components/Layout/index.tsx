import Head from 'next/head'
import Navbar from './navbar'

// types
import type { ReactNode, FC } from 'react'

export interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  const {children} = props

  return (
    <div>
      <Head>
        <title>Article Collection</title>
        <meta name="description" content="Collection of interesting article by drexyz" />
        <link rel="icon" href="/document.png" />
      </Head>
      <main className='min-h-screen bg-white'>
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default Layout