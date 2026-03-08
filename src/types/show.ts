export interface Show {
  id: string;
  title: string;
  venue: string;
  city: string;
  state: string | null;
  country: string;
  date: string;
  doors_time: string | null;
  show_time: string | null;
  ticket_url: string | null;
  ticket_price: number | null;
  status: "upcoming" | "sold_out" | "cancelled" | "past";
  image_url: string | null;
  notes: string | null;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}
