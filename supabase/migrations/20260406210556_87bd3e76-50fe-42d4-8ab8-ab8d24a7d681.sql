
CREATE TABLE public.chatbot_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  phone TEXT,
  email TEXT,
  issue TEXT,
  urgency TEXT,
  preferred_date TEXT,
  preferred_time TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  conversation JSONB DEFAULT '[]'::jsonb,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.chatbot_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead" ON public.chatbot_leads
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_chatbot_leads_updated_at
  BEFORE UPDATE ON public.chatbot_leads
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
