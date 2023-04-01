import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import wrapper from '@/store'
import { fetchSearchSuggest } from '@/store/module/home'

interface IProps {
  children?: ReactNode
}

const Search: FC<IProps> = memo(() => {
  const router = useRouter()
  const { q } = router.query

  return (
    <div className="search">
      <div>Search</div>
    </div>
  )
})

export default Search
Search.displayName = 'Search' // 方便后期调试

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => {
    return async (context) => {
      // 通过context.query拿到路由参数
      const { q } = context.query
      // 触发一个异步action发起网络请求，拿到结果存储到redux中
      // store.dispatch()
      await store.dispatch(fetchSearchSuggest())

      return {
        props: {}
      }
    }
  })
