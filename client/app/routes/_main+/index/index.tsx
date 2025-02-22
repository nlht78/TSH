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

export const loader = async () => {
  const sliders = await getImages();
  const posts = await getPosts();
  console.log('posts', posts);
  return { sliders, posts };
};

// ... existing code ...

export default function Index() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Hero Section */}
      <section className='relative min-h-screen overflow-hidden'>
        <div className='fixed inset-0 z-0'>
          <div
            className='absolute inset-0 w-full h-full'
            style={{
              backgroundImage: "url('/assets/back1.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>

        <div className='container mx-auto px-4 min-h-screen flex flex-col items-end pt-20 relative'>
          {/* Content Section */}
          <div className='text-white mb-8 relative z-30 right-0 md:right-60 mt-20 md:mt-40 text-center md:text-left'>
            <h2 className='text-xl md:text-2xl mb-2'>TRA CỨU THẦN SỐ HỌC</h2>
            <h1 className='text-2xl md:text-3xl mb-2'>
              KHÁM PHÁ BẢN THÂN CÙNG THẦY
            </h1>
            <h1 className='text-4xl md:text-5xl font-bold'>LOUIS NGUYỄN</h1>
          </div>

          {/* Feature Badges */}
          <div className='flex flex-col md:flex-row gap-4 mb-12 w-full md:max-w-4xl'>
            <div className='border border-white/30 rounded-full px-4 md:px-8 py-2 text-white text-sm bg-white/5 backdrop-blur-sm'>
              <div className='flex items-center gap-2'>
                <div className='w-5 h-5 rounded-full border border-white/30 flex items-center justify-center'>
                  ✓
                </div>
                <span className='text-xs md:text-sm'>
                  Nhà sáng lập hệ thống thần số học được ứng dụng phổ biến tại
                  Việt Nam
                </span>
              </div>
            </div>
            <div className='border border-white/30 rounded-full px-4 md:px-8 py-2 text-white text-sm bg-white/5 backdrop-blur-sm'>
              <div className='flex items-center gap-2'>
                <div className='w-5 h-5 rounded-full border border-white/30 flex items-center justify-center'>
                  ✓
                </div>
                <span className='text-xs md:text-sm'>
                  Xem chi tiết — chính xác — tin cậy
                </span>
              </div>
            </div>
          </div>
          {/* Statistics Section */}
          <div className='relative w-full max-w-5xl'>
            {/* Expert Image */}
            <div className='hidden md:block absolute -top-[500px] -left-[300px] h-[500px] z-20'>
              <img
                src='/assets/chuyengia.png'
                alt='Louis Nguyen'
                className='h-full w-auto object-contain'
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.2))',
                }}
              />
            </div>

            {/* Statistics Boxes */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:-ml-[300px]'>
              <div className='bg-blue-900/30 backdrop-blur-md p-6 rounded-lg text-center border border-white/10'>
                <div className='text-pink-500 text-4xl font-bold mb-2'>
                  26.564.889+
                </div>
                <div className='text-white uppercase text-sm'>Lượt tra cứu</div>
              </div>
              <div className='bg-blue-900/30 backdrop-blur-md p-6 rounded-lg text-center border border-white/10'>
                <div className='text-pink-500 text-4xl font-bold mb-2'>
                  896.401+
                </div>
                <div className='text-white uppercase text-sm'>
                  Báo cáo xuất bản
                </div>
              </div>
              <div className='bg-blue-900/30 backdrop-blur-md p-6 rounded-lg text-center border border-white/10'>
                <div className='text-pink-500 text-4xl font-bold mb-2'>
                  79.526+
                </div>
                <div className='text-white uppercase text-sm'>
                  Học viên qua các khóa học
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className='bg-pink-600 hover:bg-pink-700 text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-medium transition-colors z-20 shadow-lg relative md:left-[-450px] w-full md:w-auto mb-8 md:mb-0'>
            TRA CỨU CÁC CHỈ SỐ CỦA BẠN NGAY ›
          </button>

          {/* Description Text */}
          <div className='text-white text-center max-w-4xl mx-auto mb-8 px-4'>
            <p className='text-sm md:text-base mb-4'>
              Những nghiên cứu về Thần số học Pitago của Thầy Louis Nguyễn đang
              mang đến một làn sóng tích cực trong đại chúng Việt Nam. Không chỉ
              là các phân tích để giúp mỗi người tìm ra những tiềm năng thực sự
              và trả lời được câu hỏi mình là ai trong cuộc đời này, những
              nghiên cứu sâu và rộng khắp các lĩnh vực của thầy còn giúp hàng
              triệu người lựa chọn được con đường đi đúng đắn, giúp cho những
              người làm kinh doanh tìm ra định hướng phù hợp trong chiến lược và
              trong quản lí doanh nghiệp, quan hệ khách hàng.
            </p>
          </div>
        </div>
        {/* Numerology Form Section */}
        <div className='bg-blue-900/30 backdrop-blur-md rounded-lg p-4 md:p-8 max-w-3xl mx-auto w-full mt-8 md:mt-0'>
          <h2 className='text-white text-xl md:text-2xl font-bold text-center mb-6 md:mb-8'>
            CÔNG CỤ XEM THẦN SỐ HỌC ONLINE LOUIS NGUYỄN
          </h2>

          <form className='space-y-4 md:space-y-6'>
            {/* Full Name Input */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <label className='block text-white mb-2'>Họ tên khai sinh:</label>
              <input
                type='text'
                className='w-full px-4 py-2 rounded-md border border-white/30 bg-white/5 text-white'
                placeholder='Nhập họ tên'
              />
            </div>

            {/* Common Name and Gender */}
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block text-white mb-2'>
                  Tên thường dùng nếu có (VD: Louis Nguyen,...)
                </label>
                <input
                  type='text'
                  className='w-full px-4 py-2 rounded-md border border-white/30 bg-white/5 text-white'
                  placeholder='Nhập tên thường dùng'
                />
              </div>
              <div>
                <label className='block text-white mb-2'>Giới tính</label>
                <select className='w-full px-4 py-2 rounded-md border border-white/30 bg-white/5 text-white'>
                  <option value=''>Giới tính</option>
                  <option value='male'>Nam</option>
                  <option value='female'>Nữ</option>
                </select>
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label className='block text-white mb-2'>
                Ngày/tháng/năm sinh dương lịch:
              </label>
              <div className='grid grid-cols-3 gap-4'>
                <select className='px-4 py-2 rounded-md border border-white/30 bg-white/5 text-white'>
                  <option value=''>Ngày 01</option>
                  {/* Add options 1-31 */}
                </select>
                <select className='px-4 py-2 rounded-md border border-white/30 bg-white/5 text-white'>
                  <option value=''>Tháng 01</option>
                  {/* Add options 1-12 */}
                </select>
                <input
                  type='text'
                  className='px-4 py-2 rounded-md border border-white/30 bg-white/5 text-white'
                  placeholder='Năm sinh'
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className='space-y-2'>
              <div className='flex items-center'>
                <input type='checkbox' className='mr-2' />
                <label className='text-white'>
                  Xem tương hợp tình duyên, hôn nhân
                </label>
              </div>
              <div className='flex items-center'>
                <input type='checkbox' className='mr-2' />
                <label className='text-white'>Xem cả số điện thoại hợp</label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-md font-medium'
            >
              TRA CỨU NGAY
            </button>
          </form>

          {/* Note */}
          <div className='mt-4 md:mt-6 text-white/80 text-xs md:text-sm'>
            <p className='font-medium'>Chú thích:</p>
            <p>
              Nếu ngày sinh trên giấy tờ (chứng minh thư, bằng lái, khai
              sinh...) của bạn khác với ngày sinh dương lịch thật thì cuộc đời
              bạn sẽ có sự xáo trộn từ cả 2 ngày sinh này. Bạn nên tra cứu cả 2
              để biết thêm chi tiết, tuy nhiên kết quả sẽ thiên về ngày sinh
              dương lịch thật!
            </p>
            <p>
              Tên thường dùng là tên mà mọi người thường gọi bạn hoặc một danh
              xưng bạn thường dùng, tên này sẽ bù trừ vào biểu đồ ngày sinh của
              bạn. Nếu bạn không có tên thường dùng, hệ thống sẽ tự lấy họ tên
              khai sinh của bạn để tính toán trong biểu đồ tổng hợp.
            </p>
            <p>
              Số chủ đạo tuy rất quan trọng nhưng không thể hiện hết thông tin
              thần số học của bạn. Để xem kết quả tra cứu chính xác, hãy kết hợp
              tất cả các chỉ số mà chúng tôi tính toán!
            </p>
          </div>
        </div>
      </section>
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

// ... existing code ...

export const ErrorBoundary = () => <HandsomeError />;
