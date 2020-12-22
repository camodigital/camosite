import Head from 'next/head'
import VideoShow from 'components/VideoShow'

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Camo Digital - Web Projeto</title>
      </Head>

      <VideoShow
        title="Web - Expedition Receptivo"
        link="https://www.youtube.com/embed/0-ZREkWmJig"
      />
    </div>
  )
}
