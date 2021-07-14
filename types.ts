export interface Frontmatter {
    date: string;
    title: string;
    category: string;
    tags: string[];
    banner?: string;
}

export interface Post {
    id: number;
    excerpt: string;
    html: string;
    frontmatter: Frontmatter;
    fields: {
        slug: string;
    };
    timeToRead: number;
}

export interface PostGraphqlResponse {
    allMarkdownRemark: {
        edges: Array<{ node: Post }>
        totalCount: number;
    }
}
