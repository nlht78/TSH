import { Link } from '@remix-run/react';

interface BlogPost {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  slug: string;
}

interface SidePost {
  id: number;
  thumbnail: string;
  title: string;
  date: string;
  slug: string;
}

const BlogPosts = () => {
  // Mock data - sau này sẽ được truyền vào qua props hoặc API
  const mainPosts: BlogPost[] = [
    {
      id: 1,
      image: '/assets/blog/cach-tinh-than-so-hoc.png',
      title:
        'Cách tính Thần số học chuẩn Pythagoras theo tên và ngày sinh mới nhất 2024',
      description:
        'Bài viết hướng dẫn chi tiết nhất cách tính thần số học, nhân số học từ ngày tháng năm sinh và họ tên, kèm luận giải cho riêng bạn...',
      date: '04/11/2024',
      slug: 'cach-tinh-than-so-hoc-pythagoras-2024',
    },
    {
      id: 2,
      image: '/assets/blog/bang-chu-cai-than-so-hoc-1.png',
      title: 'Giải Mã Chi Tiết Bảng Chữ Cái Thần Số Học Chính Xác Nhất',
      description: '',
      date: '03/11/2024',
      slug: 'giai-ma-bang-chu-cai-than-so-hoc',
    },
    {
      id: 3,
      image: '/assets/blog/bieu-do-kim-tu-thap-than-so-hoc-1.png',
      title:
        'Cách tính 4 đỉnh cao biểu đồ kim tự tháp thần số học kèm công cụ giải mã',
      description: '',
      date: '02/11/2024',
      slug: 'cach-tinh-4-dinh-cao-bieu-do-kim-tu-thap',
    },
    {
      id: 4,
      image: '/assets/blog/cac-mui-ten-trong-than-so-hoc-1-1.png',
      title:
        'Cách tính 4 đỉnh cao biểu đồ kim tự tháp thần số học kèm công cụ giải mã',
      description: '',
      date: '02/11/2024',
      slug: 'cach-tinh-4-dinh-cao-bieu-do-kim-tu-thap',
    },
  ];

  const sidePosts: SidePost[] = [
    {
      id: 1,
      thumbnail: '/assets/blog/9.png',
      title:
        'Năm thế giới số 9 có ý nghĩa gì? Năm cá nhân và số chủ đạo trong năm 2025 sẽ ra sao?',
      date: '04/10/2025',
      slug: 'y-nghia-nam-the-gioi-so-9',
    },
    {
      id: 2,
      thumbnail: '/assets/blog/22.png',
      title:
        'Chỉ số đường đời 22 là gì? Đặc điểm tính cách, tình duyên và sự nghiệp số chủ đạo 22',
      date: '05/11/2024',
      slug: 'chi-so-duong-doi-22',
    },
    {
      id: 3,
      thumbnail: '/assets/blog/22.png',
      title:
        'Chỉ số đường đời 22 là gì? Đặc điểm tính cách, tình duyên và sự nghiệp số chủ đạo 22',
      date: '05/11/2024',
      slug: 'chi-so-duong-doi-22',
    },
    {
      id: 4,
      thumbnail: '/assets/blog/22.png',
      title:
        'Chỉ số đường đời 22 là gì? Đặc điểm tính cách, tình duyên và sự nghiệp số chủ đạo 22',
      date: '05/11/2024',
      slug: 'chi-so-duong-doi-22',
    },
    {
      id: 5,
      thumbnail: '/assets/blog/22.png',
      title:
        'Chỉ số đường đời 22 là gì? Đặc điểm tính cách, tình duyên và sự nghiệp số chủ đạo 22',
      date: '05/11/2024',
      slug: 'chi-so-duong-doi-22',
    },
    // Thêm các bài viết khác...
  ];

  return (
    <section className='relative py-20 bg-transparent -mt-20'>
      {' '}
      {/* Add negative margin */}
      {/* Background layer */}
      <div
        className='absolute inset-0 w-full h-full'
        style={{
          backgroundImage: "url('/assets/back4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.15',
        }}
      />
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-purple-900/30' />
      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-white mb-12'>
          BLOG TRA CỨU THẦN SỐ HỌC
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main Posts Column */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Featured Post */}
            <div className='bg-white/95 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]'>
              <Link to={mainPosts[0].slug} className='block group'>
                <div className='relative aspect-[16/9]'>
                  <img
                    src={mainPosts[0].image}
                    alt={mainPosts[0].title}
                    className='w-full h-full object-cover'
                  />
                  {/* Gradient overlay on image */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors'>
                    {mainPosts[0].title}
                  </h3>
                  <p className='mt-2 text-gray-600'>
                    {mainPosts[0].description}
                  </p>
                  <button className='mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 hover:shadow-lg'>
                    XEM CHI TIẾT ›
                  </button>
                </div>
              </Link>
            </div>

            {/* Other Main Posts Grid */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {mainPosts.slice(1).map((post) => (
                <div
                  key={post.id}
                  className='bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02]'
                >
                  <Link to={post.slug} className='block group'>
                    <div className='relative aspect-[4/3]'>
                      <img
                        src={post.image}
                        alt={post.title}
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
                    </div>
                    <div className='p-4'>
                      <h3 className='text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors'>
                        {post.title}
                      </h3>
                      <button className='mt-4 text-purple-600 hover:text-purple-700 transition-colors'>
                        Xem chi tiết »
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Posts */}
          <div className='space-y-6'>
            {sidePosts.map((post) => (
              <Link
                key={post.id}
                to={post.slug}
                className='flex gap-4 items-start bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group'
              >
                <div className='w-24 h-24 flex-shrink-0'>
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className='w-full h-full object-cover rounded-lg'
                  />
                </div>
                <div>
                  <h3 className='text-gray-900 font-medium group-hover:text-purple-600 transition-colors'>
                    {post.title}
                  </h3>
                  <p className='text-sm text-gray-500 mt-1'>{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className='text-center mt-12'>
          <button className='px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg'>
            XEM THÊM
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
