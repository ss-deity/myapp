export type Text = {
  value: string;
  label: string;
}

const text: Text[] = [
  {value: 'jack', label: 'Jack'},
  {value: 'lucy', label: 'lucy'},
  {value: 'tom', label: 'tom'}
]

// 初始化moke
export const initApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    }, 200)
  })
}

// 搜索moke
export const searchApi = (value: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let v = text.filter(i => i.value === value)
      resolve(v)
    }, 200)
  })
}
