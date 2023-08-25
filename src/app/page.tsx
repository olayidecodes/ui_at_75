import styles from './page.module.css'
import Banner from '@/components/banner/Banner'
import BarChart from '@/components/bar_chart/BarChart'
import ProgressBar from '@/components/progress_bar/ProgressBar'
import Gallery from '@/components/gallery/Gallery'
import GuageChart from '@/components/guage_chart/GuageChart'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <section className={`${styles.section} ${styles.charts}`}>
        <h4>Progress made so far</h4>
        <BarChart />
        {/* <ProgressBar /> */}
        <GuageChart />
      </section>
      <Gallery />
    </main>
  )
}
