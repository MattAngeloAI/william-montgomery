CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  compare_at_price DECIMAL(10,2),
  images TEXT[] NOT NULL,
  category TEXT CHECK (category IN ('apparel', 'accessories', 'digital', 'other')),
  sizes TEXT[],
  in_stock BOOLEAN DEFAULT true,
  stripe_price_id TEXT,
  sort_order INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read products" ON products FOR SELECT USING (true);
CREATE POLICY "Admin full access products" ON products FOR ALL USING (auth.role() = 'authenticated');
