import * as S from './styles'
import Link from 'next/link'

export type VideoShowProps = {
  link: string
  title: string
}

const VideoShow = ({
  title = ' title',
  link = 'https://www.youtube.com/embed/eGZWwNT4eeU'
}: VideoShowProps) => (
  <S.Wrapper>
    <div className="button">
      <Link href="/">
        <a>&#8592; voltar</a>
      </Link>
    </div>
    <h1 className="title">{title}</h1>
    <div className="container">
      <div className="video">
        <iframe
          width="560"
          height="315"
          src={link}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </S.Wrapper>
)

export default VideoShow
