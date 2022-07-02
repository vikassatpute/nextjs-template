import Dropdown from 'components/Dropdown'
import Layout from 'components/Layouts/Layout'

export default function Home() {
  return (
    <>
      <Dropdown />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
