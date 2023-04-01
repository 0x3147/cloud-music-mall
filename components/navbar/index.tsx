import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import Search from '../search'
import { shallowEqual, useSelector } from 'react-redux'
import { IAppRootState } from '@/store'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = memo(() => {
  // 从redux读取数据
  const { navbar, counter } = useSelector((state: IAppRootState) => {
    return {
      navbar: state.home.navbar,
      counter: state.home.counter
    }
  }, shallowEqual)

  return (
    <div className={styles.navbar}>
      <div className={classNames('wrapper', styles.content)}>
        <div className={styles['content-left']}>
          <Link href="/" className={styles.logo} />
          <h1 className={styles.title}>云音乐商城-让生活更有趣</h1>
        </div>
        <div className={styles['content-right']}>
          <Search searchData={navbar} />
          <div className={styles['right-cart']}>
            <Link href="/" className={styles.cart}>
              <span className={styles.count}>{counter}</span>
            </Link>
          </div>
          <div className={styles['right-login']}>登录</div>
        </div>
      </div>
    </div>
  )
})

export default NavBar
NavBar.displayName = 'NavBar' // 方便后期调试
