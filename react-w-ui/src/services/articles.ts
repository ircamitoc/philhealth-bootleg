export interface Article {
	title: string;
	body: string;
	image: string;
}

export const getArticles = async () => {
	const articles = await fetch("http://localhost:5000/articles/get").then(async (res) => {
		const data: Array<Article> = await res.json();
		return data;
	});
	return articles;
}