export interface Song {
  id: number;
  name: string;
  artist: string;
  accent: string;
  cover: string;
  url: string;
  status?: string;
  top_track?: boolean;
  sort?: null | any;
  user_created?: string;
  date_created?: string;
  user_updated?: string;
  date_updated?: string;
  duration?: number;
}
