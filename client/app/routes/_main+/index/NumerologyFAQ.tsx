import React, { useState } from 'react';

interface FAQItem {
  title: string;
  content: React.ReactNode;
}

const NumerologyFAQ = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [openKnowledgeIndex, setOpenKnowledgeIndex] = useState<number | null>(
    null,
  );

  const faqItems: FAQItem[] = [
    {
      title: 'Thần số học là gì?',
      content:
        'Thần số học (nhân số học) là một lĩnh vực nghiên cứu và giải mã con người trong phạm trù huyền học. Bộ môn này đi sâu nghiên cứu về ý nghĩa, mối liên hệ giữa các chữ số và con người...',
    },
    {
      title: 'Khám phá bản thân theo nhân số học',
      content: 'Nội dung về khám phá bản thân...',
    },
    {
      title: 'Tracuuthansohoc có thể giúp gì cho bạn?',
      content: 'Thông tin về các dịch vụ và lợi ích...',
    },
  ];

  const knowledgeItems: FAQItem[] = [
    {
      title: 'Con số chủ đạo (Chỉ đường đời)',
      content: 'Nội dung về con số chủ đạo...',
    },
    {
      title: 'Biểu đồ ngày sinh',
      content: 'Nội dung về biểu đồ ngày sinh...',
    },
    {
      title: 'Năm cá nhân',
      content: 'Nội dung về năm cá nhân...',
    },
    {
      title: '4 đỉnh cao đời người trong thần số học Pitago',
      content: 'Nội dung về 4 đỉnh cao...',
    },
    {
      title: 'Các chỉ số trong thần số học và ý nghĩa của chúng',
      content: (
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            <thead>
              <tr>
                <th className='border p-3 sm:p-4 bg-gray-50 w-1/4 text-sm sm:text-base'>
                  Chỉ số
                </th>
                <th className='border p-3 sm:p-4 bg-gray-50 text-sm sm:text-base'>
                  Ý nghĩa
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border p-3 sm:p-4 text-sm sm:text-base'>
                  Số sứ mệnh
                </td>
                <td className='border p-3 sm:p-4 text-sm sm:text-base'>
                  Số sứ mệnh được tìm thấy bằng cách sử dụng ảnh xạ ra số trong
                  tên khai sinh. Nó tiết lộ những khuyết điểm, khả năng và tài
                  năng của bạn mà bạn sẽ trải qua trong cuộc đời...
                </td>
              </tr>
              <tr>
                <td className='border p-3 sm:p-4 text-sm sm:text-base'>
                  Chỉ số nhân cách
                </td>
                <td className='border p-3 sm:p-4 text-sm sm:text-base'>
                  Đây là chỉ số cho biết ấn tượng của người khác đối với bạn là
                  gì. Đó là biểu hiện bên ngoài của bạn. Tính cách bên ngoài
                  (nhân cách) của bạn sẽ được phản ánh qua hành vi, thái độ,
                  phản ứng của bạn...
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  return (
    <section className='relative py-12 sm:py-16 md:py-20 bg-transparent'>
      {/* Background layer */}
      <div
        className='absolute inset-0 w-full h-full object-cover'
        style={{
          backgroundImage: "url('/assets/back2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat ',
          backgroundAttachment: 'fixed',
          opacity: '0.2',
        }}
      />

      {/* Content */}
      <div className='relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* FAQ Section */}
        <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white/100'>
          ĐÔI LỜI CHIA SẺ VỀ THẦN SỐ HỌC MIỄN PHÍ
        </h1>

        {/* FAQ Items Container */}
        <div className='space-y-3 sm:space-y-4 mb-12 sm:mb-14 md:mb-16'>
          {faqItems.map((item, index) => (
            <div key={index} className='bg-white rounded-lg shadow-lg'>
              <button
                onClick={() =>
                  setOpenFAQIndex(openFAQIndex === index ? null : index)
                }
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center ${
                  openFAQIndex === index ? 'bg-[#4a235a]' : 'bg-[#2c3e50]'
                } text-white transition-all duration-300 rounded-lg`}
              >
                <span className='text-base sm:text-lg md:text-xl pr-4'>
                  {item.title}
                </span>
                <span
                  className={`transform transition-transform duration-300 flex-shrink-0 ${
                    openFAQIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQIndex === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className='px-4 sm:px-6 py-3 sm:py-4 bg-white'>
                  <div className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                    {item.content}
                  </div>
                  {index === 0 && (
                    <p className='mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 italic'>
                      Để hiểu hơn về nội dung này, mời bạn tham khảo bài viết:
                      Thần Số Học Là Gì ? Khám Phá Bản Thân Qua Những Con Số
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Knowledge Section */}
        <h2 className='text-center text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10 md:mb-12 text-white/100'>
          KIẾN THỨC THÚ VỊ TRONG THẦN SỐ HỌC PYTHAGORAS
        </h2>

        {/* Knowledge Items Container */}
        <div className='space-y-3 sm:space-y-4'>
          {knowledgeItems.map((item, index) => (
            <div key={index} className='bg-white rounded-lg shadow-lg'>
              <button
                onClick={() =>
                  setOpenKnowledgeIndex(
                    openKnowledgeIndex === index ? null : index,
                  )
                }
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center ${
                  openKnowledgeIndex === index ? 'bg-[#4a235a]' : 'bg-[#2c3e50]'
                } text-white transition-all duration-300 rounded-lg`}
              >
                <span className='text-base sm:text-lg md:text-xl pr-4'>
                  {item.title}
                </span>
                <span
                  className={`transform transition-transform duration-300 flex-shrink-0 ${
                    openKnowledgeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openKnowledgeIndex === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className='px-4 sm:px-6 py-3 sm:py-4 bg-white'>
                  <div className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default NumerologyFAQ;
