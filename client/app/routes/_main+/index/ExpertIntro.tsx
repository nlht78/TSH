const ExpertIntro = () => {
  return (
    <section className='relative py-20 md:py-40'>
      {/* Background with stars and numbers */}
      <div
        className='absolute inset-0 w-full h-full'
        style={{
          backgroundImage: "url('/assets/back.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Large text watermark - Ẩn trên mobile */}
      <div className='hidden md:flex absolute top-20 left-0 right-0 z-10 items-center justify-center'>
        <h1 className='text-[80px] md:text-[150px] font-bold text-white/50 whitespace-nowrap transform -translate-y-1/4'>
          LOUIS NGUYỄN
        </h1>
      </div>

      {/* Content container */}
      <div className='relative z-[5] max-w-7xl mx-auto px-4'>
        {/* Content frame with expert image */}
        <div className='relative max-w-[1000px] mx-auto mt-[50px] md:mt-[100px]'>
          {/* Pink border frame */}
          <div className='absolute inset-0 border-2 border-pink-500 rounded-lg' />

          {/* Content with dark background and expert image */}
          <div className='relative bg-[#0B1225]/90 p-4 md:p-8 rounded-lg'>
            <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0'>
              {/* Left content */}
              <div className='w-full md:w-3/5'>
                {/* Title section */}
                <div className='space-y-4 mb-8 text-center md:text-left'>
                  <h3 className='text-pink-500 text-lg md:text-xl font-medium'>
                    NHÀ NGHIÊN CỨU THẦN SỐ HỌC PITAGO
                  </h3>
                  <h2 className='text-3xl md:text-4xl font-bold'>
                    <span className='text-white'>THẦY </span>
                    <span className='text-white'>LOUIS NGUYỄN</span>
                  </h2>
                </div>

                {/* Achievements list */}
                <div className='space-y-4'>
                  {/* Achievement items */}
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 rounded-full bg-pink-500 flex-shrink-0' />
                    <p className='text-white text-sm md:text-base'>
                      CEO Tra cứu thần số học Louis Nguyễn – Nhà nghiên cứu thần
                      số học
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 rounded-full bg-pink-500 flex-shrink-0' />
                    <p className='text-white text-sm md:text-base'>
                      Nhà sáng lập hệ thống Tra cứu thần số học hàng đầu Việt
                      Nam
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 rounded-full bg-pink-500 flex-shrink-0' />
                    <p className='text-white text-sm md:text-base'>
                      Hơn 7 năm nghiên cứu và ứng dụng Nhân số học vào đời sống
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 rounded-full bg-pink-500 flex-shrink-0' />
                    <p className='text-white text-sm md:text-base'>
                      Hơn 100 khóa đào tạo thần số học cho đại chúng Việt Nam
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 rounded-full bg-pink-500 flex-shrink-0' />
                    <p className='text-white text-sm md:text-base'>
                      Cố vấn định hướng cho hơn 50 doanh nghiệp lớn nhỏ trong kỷ
                      nguyên chuyển đổi số
                    </p>
                  </div>
                </div>
              </div>

              {/* Right content - Expert image */}
              <div className='w-full md:w-2/5 relative order-first md:order-last'>
                <img
                  src='/assets/chuyengia.png'
                  alt='Thầy Louis Nguyễn'
                  className='w-[250px] md:w-auto h-auto md:h-[400px] object-contain mx-auto md:mx-0'
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
                  }}
                />
                {/* Circle background effect */}
                <div
                  className='absolute right-1/2 md:right-20 top-1/2 md:top-20 w-32 md:w-48 h-32 md:h-48 rounded-full transform translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:-translate-y-0'
                  style={{
                    background:
                      'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0) 70%)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className='absolute -right-2 -bottom-2 w-8 md:w-16 h-8 md:h-16 border-r-2 border-b-2 border-pink-500' />
          <div className='absolute -left-2 -top-2 w-8 md:w-16 h-8 md:h-16 border-l-2 border-t-2 border-pink-500' />
        </div>
      </div>
    </section>
  );
};

export default ExpertIntro;
