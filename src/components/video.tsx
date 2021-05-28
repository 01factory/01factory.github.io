import ReactPlayer from 'react-player/lazy'

export default function Player({ src }: { src: string; }) {
	return <ReactPlayer controls url={src} />
}
