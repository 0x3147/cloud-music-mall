import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
import { ISearchSuggest } from '@/service/home'
import { useRouter } from 'next/router'

interface IProps {
  children?: ReactNode
  searchData: ISearchSuggest
}

const Search: FC<IProps> = memo(({ searchData }) => {
  const [inputFocus, setInputFocus] = useState<boolean>(false)
  const [placeholder, setPlaceholder] = useState('蓝牙耳机')

  const router = useRouter()

  const handleInputFocus = (isFocus: boolean) => {
    setInputFocus(isFocus)
  }

  const handleKeyDown = async (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      const inputTarget = event.target as HTMLInputElement
      await goToSearchPage(inputTarget.value)
      setInputFocus(false)
    }
  }

  const handleMouseDown = async (name: string) => {
    setPlaceholder(name)
    await goToSearchPage(name)
  }

  const goToSearchPage = async (name: string) => {
    await router.push({
      pathname: '/search',
      query: {
        q: name
      }
    })
  }

  return (
    <div className={styles.search}>
      {/* 搜索框 */}
      <div className={styles['search-bg']}>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          onFocus={() => handleInputFocus(true)}
          onBlur={() => handleInputFocus(false)}
          onKeyDown={(e) => handleKeyDown(e as any)}
        />
      </div>

      {/* 下拉框 */}
      <div
        className={classNames(
          styles['search-panel'],
          inputFocus ? styles.show : styles.hide
        )}
      >
        <div className={styles.shadow}></div>
        <h2>热门搜索</h2>
        <ul>
          {searchData?.configKey &&
            searchData?.configKey.map((item, index) => (
              <li
                key={item[index + 1]}
                onMouseDown={(e) => handleMouseDown(item[index + 1])}
              >
                {item[index + 1]}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
})

export default Search
Search.displayName = 'Search' // 方便后期调试
