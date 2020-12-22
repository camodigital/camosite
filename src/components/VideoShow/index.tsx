import * as S from './styles'

export type VideoShowProps = {
  link: string
}

const VideoShow = ({
  link = '"https://www.youtube.com/embed/eGZWwNT4eeU"'
}: VideoShowProps) => (
  <S.Wrapper>
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
  </S.Wrapper>
)

export default VideoShow
