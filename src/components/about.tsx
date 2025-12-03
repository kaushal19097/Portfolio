'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          My name is Kaushal Chaudhary, and I am a Frontend Engineer with 1+ years
          of real-world experience designing fast, usable, and SEO-friendly web
          applications. My specialty is crafting smooth-looking UIs with
          React.js, Next.js, Tailwind CSS, and TypeScript and bringing things to
          life with Framer Motion.
        </p>
        <p className="mb-4">
          I have built software for product companies, businesses, and start-ups,
          delivering maximum performance, engagement, and lead capture through
          precise engineering. Writing elegant, up-to-date code and discovering
          new tools and trends thrills me.
        </p>
        <p>
          Outside of work, I enjoy cricket and a good cup of tea, but now I am
          used to drinking coffee. I&apos;m always up for learning,
          experimenting, and growing and looking for opportunities wherein I can
          bring value toward impactful products and inventive teams.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
