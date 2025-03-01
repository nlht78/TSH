import HandsomeError from '~/components/HandsomeError';

import { getImages } from '~/services/image.server';

import { getPosts } from '~/services/page.server';
import TestimonialSlider from './TestimonialSlider';
import NumerologyChart from './NumerologyChart';
import NumerologyFAQ from './NumerologyFAQ';
import BlogPosts from './BlogPosts';
import ExpertIntro from './ExpertIntro';
import CourseSlider from './CourseSlider';
import ReportGrid from './ReportGrid';
import HeroSection from './HeroSection';

export const loader = async () => {
  const sliders = await getImages();
  const posts = await getPosts();
  console.log('posts', posts);
  return { sliders, posts };
};

export default function Index() {
  return (
    <div className='flex flex-col min-h-screen'>
      <HeroSection />
      <TestimonialSlider />

      {/* Chart Section với background trắng */}
      <section className='relative bg-white py-8 md:py-16'>
        <NumerologyChart />
      </section>
      <section className='relative px-4 md:px-0'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent' />
        <div className='relative z-10'>
          <NumerologyFAQ />
        </div>
      </section>
      <section className='relative px-4 md:px-0'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/20 to-transparent' />
        <div className='relative z-10'>
          <BlogPosts />
        </div>
      </section>
      <section className='relative px-4 md:px-0'>
        <ExpertIntro />
      </section>
      <section className='relative px-4 md:px-0'>
        <CourseSlider />
      </section>
      <section className='relative px-4 md:px-0'>
        <ReportGrid />
      </section>
    </div>
  );
}

export const ErrorBoundary = () => <HandsomeError />;
