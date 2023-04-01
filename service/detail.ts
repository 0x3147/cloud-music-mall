import hyRequest from './index'
import type { IResultData } from './index'
import type { IProduct } from '@/service/home'

export interface IDetailPage {
  id?: number
  webPic?: string
  products?: IProduct[]
}

export const getDetailPageInfo = (id: string) => {
  return hyRequest.get<IResultData<IDetailPage>>(
    '/special/getdetail?specialTopicId=' + id
  )
}
