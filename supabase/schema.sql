-- Create the waitlist table
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  platform text,
  referral_source text,
  created_at timestamp with time zone default now(),
  metadata jsonb
);

-- Enable Row Level Security (RLS)
alter table waitlist enable row level security;

-- Create a policy that allows inserting data for anyone (since it's a public waitlist)
create policy "Enable insert for everyone" on waitlist
  for insert with check (true);

-- Create a policy that allows reading only for authenticated users (admins)
-- You'll need to create a policy for your admin user or service role if you want to view data via API
-- For now, we'll keep it restricted so public users can't read the list
