import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@remix-run/react';
interface CourseItem {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const CourseSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const courses: CourseItem[] = [
    {
      id: 1,
      image: '/assets/courseslider/chuong-trinh-dao-tao-mien-phi.jpg',
      title: 'Ý nghĩa các con số thần số học & Ứng dụng vào đời sống',
      description:
        'Những con số xuất hiện trong cuộc sống của bạn không phải là một sự trùng hợp ngẫu nhiên. Với những ai đang trên hành trình thực tính tâm linh, những con số này đều mang một ý nghĩa vô cùng đặc biệt. Hãy cùng thầy Louis Nguyễn giải mã bí ẩn của chúng, cũng như cách những con số này ảnh hưởng đến cuộc chúng ta.',
      link: '/khoa-hoc/y-nghia-cac-con-so',
    },
    {
      id: 2,
      image: '/assets/courseslider/dinh-huong-nghe-nghiep.jpg',
      title: '3 bí mật giúp bạn định hướng nghề nghiệp, phát triển sự nghiệp',
      description:
        'Chương trình do nhà nghiên cứu ứng dụng thần số học, chuyên gia tâm lý học hành vi thầy Louis Nguyễn đặc biệt thiết kế dành riêng cho những ai đang gặp vướng mắc, bế tắc trong công việc, chưa thể khai phá toàn lực bản thân, phát triển tới đa điểm mạnh của mình để đạt được sự nghiệp thành công như mong muốn.',
      link: '/khoa-hoc/dinh-huong-nghe-nghiep',
    },
    {
      id: 3,
      image: '/assets/courseslider/khoa-hoc-than-so-hoc-chuyen-sau.jpg',
      title: 'Khóa học chuyên sâu thần số học',
      description:
        'Chương trình do nhà nghiên cứu ứng dụng thần số học, chuyên gia tâm lý học hành vi thầy Louis Nguyễn đặc biệt thiết kế dành riêng cho những ai đang gặp vướng mắc, bế tắc trong công việc, chưa thể khai phá toàn lực bản thân, phát triển tới đa điểm mạnh của mình để đạt được sự nghiệp thành công như mong muốn.',
      link: '/khoa-hoc/chuyen-sau',
    },

    // Thêm các khóa học khác nếu cần
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section className='relative py-12 md:py-20'>
      {/* Background with gradient */}
      <div
        className='absolute inset-0 w-full h-full'
        style={{
          backgroundImage: "url('/assets/courseslider/b.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className='absolute inset-0 bg-gradient-to-b from-purple-900/30 via-pink-900/20 to-transparent' />

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4'>
        {/* Title */}
        <div className='text-center mb-8 md:mb-16'>
          <h2 className='text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4'>
            CHƯƠNG TRÌNH ĐÀO TẠO THẦN SỐ HỌC
          </h2>
          <h3 className='text-lg md:text-2xl font-semibold text-white'>
            DO THẦY LOUIS NGUYỄN TRỰC TIẾP ĐỨNG LỚP
          </h3>
        </div>

        {/* Slider */}
        <div className='relative px-4 md:px-12'>
          {/* Slides Container */}
          <div className='flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-8'>
            {/* Current Slide */}
            <motion.div
              key={`slide-${currentIndex}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className='w-full md:w-1/2 bg-white rounded-lg shadow-xl overflow-hidden'
            >
              <Link
                to={courses[currentIndex].link}
                className='group block relative'
              >
                <img
                  src={courses[currentIndex].image}
                  alt={courses[currentIndex].title}
                  className='w-full h-48 md:h-64 object-cover'
                />
                <div className='p-4 md:p-6'>
                  <h4 className='text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-4 line-clamp-2'>
                    {courses[currentIndex].title}
                  </h4>
                  <p className='text-sm md:text-base text-gray-600 line-clamp-3 md:line-clamp-4'>
                    {courses[currentIndex].description}
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Next Slide - Ẩn trên mobile */}
            <motion.div
              key={`slide-${(currentIndex + 1) % courses.length}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className='hidden md:block w-1/2 bg-white rounded-lg shadow-xl overflow-hidden'
            >
              <Link
                to={courses[(currentIndex + 1) % courses.length].link}
                className='group block relative'
              >
                <img
                  src={courses[(currentIndex + 1) % courses.length].image}
                  alt={courses[(currentIndex + 1) % courses.length].title}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h4 className='text-xl font-semibold text-gray-900 mb-4 line-clamp-2'>
                    {courses[(currentIndex + 1) % courses.length].title}
                  </h4>
                  <p className='text-base text-gray-600 line-clamp-4'>
                    {courses[(currentIndex + 1) % courses.length].description}
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 md:p-3 text-white transition-all'
          >
            <svg
              className='w-5 h-5 md:w-6 md:h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 md:p-3 text-white transition-all'
          >
            <svg
              className='w-5 h-5 md:w-6 md:h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>

          {/* Mobile Indicators */}
          <div className='flex md:hidden justify-center mt-4 gap-2'>
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CourseSlider;
