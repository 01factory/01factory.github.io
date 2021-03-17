export default function QqPlayer({ vid }: { vid: string; }) {
	const src = `https://v.qq.com/txp/iframe/player.html?vid=${vid}`;
	return <iframe frameBorder="0" src={src} allowFullScreen={true} height="375" width="500"></iframe>
		;
}
