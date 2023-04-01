import Head from 'next/head'
import wrapper from '@/store'
import classNames from 'classnames'
import { GetServerSideProps } from 'next'
import { fetchSearchSuggest } from '@/store/module/home'
import { getAllProduct, getHomeInfo, getHotProduct_v2, IProduct } from '@/service/home'
import styles from './index.module.scss'
import TopSwiper from '@/components/top-swiper'
import TabCategory from '@/components/tab-category'
import Recommend from '@/components/recommend'
import SectionTitle from '@/components/section-title'
import type { FC } from 'react'
import type {
  IBanner,
  ICategory,
  IRecommends,
  IHotProduct
} from '@/service/home'
import GridView from '@/components/grid-view'
import DigitalPanel from '@/components/digital-panel'

export interface IProps {
  banners?: IBanner[]
  recommends?: IRecommends[]
  categorys?: ICategory[]
  digitalData?: any[]
  hotProducts?: IHotProduct[]
  allProducts?: IProduct[]
}

const Home: FC<IProps> = (
  { banners,
    categorys,
    recommends,
    hotProducts,
    digitalData,
    allProducts
  }
) => {
  return (
    <>
      <Head>
        <title>云音乐商城</title>
      </Head>
      <div className={styles.home}>
        <TopSwiper banners={banners} />
        <TabCategory categorys={categorys} />
        <Recommend recommends={recommends} />
        {/* 版心内容 */}
        <div className={classNames('wrapper', styles.content)}>
          <SectionTitle title="编辑推荐" />
          <GridView products={hotProducts} />
          <DigitalPanel itemData={digitalData} />
          <SectionTitle title="热门商品" />
          <GridView products={allProducts} />
        </div>
      </div>
    </>
  )
}

export default Home

// 每次访问首页都会执行
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => {
    return async (context) => {
      // 触发一个异步action发起网络请求，拿到结果存储到redux中
      // store.dispatch()
      await store.dispatch(fetchSearchSuggest())
      const res = await getHomeInfo()
      const resHot = await getHotProduct_v2()
      // 所以热门商品
      const resAll = await getAllProduct()

      return {
        props: {
          banners: res.data.banners || [],
          categorys: res.data.categorys || [],
          recommends: res.data.recommends || [],
          digitalData: res.data.digitalData || [],

          hotProducts: resHot.data.hotProduct || [],
          allProducts: resAll.data.allProduct|| []
        }
      }
    }
  })
