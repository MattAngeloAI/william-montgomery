CREATE TABLE videos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  youtube_id TEXT NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  category TEXT CHECK (category IN ('special', 'clip', 'podcast', 'kill_tony', 'interview')),
  duration TEXT,
  publish_date DATE,
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read videos" ON videos FOR SELECT USING (true);
CREATE POLICY "Admin full access videos" ON videos FOR ALL USING (auth.role() = 'authenticated');
