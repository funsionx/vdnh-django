import { NextPage } from 'next'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.scss'

const Home:NextPage = () => { 
  

  return (
    <div className={styles.container}>      
      <Hero />
    </div>
  )
}

export default Home