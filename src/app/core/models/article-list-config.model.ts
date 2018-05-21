export interface ArticleListConfig {
  type: string;

  filters: {
    author?: string,
    favorited?: string,
    limit?: number,
    offset?: number
  };
}
