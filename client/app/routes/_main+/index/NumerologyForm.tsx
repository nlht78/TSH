import React from 'react';

export default function NumerologyForm() {
  return (
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
          Nếu ngày sinh trên giấy tờ (chứng minh thư, bằng lái, khai sinh...)
          của bạn khác với ngày sinh dương lịch thật thì cuộc đời bạn sẽ có sự
          xáo trộn từ cả 2 ngày sinh này. Bạn nên tra cứu cả 2 để biết thêm chi
          tiết, tuy nhiên kết quả sẽ thiên về ngày sinh dương lịch thật!
        </p>
        <p>
          Tên thường dùng là tên mà mọi người thường gọi bạn hoặc một danh xưng
          bạn thường dùng, tên này sẽ bù trừ vào biểu đồ ngày sinh của bạn. Nếu
          bạn không có tên thường dùng, hệ thống sẽ tự lấy họ tên khai sinh của
          bạn để tính toán trong biểu đồ tổng hợp.
        </p>
        <p>
          Số chủ đạo tuy rất quan trọng nhưng không thể hiện hết thông tin thần
          số học của bạn. Để xem kết quả tra cứu chính xác, hãy kết hợp tất cả
          các chỉ số mà chúng tôi tính toán!
        </p>
      </div>
    </div>
  );
}
