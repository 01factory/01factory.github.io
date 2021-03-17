import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Player({ src, autoPlay }: { src: string; autoPlay?: boolean; }) {
	return <AudioPlayer
		autoPlay={autoPlay}
		src={src}
	/>
}
