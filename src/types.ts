export type QiitaItemResponse = {
    coediting: boolean;
    comments_count: number;
    created_at: string;
    id: string;
    likes_count: number;
    page_views_count: number;
    private: boolean;
    reactions_count: number;
    rendered_body: string;
    tags: { name: string; versions: [] }[];
    title: string;
    updated_at: string;
    url: string;
    user: {
      description: string;
      facebook_id: string;
      followees_count: number;
      followers_count: number;
      github_login_name: string;
      id: string;
      items_count: number;
      linkedin_id: string;
      location: string;
      name: string;
      organization: string;
      permanent_id: number;
      profile_image_url: string;
      team_only: boolean;
      twitter_screen_name: string;
      website_url: string;
    };
  };

export type ZennPost = {
    id: number;
    post_type: string;
    title: string;
    slug: string;
    comments_count: number;
    liked_count: number;
    body_letters_count: number;
    article_type: string;
    emoji: string;
    is_suspending_private: boolean;
    published_at: string;
    body_updated_at: string;
    source_repo_updated_at: string | null;
    pinned: boolean;
    path: string;
    user: {
      id: number;
      username: string;
      name: string;
      avatar_small_url: string;
    };
    publication: any;
  };

export type Article = {
  user: User;
  title: string;
  articleUrl: string;
  published_at: string;
  updated_at: string;
  classification: string;
}

export type User = {
  userName: string;
  userImgSrc: string;
  introduction: string;
  zennId: string;
  qiitaId: string;
  gitUrl: string;
  XUrl: string;
}