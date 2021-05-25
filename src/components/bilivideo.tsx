export default function BiliPlayer({ id }: { id: string; }) {
	const src = `//player.bilibili.com/player.html?bvid=${id}&page=1`;
	return <iframe frameBorder="0" src={src} allowFullScreen={true} scrolling="no" height="375" width="500"></iframe>;
}
