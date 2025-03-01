import React from 'react';

export default function HeroSection() {
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

        <div className='container mx-auto px-0 min-h-screen flex flex-col items-end pt-20 relative'>
          {/* Content Section */}
          <div className='text-white mb-8 relative z-30 right-0 md:right-60 mt-20 md:mt-40 text-center md:text-center'>
            <h2 className='text-xl md:text-2xl mb-2'>TRA CỨU THẦN SỐ HỌC</h2>
            <h1 className='text-2xl md:text-3xl mb-2'>
              KHÁM PHÁ BẢN THÂN CÙNG THẦY
            </h1>
            <h1 className='text-4xl md:text-5xl font-bold'>LOUIS NGUYỄN</h1>
          </div>

          {/* Feature Badges */}
          <div className='mb-12 w-full md:max-w-4xl'>
            <div className='border border-white/60 rounded-lg p-4 bg-transparent'>
              <div className='flex items-center'>
                <div className='flex items-center px-4 md:px-8 py-2 text-white text-sm'>
                  <div className='w-5 h-5 rounded-full border border-white/60 flex items-center justify-center'>
                    ✓
                  </div>
                  <span className='text-xs md:text-sm ml-2'>
                    Nhà sáng lập hệ thống thần số học được ứng dụng phổ biến tại
                    Việt Nam
                  </span>
                </div>

                {/* Nét đứt */}
                <div className='border-l border-white/60 h-8 mx-4'></div>

                <div className='flex items-center px-4 md:px-8 py-2 text-white text-sm'>
                  <div className='w-5 h-5 rounded-full border border-white/60 flex items-center justify-center'>
                    ✓
                  </div>
                  <span className='text-xs md:text-sm ml-2'>
                    Xem chi tiết — chính xác — tin cậy
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Statistics Section */}
          <div className='relative w-full max-w-5xl'>
            {/* Expert Image for Desktop */}
            <div className='hidden md:block absolute -top-[500px] -left-[300px] h-[500px] z-20'>
              <img
                src='/assets/chuyengia.png'
                alt='Louis Nguyen'
                className='h-auto w-full md:w-auto object-contain'
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.2))',
                }}
              />
            </div>

            {/* Expert Image for Mobile */}
            <div className='block md:hidden flex justify-center mt-8 z-20'>
              <img
                src='/assets/chuyengia.png'
                alt='Louis Nguyen'
                className='h-auto w-2/6 object-contain'
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
      </section>
    </div>
  );
}
