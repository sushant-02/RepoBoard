export interface Repos {
  id: number;
  name: string;
  description: string;
  html_url: string;
  languages_url: string;
}

export interface UserInfo {
  avatar_url: string;
  name: string;
  html_url: string;
  bio?: string;
  followers: number;
  following: number;
  location?: string;
  twitter_username?: string;
}
