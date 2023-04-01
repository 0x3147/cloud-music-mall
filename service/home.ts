import hyRequest from './index'
import type { IResultData } from './index'

export interface ISearchSuggest {
  id: string
  defaultKey: string
  configKey: any[]
}

export interface IBanner {
  id?: string
  picStr?: string
  backendPicStr?: string
}

export interface ICategory {
  cid?: number
  picStr?: string
  title?: string
  tanIndex?: number
  targetUrl?: string
  count?: number
  desc?: string
  type?: number
}

export interface IRecommends {
  id: number
  picStr?: string
  title?: string
}

export interface IHomeInfo {
  banners?: IBanner[]
  recommends?: IRecommends[]
  categorys?: ICategory[]
  digitalData?: any[]
}

export interface IHotProductV2 {
  count?: number
  hasMore?: boolean
  hotProduct?: IHotProduct[]
}

export interface IHotProduct {
  id: number
  products?: IProduct
}

export interface IProduct {
  id: number
  name?: string
  type? : number
  minPrice?: number
  maxPrice?: number
  originalCost?: number
  couponLabelDesc?: string
  coverUrl?: string
}

export interface IAllProduct {
  count?: number
  allProduct?: IProduct[]
}

// 获取搜索建议
export const getSearchSuggest = () => {
  return hyRequest.get<IResultData<ISearchSuggest>>('/searchsuggest/get')
}

// 首页数据
export const getHomeInfo = () => {
  return hyRequest.get<IResultData<IHomeInfo>>('/home/info')
}

// 推荐产品
export const getHotProduct_v2 = () => {
  return hyRequest.get<IResultData<IHotProductV2>>('/hotproduct_v2/gets')
}

export const getAllProduct = () => {
  return hyRequest.get<IResultData<IAllProduct>>('/allProduct/gets')
}
