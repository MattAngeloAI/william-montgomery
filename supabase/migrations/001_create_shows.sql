CREATE TABLE shows (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  venue TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT,
  country TEXT DEFAULT 'US',
  date TIMESTAMPTZ NOT NULL,
  doors_time TIME,
  show_time TIME,
  ticket_url TEXT,
  ticket_price DECIMAL(10,2),
  status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'sold_out', 'cancelled', 'past')),
  image_url TEXT,
  notes TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_shows_date ON shows(date);
CREATE INDEX idx_shows_status ON shows(status);

ALTER TABLE shows ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read shows" ON shows FOR SELECT USING (true);
CREATE POLICY "Admin full access shows" ON shows FOR ALL USING (auth.role() = 'authenticated');
