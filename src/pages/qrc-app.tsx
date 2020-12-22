import Head from 'next/head'
import VideoShow from 'components/VideoShow'

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Camo Digital - APP Projeto</title>
      </Head>

      <VideoShow
        title="APP - Blue Box"
        link="https://www.youtube.com/embed/zPErimviCEQ"
      />
    </div>
  )
}
