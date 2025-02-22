import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-[#1a1147] text-white relative w-full'>
      {/* Background Map Overlay */}
      <div
        className='absolute inset-0 opacity-50 pointer-events-none'
        style={{
          backgroundImage: "url('/assets/footer.png')",
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Main Footer Content */}
      <div className='max-w-[1348px] mx-auto px-4 py-8 sm:py-12 md:py-16'>
        <div className='flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12'>
          {/* Left Column - Logo & Social */}
          <div className='w-full md:w-1/3'>
            <img
              src='/assets/logo-text.png'
              alt='Logo'
              className='h-20 sm:h-24 md:h-30 mb-8 md:mb-12'
            />
            {/* Facebook Plugin - Responsive width */}
            <div className='mb-6 sm:mb-8'>
              <div
                className='fb-page'
                data-href='https://www.facebook.com/thansohoclouis'
                data-width='300'
                data-hide-cover='false'
                data-show-facepile='true'
              ></div>
            </div>
            {/* Social Icons */}
            <div className='flex flex-wrap gap-2 sm:gap-3'>
              {[
                { icon: FaFacebook, name: 'facebook' },
                { icon: FaInstagram, name: 'instagram' },
                { icon: FaTiktok, name: 'tiktok' },
                { icon: FaTwitter, name: 'twitter' },
                { icon: FaPinterest, name: 'pinterest' },
                { icon: FaLinkedin, name: 'linkedin' },
                { icon: FaYoutube, name: 'youtube' },
                { icon: FaTwitch, name: 'twitch' },
              ].map(({ icon: Icon, name }) => (
                <a
                  key={name}
                  href='#'
                  className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors'
                >
                  <Icon className='w-4 h-4 sm:w-5 sm:h-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column - General Info */}
          <div className='w-full md:w-1/3'>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center md:text-left'>
              Thông tin chung
            </h3>
            <ul className='space-y-2 sm:space-y-4 text-center md:text-left'>
              {[
                'Chính sách bảo mật',
                'Điều khoản sử dụng',
                'Kiến thức',
                'Liên hệ',
                'Về chúng tôi',
                'Đội ngũ admin',
              ].map((item) => (
                <li key={item}>
                  <a
                    href='#'
                    className='hover:text-pink-400 text-sm sm:text-base transition-colors'
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div className='w-full md:w-1/3'>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6'>
              Liên hệ với chúng tôi
            </h3>
            <ul className='space-y-4 sm:space-y-6'>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='text-sm sm:text-base'>
                  132 Hàm Nghi, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <svg
                  className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                </svg>
                <span className='text-sm sm:text-base'>
                  Điện thoại: 0962.604.394
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <svg
                  className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
                <span className='text-sm sm:text-base'>
                  Liên hệ hợp tác: tracuuthansohoc@gmail.com
                </span>
              </li>
            </ul>
            <div className='mt-6 sm:mt-8'>
              <p className='text-sm sm:text-base italic mb-2 sm:mb-3'>
                "Chưa ở đâu có trang web như tracuuthansohoc. Trang web sử dụng
                phần mềm tính toán quá phức tạp, quá hay. Thông tin cực kì chi
                tiết!"
              </p>
              <p className='text-sm sm:text-base'>
                — Một vị khách hàng đã tra cứu
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className='border-t border-white/10 bg-black/60'>
        <div className='max-w-[1348px] mx-auto px-4 py-4 sm:py-6'>
          <p className='text-xs sm:text-sm text-center'>
            © 2025 Tracuuthansohoc.com | All rights reserved | Thông tin trên
            trang web mang tính chất tham khảo và giải trí
          </p>
        </div>
      </div>
    </footer>
  );
}
