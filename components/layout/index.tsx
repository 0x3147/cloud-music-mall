import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Footer from '@/components/footer'
import NavBar from '@/components/navbar'

interface IProps {
  children?: ReactNode
}

const Layout: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <div className="layout">
      {/* NavBar */}
      <NavBar />

      {/* 页面内容 */}
      {children}

      {/* footer */}
      <Footer />
    </div>
  )
})

export default Layout
Layout.displayName = 'Layout'
