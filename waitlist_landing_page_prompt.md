# FocusLog Waitlist Landing Page - Build Prompt

## Project Overview

Build a modern, clean waitlist landing page for **FocusLog** - a comprehensive productivity app that helps users master their focus and build better habits.

---

## About FocusLog

**FocusLog** is a cross-platform (iOS, macOS, Android) productivity application that combines:

### Core Features:
1. **Smart Task Management**
   - Task timers with real-time countdown
   - Session context tracking (notes, mood, energy levels)
   - Progress analytics with visual charts
   - Quick timer presets (Focus, Break, Deep Work, etc.)

2. **Habit Tracking**
   - Daily habit check-ins
   - Streak tracking with real-time calculations
   - Visual progress indicators
   - Habit categories and customization

3. **Achievement System**
   - Gamified progress tracking
   - Unlockable badges and milestones
   - Streak-based achievements
   - Session completion rewards


4. **Analytics & AI Insights**
   - Daily/weekly progress charts
   - Time tracking statistics
   - Productivity patterns
   - Session history
   - AI insights

### Target Audience:
- Students managing study sessions
- Professionals tracking work focus time
- Anyone building better productivity habits
- Users who want gamified progress tracking

---

## Landing Page Requirements

### Design Style:
- **Modern & Clean**: Minimalist design with plenty of white space
- **Premium Feel**: Sleek gradients, smooth animations, glassmorphism
- **Mobile-First**: Fully responsive, looks great on all devices
- **Dark Mode**: Support both light and dark themes
- **Vibrant Colors**: Use FocusLog's color scheme (primary blues/purples)

### Page Structure:

#### 1. **Hero Section**
- **Headline**: "Master Your Focus. Build Better Habits."
- **Subheadline**: "The all-in-one productivity app that helps you stay focused, track habits, and achieve your goals with gamified progress tracking."
- **CTA Button**: "Join the Waitlist" (prominent, animated)
- **Hero Image/Animation**: 
  - Show app screenshots (timer screen, habits, achievements)
  - Or animated mockup of app in use
  - Consider a carousel of key features

#### 2. **Features Section**
Showcase 4-6 key features with icons:

**Feature 1: Smart Timers**
- Icon: ⏱️
- Title: "Focus Sessions That Work"
- Description: "iOS-style timers with Live Activities, completion alerts, and session tracking"

**Feature 2: Habit Tracking**
- Icon: ✅
- Title: "Build Lasting Habits"
- Description: "Track daily habits, maintain streaks, and visualize your progress"

**Feature 3: Achievements**
- Icon: 🏆
- Title: "Gamified Progress"
- Description: "Unlock badges, hit milestones, and stay motivated with rewards"

**Feature 4: Analytics**
- Icon: 📊
- Title: "Insights That Matter"
- Description: "Beautiful charts showing your productivity patterns and growth"

**Feature 5: Cross-Platform**
- Icon: 📱
- Title: "Works Everywhere"
- Description: "Seamless experience on iPhone, Mac, and Android"

**Feature 6: Privacy-First**
- Icon: 🔒
- Title: "Your Data, Your Control"
- Description: "Local-first storage with optional cloud sync"

#### 3. **How It Works Section**
3-step process with visuals:

**Step 1**: "Set Your Goals"
- Create tasks and habits you want to track

**Step 2**: "Start Your Session"
- Use timers to stay focused and productive

**Step 3**: "Track Your Progress"
- View analytics and unlock achievements

#### 4. **Screenshots/Demo Section**
- Carousel or grid of app screenshots
- Show: Timer screen, Habits screen, Achievements, Analytics
- Add captions explaining each screen

#### 5. **Waitlist Form Section**
**Headline**: "Be the First to Experience FocusLog"
**Subheadline**: "Join our waitlist and get early access when we launch"

**Form Fields**:
- Email (required)
- Name (optional)
- Platform preference: iOS / macOS / Android (optional dropdown)
- How did you hear about us? (optional)

**CTA Button**: "Join Waitlist" (with loading state)
**Success Message**: "🎉 You're on the list! Check your email for updates."

#### 6. **Social Proof Section** (if available)
- Beta tester testimonials
- User count: "Join 500+ people on the waitlist"
- Trust badges

#### 7. **FAQ Section**
Common questions:
- When will FocusLog launch?
- Which platforms are supported?
- Is it free or paid?
- How is my data stored?
- Can I use it offline?

