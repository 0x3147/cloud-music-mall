import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
import { Row, Col } from 'antd'
import type { ICategory } from '@/service/home'
import Image from 'next/image'

interface IProps {
  children?: ReactNode
  categorys?: ICategory[]
}

const TabCategory: FC<IProps> = memo(({ categorys }) => {
  return (
    <div className={styles['tab-category']}>
      <div className={classNames('wrapper', styles.content)}>
        <Row>
          {categorys?.map((category, index) => (
            <Col span={6} key={category.cid}>
              <div className={styles['category-item']}>
                <Image
                  src={category.picStr!}
                  alt="category"
                  width={48}
                  height={48}
                  className={styles.image}
                />

                <div className={styles.right}>
                  <div className={styles.title}>{category.title}</div>
                  {/* type === 1时，显示描述 */}
                  {category.type === 1 && (
                    <div className={styles['sub-title']}>
                      <span className={styles.count}>{category.count}</span>
                      <span className={styles.desc}>{category.desc}</span>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
})

export default TabCategory
TabCategory.displayName = 'TabCategory' // 方便后期调试
