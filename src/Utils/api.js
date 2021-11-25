import axios from "axios";

const newsApi = axios.create({
	baseURL: "https://dominic-news-project.herokuapp.com/api",
});

export const getArticles = () => {
	return newsApi.get("/articles").then((res) => {
		return res.data.articles;
	});
};

export const getTopics = () => {
	return newsApi.get("/topics").then((res) => {
		return res.data.topics;
	});
};

export const getArticle = (article_id) => {
	return newsApi.get(`/articles/${article_id}`).then((res) => {
		return res.data.article;
	});
};

export const getArticleComments = (article_id) => {
	return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
		return res.data.comments;
	});
};

export const postComment = (article_id, newComment) => {
	return newsApi
		.post(`/articles/${article_id}/comments`, newComment)
		.then((res) => {
			return res.data.comment;
		});
};

export const deleteComment = (comment_id) => {
	return newsApi.delete(`/comments/${comment_id}`);
};

export const patchArticle = (article_id, inc_object) => {
	return newsApi.patch(`/articles/${article_id}`, inc_object).then((res) => {
		return res.data.article;
	});
};
