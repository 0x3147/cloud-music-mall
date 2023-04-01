import React, { memo } from 'react'
import styles from './index.module.scss'
import type { FC, ReactNode } from 'react'
import Image from 'next/image'
import type { IProduct, IHotProduct } from '@/service/home'
import Link from 'next/link'

interface IProps {
  children?: ReactNode
  product?: any
  showTip?: boolean
}

const GridViewItem: FC<IProps> = memo(({ product, showTip }) => {
  const newProduct = product.products ? product.products : product

  return (
    <div className={styles['grid-view-item']}>
      <div className={styles['item-image']}>
        <Image
          className={styles.image}
          src={newProduct?.coverUrl!}
          alt="image"
          width={263}
          height={263}
        />
        {
          showTip && (
            <div className={styles.tip}>
              <div className={styles['min-price']}>￥{newProduct?.minPrice}</div>
              <div className={styles['original-cost']}>
                ￥{newProduct?.originalCost}
              </div>
            </div>
          )
        }
      </div>
      <div className={styles['item-info']}>
        {newProduct?.couponLabelDesc && (
          <span className={styles.label}>{newProduct.couponLabelDesc}</span>
        )}
        <Link href={'/'} className={styles.name}>
          {newProduct?.name}
        </Link>
      </div>
      <div className={styles['item-price']}>￥{newProduct?.minPrice}</div>
    </div>
  )
})

export default GridViewItem
GridViewItem.displayName = 'GridViewItem' // 方便后期调试
