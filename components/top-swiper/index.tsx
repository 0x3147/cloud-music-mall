import React, { memo, useState, useRef, ElementRef } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import Image from 'next/image'
import styles from './index.module.scss'
import classNames from 'classnames'
import type { IBanner, ICategory, IRecommends } from '@/service/home'

interface IProps {
  children?: ReactNode
  banners?: IBanner[]
}

const TopSwiper: FC<IProps> = memo(({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const bannersRef = useRef<ElementRef<typeof Carousel>>(null)

  const onChange = (index: number) => {
    setCurrentIndex(index)
  }

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
  }

  const handlePrevPage = () => {
    bannersRef.current?.prev()
  }

  const handleNextPage = () => {
    bannersRef.current?.next()

  }

  return (
    <div className={styles['top-swiper']}>
      <div className={classNames('wrapper', styles.content)}>
        <Carousel
          ref={bannersRef}
          className={styles.carousel}
          afterChange={onChange}
          autoplay
          autoplaySpeed={3000}
          fade
          dots={false}
        >
          {banners?.map((banner, index) => (
            <div key={banner.id} className={styles['swiper-item']}>
              <div
                className={styles['swiper-bg']}
                style={{ backgroundImage: `url(${banner.backendPicStr})` }}
              ></div>
              <Image
                className={styles.image}
                src={banner.picStr!}
                alt="banner"
                width={1100}
                height={480}
              />
            </div>
          ))}
        </Carousel>

        {/* 指示器 */}
        <ul className={styles.dots}>
          {banners?.map((banner, index) => (
            <li
              key={banner.id}
              className={classNames(
                styles.dot,
                currentIndex === index ? styles.active : ''
              )}
            ></li>
          ))}
        </ul>
      </div>

      <button className={styles.prev} onClick={(e) => handlePrevPage()}>
        <span></span>
      </button>

      <button className={styles.next} onClick={(e) => handleNextPage()}>
        <span></span>
      </button>
    </div>
  )
})

export default TopSwiper
TopSwiper.displayName = 'TopSwiper' // 方便后期调试
