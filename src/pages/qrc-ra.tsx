import Head from 'next/head'
import VideoShow from 'components/VideoShow'

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Camo Digital - Realidade Aumentada Projeto</title>
      </Head>

      <VideoShow
        title="Realidade Aumentada - Owl"
        link="https://www.youtube.com/embed/7fkngbENLKY"
      />
    </div>
  )
}
