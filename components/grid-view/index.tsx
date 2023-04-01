import React, { memo } from 'react'
import styles from './index.module.scss'
import { Row, Col } from 'antd'
import type { FC, ReactNode } from 'react'
import type { IHotProduct, IProduct } from '@/service/home'
import GridViewItem from '@/components/grid-view-item'

interface IProps {
  children?: ReactNode
  products?: IHotProduct[] | IProduct[]
}

const GridView: FC<IProps> = memo(({ products }) => {
  return (
    <div className={styles['grid-view']}>
      <Row>
        {products?.map((product, index) => (
          <Col key={product.id} span={6}>
            <div className={styles['view-item']}>
              <GridViewItem product={product} showTip={index === 0} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
})

export default GridView
GridView.displayName = 'GridView' // 方便后期调试
