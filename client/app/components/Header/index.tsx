import { Link } from '@remix-run/react';
import { useRootLoaderData } from '~/lib/useRootLoaderData';
import { useState } from 'react';
import { getImageUrl } from '~/utils';

export default function Header() {
  const { appSettings } = useRootLoaderData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white h-[63px] border-b border-gray-100'>
      <div className='max-w-[1903px] mx-auto h-full px-4'>
        <div className='flex items-center justify-between h-full'>
          {/* Logo */}
          <Link to='/' className='flex-shrink-0'>
            <img
              src={getImageUrl(appSettings.app_logo)}
              alt='Tra cứu thần số học'
              className='h-[45px] w-auto'
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden p-2 text-gray-600'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8 ml-auto'>
            <Link
              to='/'
              className='text-[16px] font-normal text-[#333] hover:text-[#C5177F]'
            >
              Home
            </Link>

            <div className='relative group'>
              <Link
                to='/gioi-thieu'
                className='text-[16px] font-normal text-[#333] hover:text-[#C5177F] flex items-center'
              >
                Giới thiệu
                <svg
                  className='w-3 h-3 ml-1 opacity-60'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </Link>
            </div>

            <div className='relative group'>
              <Link
                to='/tra-cuu'
                className='text-[16px] font-normal text-[#333] hover:text-[#C5177F] flex items-center'
              >
                Tra Cứu
                <svg
                  className='w-3 h-3 ml-1 opacity-60'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </Link>
            </div>

            <div className='relative group'>
              <Link
                to='/dich-vu'
                className='text-[16px] font-normal text-[#333] hover:text-[#C5177F] flex items-center'
              >
                Dịch vụ
                <svg
                  className='w-3 h-3 ml-1 opacity-60'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </Link>
            </div>

            <div className='relative group'>
              <Link
                to='/blog'
                className='text-[16px] font-normal text-[#333] hover:text-[#C5177F] flex items-center'
              >
                Blog
                <svg
                  className='w-3 h-3 ml-1 opacity-60'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </Link>
            </div>

            <Link
              to='/dang-nhap'
              className='text-[16px] font-normal text-[#333] hover:text-[#C5177F]'
            >
              Đăng nhập
            </Link>

            <div className='relative group'>
              <button className='text-[16px] font-normal text-[#333] hover:text-[#C5177F] flex items-center'>
                Ngôn ngữ
                <svg
                  className='w-3 h-3 ml-1 opacity-60'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
            </div>

            {/* Search Icon */}
            <button className='text-[#333] hover:text-[#C5177F] ml-2'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } md:hidden absolute top-[63px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg`}
          >
            <div className='px-4 py-3 space-y-4'>
              <Link
                to='/'
                className='block text-[16px] font-normal text-[#333] hover:text-[#C5177F]'
              >
                Home
              </Link>
              <Link
                to='/gioi-thieu'
                className='block text-[16px] font-normal text-[#333] hover:text-[#C5177F]'
              >
                Giới thiệu
              </Link>
              <Link
                to='/tra-cuu'
                className='block text-[16px] font-normal text-[#333] hover:text-[#C5177F]'
              >
                Tra Cứu
              </Link>
              <Link
                to='/dich-vu'
                className='block text-[16px] font-normal text-[#333] hover:text-[#C5177F]'
              >
                Dịch vụ
              </Link>
              <Link
                to='/blog'
                className='block text-[16px] font-normal text-[#333] hover:text-[#C5177F]'
              >
                Blog
              </Link>
              <Link
                to='/dang-nhap'
                className='block text-[16px] font-normal text-[#333] hover:text-[#C5177F]'
              >
                Đăng nhập
              </Link>
              <button className='block w-full text-left text-[16px] font-normal text-[#333] hover:text-[#C5177F]'>
                Ngôn ngữ
              </button>
              <button className='block w-full text-left text-[16px] font-normal text-[#333] hover:text-[#C5177F]'>
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
