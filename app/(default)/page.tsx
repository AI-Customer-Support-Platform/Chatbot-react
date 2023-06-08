export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import MainInfo from '@/components/maininfo'
import SecInfo from '@/components/secinfo'


export default function Home() {
  return (
    <>
      <MainInfo />
      <SecInfo />
    </>
  )
}
