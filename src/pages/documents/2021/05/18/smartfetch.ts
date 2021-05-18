
export default async function smartfetch<R, M = unknown>(service: string, method: 'get' | 'put' | 'post' | 'delete', msg?: M) {
	return new Promise<Record<string, string>>((res) => {
		setTimeout(() => {
			res({ foo: 'bar' });
		}, 3000);
	});
}
