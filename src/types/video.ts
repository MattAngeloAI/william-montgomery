export interface Video {
  id: string;
  title: string;
  youtube_id: string;
  description: string | null;
  thumbnail_url: string | null;
  category: "special" | "clip" | "podcast" | "kill_tony" | "interview";
  duration: string | null;
  publish_date: string | null;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
}