#### 8. **Footer**
- Social media links (Twitter, Instagram, etc.)
- Contact email
- Privacy Policy / Terms of Service links
- Copyright notice

---

## Technical Requirements

### Frontend:
- **Framework**: Next.js 14+ (App Router) or Vite + React
- **Styling**: Tailwind CSS for rapid development
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React or Heroicons
- **Forms**: React Hook Form + Zod validation

### Backend (Supabase):
- **Database**: PostgreSQL table for waitlist
- **Table Schema**:
  ```sql
  create table waitlist (
    id uuid primary key default uuid_generate_v4(),
    email text unique not null,
    name text,
    platform text,
    referral_source text,
    created_at timestamp with time zone default now(),
    metadata jsonb
  );
  ```
- **API**: Supabase REST API or Edge Functions
- **Email**: Supabase Auth for email verification (optional)

### Features to Implement:
- ✅ Email validation (no duplicates)
- ✅ Success/error toast notifications
- ✅ Loading states on form submission
- ✅ Email confirmation (optional)
- ✅ Analytics tracking (Vercel Analytics or Plausible)
- ✅ SEO optimization (meta tags, OG images)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode toggle
- ✅ Smooth scroll animations

---

## Design Guidelines

### Color Palette:
- **Primary**: #3B82F6 (Blue) - for CTAs and accents
- **Secondary**: #8B5CF6 (Purple) - for gradients
- **Success**: #10B981 (Green) - for achievements
- **Background Light**: #FFFFFF, #F9FAFB
- **Background Dark**: #0F172A, #1E293B
- **Text Light**: #1F2937
- **Text Dark**: #F1F5F9

### Typography:
- **Headings**: Inter or Outfit (bold, 600-700 weight)
- **Body**: Inter or System UI (regular, 400-500 weight)
- **Monospace**: JetBrains Mono (for code/stats)

### Spacing:
- Use consistent spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- Generous padding on sections (py-16 to py-24)
- Max content width: 1280px

### Animations:
- Fade in on scroll (Intersection Observer)
- Hover effects on buttons and cards
- Smooth transitions (200-300ms)
- Micro-interactions on form inputs

---

## Content Tone

- **Friendly & Approachable**: Not corporate or stiff
- **Motivational**: Inspire users to improve productivity
- **Clear & Concise**: No jargon, easy to understand
- **Action-Oriented**: Use active verbs (Master, Build, Track, Achieve)

---

## SEO & Meta Tags

```html
<title>FocusLog - Master Your Focus & Build Better Habits</title>
<meta name="description" content="The all-in-one productivity app with smart timers, habit tracking, and gamified achievements. Join the waitlist for early access." />
<meta property="og:title" content="FocusLog - Master Your Focus" />
<meta property="og:description" content="Smart timers, habit tracking, and achievements in one beautiful app" />
<meta property="og:image" content="/og-image.png" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## Deliverables

1. **Landing Page**: Fully functional, responsive website
2. **Supabase Integration**: Working waitlist form with database storage
3. **Email Validation**: Prevent duplicate signups
4. **Success States**: Toast notifications and confirmation messages
5. **Analytics**: Track page views and conversions
6. **Dark Mode**: Toggle between light and dark themes
7. **Performance**: Lighthouse score 90+ on all metrics

---

## Example Tech Stack

```bash
# Frontend
npx create-next-app@latest focuslog-waitlist --typescript --tailwind --app

# Dependencies
npm install @supabase/supabase-js framer-motion react-hook-form zod lucide-react sonner

# Supabase Setup
# 1. Create project at supabase.com
# 2. Create waitlist table
# 3. Add environment variables:
#    NEXT_PUBLIC_SUPABASE_URL=your-url
#    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
```

---

## Success Metrics

- **Conversion Rate**: 20%+ of visitors join waitlist
- **Page Load**: < 2 seconds
- **Mobile Experience**: Perfect on all devices
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Ranks for "productivity app", "focus timer", "habit tracker"

---

## Additional Notes

- Use real app screenshots if available
- Add subtle animations (not distracting)
- Include social proof (beta tester count)
- Make CTA buttons prominent and clickable
- Test form validation thoroughly
- Set up email notifications for new signups (Supabase triggers)

---

**Build a landing page that makes people EXCITED to try FocusLog!** 🚀
