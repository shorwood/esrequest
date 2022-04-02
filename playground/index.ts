import { fetchModule } from '../dist'

(async() => {
  const isOdd = await fetchModule('https://unpkg.com/is-odd@3.0.1/index.js')
  console.log(isOdd)
})()
