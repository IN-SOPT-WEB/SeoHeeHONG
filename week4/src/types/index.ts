export type UserProfileStatus = 'null' | 'pending' | 'resolved' | 'rejected';

export interface UserProfile {
  data: UserProfileData | null;
  status: UserProfileStatus;
}
export interface UserProfileData {
  avatar_url: string;
  name: string;
  login: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
}
