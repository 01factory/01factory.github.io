
export default function Download({ href, filename }: { href: string; filename: string; }) {
	return <a href={href} download={filename} >{`点击下载${filename}`}</a>
}
