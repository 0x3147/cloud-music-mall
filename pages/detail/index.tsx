import React, { memo } from 'react'
import styles from './index.module.scss'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { GetServerSideProps } from 'next'
import wrapper from '@/store'
import { fetchSearchSuggest } from '@/store/module/home'
import { getDetailPageInfo, IDetailPage } from '@/service/detail'
import Link from 'next/link'
import Image from 'next/image'
import GridView from '@/components/grid-view'

interface IProps {
  children?: ReactNode
  detailData?: IDetailPage
}

const Detail: FC<IProps> = memo(({ detailData }) => {
  return (
    <div className={styles.detail}>
      <div className={classNames('wrapper', styles.content)}>
        <div className={styles.banner}>
          <Link href={'/'}>
            <Image
              className={styles.image}
              src={detailData?.webPic!}
              alt="air"
              fill
            />
          </Link>
        </div>
        <GridView products={detailData?.products} />
      </div>
    </div>
  )
})

export default Detail
Detail.displayName = 'Detail' // 方便后期调试

// getServerSideProps在服务器端执行
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => {
    return async (context) => {
      // 通过context.query拿到路由参数
      const { id } = context.query
      // 触发一个异步action发起网络请求，拿到结果存储到redux中
      // store.dispatch()
      await store.dispatch(fetchSearchSuggest())
      const res = await getDetailPageInfo(id as string)

      return {
        props: {
          detailData: res.data
        }
      }
    }
  })
