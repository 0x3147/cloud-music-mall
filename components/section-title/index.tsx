import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './index.module.scss'

interface IProps {
  children?: ReactNode
  title?: string
}

const SectionTitle: FC<IProps> = memo(({ title }) => {
  return (
    <div className={styles['section-title']}>
      {title}
    </div>
  )
})

export default SectionTitle
SectionTitle.displayName = 'SectionTitle' // 方便后期调试
