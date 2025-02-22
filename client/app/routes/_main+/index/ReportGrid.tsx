import { Link } from '@remix-run/react';

interface ReportItem {
  id: number;
  image: string;
  title: string;
  features: string[];
  link: string;
}

const NumerologyReports = () => {
  const reports: ReportItem[] = [
    {
      id: 1,
      image: '/assets/reports/bao-cao1.png',
      title: 'Báo cáo thần số học trọn đời',
      features: [
        'Dự báo từng năm trong cuộc đời và các hướng phát triển phù hợp',
        'Phân tích chi tiết năng lượng tại các năm đỉnh cao và thử thách',
        'Bạn sẽ nhận được một file báo cáo phân tích chi tiết 60 năm',
      ],
      link: '/bao-cao/tron-doi',
    },
    {
      id: 2,
      image: '/assets/reports/bao-cao-dat-ten-danh-xung.png',
      title: 'Báo cáo đặt tên khai sinh',
      features: [
        'Phân tích biểu đồ ngày sinh, các chỉ số thiếu, nhược điểm từ ngày sinh và họ tên',
        'Phân tích, đề xuất 3 tên gọi từ ưu trục năng lực giá trị để bạn lựa chọn',
        'Bạn sẽ nhận được một File báo cáo phân tích chi tiết',
      ],
      link: '/bao-cao/dat-ten-khai-sinh',
    },
    {
      id: 3,
      image: '/assets/reports/bao-cao-dinh-huong-nghe-nghiep.png',
      title: 'Báo cáo định hướng nghề nghiệp',
      features: [
        'Hiểu rõ tính cách, điểm mạnh, điểm yếu cũng như khao khát về công việc phù hợp',
        'Phân tích chi tiết ngành nghề phù hợp với nhóm tính cách bản thân',
        'Nắm bắt kỹ năng cần có để sự nghiệp phát triển nhanh chóng',
      ],
      link: '/bao-cao/dinh-huong-nghe-nghiep',
    },
    {
      id: 4,
      image: '/assets/reports/bao-tien-sinh.png',
      title: 'Báo cáo đặt tên danh xưng',
      features: [
        'Phân tích biểu đồ ngày sinh, các chỉ số thiếu, nhược điểm từ ngày sinh và họ tên',
        'Phân tích, đề xuất 3 tên gọi từ ưu trục năng lực giá trị để bạn lựa chọn',
        'Bạn sẽ nhận được một File báo cáo phân tích chi tiết',
      ],
      link: '/bao-cao/dat-ten-danh-xung',
    },
  ];

  return (
    <section className='relative py-20'>
      {/* Background with stars */}
      <div
        className='absolute inset-0 w-full h-full'
        style={{
          backgroundImage: "url('/assets/reports/reports-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4'>
        {/* Title */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-white'>
            ỨNG DỤNG THẦN SỐ HỌC
          </h2>
          <h3 className='text-xl md:text-2xl font-semibold text-white mt-2'>
            THẦY LOUIS NGUYỄN NGHIÊN CỨU
          </h3>
        </div>

        {/* Reports Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {reports.map((report) => (
            <div
              key={report.id}
              className='bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow'
            >
              <div className='flex gap-6'>
                {/* Report Image */}
                <div className='w-1/3'>
                  <img
                    src={report.image}
                    alt={report.title}
                    className='w-full h-auto rounded-lg'
                  />
                </div>

                {/* Report Content */}
                <div className='w-2/3'>
                  <h4 className='text-xl font-semibold text-gray-900 mb-4'>
                    {report.title}
                  </h4>
                  <ul className='space-y-2 mb-6'>
                    {report.features.map((feature, index) => (
                      <li key={index} className='flex items-start gap-2'>
                        <span className='w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0' />
                        <span className='text-gray-600 text-sm'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={report.link}
                    className='inline-block px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full transition-colors'
                  >
                    TÌM HIỂU THÊM
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumerologyReports;
