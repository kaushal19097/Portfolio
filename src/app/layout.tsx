import '@/styles/globals.css';
import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { fonts } from '@/lib/fonts';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(', '),
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Kaushal Chaudhary Portfolio',
    images: [
      {
        url: `${siteConfig.url}/images/metaimg.png`,
        width: 1200,
        height: 630,
        alt: 'Kaushal Chaudhary - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@@Kaushalchaudhary',
    images: [`${siteConfig.url}/images/metaimg.png`],
  },
  authors: [{ name: 'Kaushal Chaudhary', url: 'https://github.com/' }],
  creator: 'Kaushal Chaudhary',
  publisher: 'Kaushal Chaudhary',
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: siteConfig.url,
      'en-US': siteConfig.url,
      'en-GB': siteConfig.url,
      'en-IE': siteConfig.url,
      'en-DE': siteConfig.url,
      'en-FR': siteConfig.url,
      'en-ES': siteConfig.url,
      'en-IT': siteConfig.url,
      'en-NL': siteConfig.url,
      'en-BE': siteConfig.url,
      'en-AT': siteConfig.url,
      'en-CH': siteConfig.url,
      'en-SE': siteConfig.url,
      'en-NO': siteConfig.url,
      'en-DK': siteConfig.url,
      'en-PL': siteConfig.url,
      'en-PT': siteConfig.url,
      'x-default': siteConfig.url,
    },
  },
  other: {
    author: 'Kaushal Chaudhary',
    email: 'ckaushal56@gmail.com',
    copyright: 'Kaushal Chaudhary 2023',
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kaushal Chaudhary',
    jobTitle: 'Frontend Engineer',
    description:
      'Hi there! My name is Kaushal Chaudhary and I am a programmer with a passion for learning and exploring new technologies. With a strong background in full-stack development, I have a well-rounded skill set and am always looking to expand my knowledge and take on new challenges. As a dedicated and driven individual, I am constantly seeking out opportunities to grow and improve as a programmer.',
    url: siteConfig.url,
    image: `${siteConfig.url}/images/profile.jpg`,
    email: 'ckaushal56@gmail.com',
    sameAs: [
      'https://github.com/kaushal19097',
      'https://www.linkedin.com/in/kaushal-chaudhary-a633721a6/',
      'https://www.instagram.com/imkaushalchaudhary',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
      addressRegion: 'Europe',
    },
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'Impact Academies',
      },
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Impact Academies',
        jobTitle: 'IT Tutor',
      },
      {
        '@type': 'Organization',
        name: 'Dragon Sino Group',
        jobTitle: 'Full Stack Developer',
      },
    ],
    knowsAbout: [
      'React.js',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'MERN Stack',
      'MEVN Stack',
      'Tailwind CSS',
      'MongoDB',
      'Express.js',
      'Vue.js',
      'Web Development',
      'Frontend Development',
      'Full Stack Development',
      'React-Native Development',
      'Freelance Development',
      'Online Interview Assessment System',
      "Dr. Manisha's Yoga Institute",
      'Anandlok Ayurveda',
    ],
    offers: {
      '@type': 'Service',
      name: 'Web Development Services',
      description:
        'Professional web development services including React.js, Next.js, Node.js, React-Native, and full-stack development. Best Freelancer Near me, Affordable Freelancer Near me, Hourly based paid freelancer near me.',
      provider: {
        '@type': 'Person',
        name: 'Kaushal Chaudhary',
      },
      serviceType: 'Web Development',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full Stack Web Developer',
      description:
        'Frontend Engineer & Full Stack Developer specializing in React.js, Next.js, Node.js, and MERN/MEVN stack',
      occupationLocation: [
        {
          '@type': 'Country',
          name: 'United Kingdom',
        },
        {
          '@type': 'Continent',
          name: 'Europe',
        },
        {
          '@type': 'Place',
          name: 'Worldwide',
        },
      ],
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="en" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-US" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-GB" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-IE" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-DE" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-FR" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-ES" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-IT" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-NL" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-BE" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-AT" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-CH" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-SE" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-NO" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-DK" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-PL" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-PT" href={siteConfig.url} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />

     
        <link rel="preload" href="/images/profile.jpg" as="image" />
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
      </head>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <a
          href="#main-content"
          className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:px-3 focus:py-2"
        >
          Skip to content
        </a>

        <ThemeProvider attribute="class">
          <ActiveSectionProvider>
            {children}
            <Toaster position="bottom-left" />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
