import Head from 'next/head'
import VideoShow from 'components/VideoShow'

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Camo Digital - MKT Projeto</title>
      </Head>

      <VideoShow
        title="MKT - Respeito"
        link="https://www.youtube.com/embed/CAMJhMZQ3Bc"
      />
    </div>
  )
}
