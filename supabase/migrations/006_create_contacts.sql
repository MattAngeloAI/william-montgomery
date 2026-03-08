CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'general' CHECK (type IN ('general', 'booking', 'press', 'other')),
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can submit" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin read contacts" ON contact_submissions FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Admin update contacts" ON contact_submissions FOR UPDATE USING (auth.role() = 'authenticated');
