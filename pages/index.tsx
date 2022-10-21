import type { NextPage } from 'next'
// import styles from 'styles/Home.module.scss'
import Layout from '../components/Layout'
import MainHero from '../components/MainHero'
const Home: NextPage = () => {
  return (
    <Layout>
      <MainHero />
    </Layout>
  )
}

export default Home
