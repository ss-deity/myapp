import { Select } from 'antd'
import React, { useState, useCallback } from 'react';
import { initApi,  searchApi, Text } from './http'
import { useAsyncEffect, useUpdateEffect } from 'ahooks';

export default function Index() {
  const [initData, setInitData] = useState<Text[]>([])
  const [changeValue, setChangeValue] = useState<string>('')
  const [searchValue, setSearchValue] = useState<string>('')

  useAsyncEffect(async () => {
    let res: Text[] | any = await initApi()
    if (res?.length) setInitData(res)
  }, [])

  const getSearchValue = async () => {
    let res = await searchApi(changeValue)
    setSearchValue(res ? JSON.stringify(res) : '')
  }
  useUpdateEffect(() => {
    getSearchValue()
  }, [changeValue])
  return (
    <div>
      <Select
        showSearch
        placeholder="Select a person"
        optionFilterProp="label"
        options={initData}
        onChange={(v: string) => setChangeValue(v)}
      />
      <div>{searchValue}</div>
    </div>
  )
}
