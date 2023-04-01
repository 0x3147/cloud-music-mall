import React, { memo } from 'react'
import { Row, Col } from 'antd'
import type { FC, ReactNode } from 'react'
import type { IRecommends } from '@/service/home'
import classNames from 'classnames'
import styles from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'

interface IProps {
  children?: ReactNode
  recommends?: IRecommends[]
}

const Recommend: FC<IProps> = memo(({ recommends }) => {
  return (
    <div className={styles.recommend}>
      <div className={classNames('wrapper', styles.content)}>
        <Row>
          {recommends?.map((recommend, index) => (
            <Col key={recommend.id} span={12}>
              <Link href={`/detail?id=${recommend.id}`} className={styles['recommend-item']}>
                <Image
                  className={styles.image}
                  src={recommend.picStr!}
                  alt="recommend"
                  width={542}
                  height={300}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
})

export default Recommend
Recommend.displayName = 'Recommend' // 方便后期调试
