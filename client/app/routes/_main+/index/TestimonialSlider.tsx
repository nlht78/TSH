import { useState } from 'react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  avatar: string;
}
const styles = {
  slideInRight: {
    animation: 'slideInRight 0.5s ease-out',
  },
  slideInLeft: {
    animation: 'slideInLeft 0.5s ease-out',
  },
  fadeIn: {
    animation: 'fadeIn 0.5s ease-out 0.3s both',
  },
};
const testimonials: Testimonial[] = [
  {
    id: 1,
    content: `Dù mới biết đến Thần số học Pitago trong thời gian gần đây nhưng đọc một số bài mình thấy nội dung bài viết 
    chính xác đến khó tin. Mình tự nhận thấy bản thân là một người lạc quan, thích được kết nối với mọi người xung 
    quanh. Đi cùng với đó là những điểm yếu như khó khăn trong quản lý tiền bạc, đôi khi sống hời hợt và chịu sự chi 
    phối của cảm xúc. Mình luôn thắc mắc tại sao lại có nét tính cách như vậy, có cách nào để khắc phục những vấn đề 
    trên không? Sau khi tra cứu thần số học trên trang web Tracuuthansohoc.com, mình được biết vì bản thân sở hữu 
    con số chủ đạo là con số 3 nên có các đặc điểm như vậy. Bên cạnh đó mình còn biết thêm về các chỉ số quan trọng 
    trong cuộc đời. Nếu tận dụng tốt hiểu biết về bản thân thông qua Nhân số học, mình tin tất cả mọi người sẽ sớm 
    tìm ra một lối đi phù hợp để phát triển hơn trong tương lai.`,
    author: 'Bông Mai',
    role: 'Kinh Doanh',
    avatar: '/assets/banner.jpg',
  },

  {
    id: 2,
    content: `Trước đây tôi thường xuyên có những mối quan hệ không tốt và đem đến những ảnh hưởng tiêu cực. 
    Khi có quá nhiều mối hệ như vậy khiến tôi băn khoăn suy nghĩ có phải vấn đề đến từ chính bản thân mình hay không?”.
    Suy nghĩ này khiến cho tôi từ một người đầy tự tin trở nên rụt rè, chỉ biết thu mình lại ở những nơi đông người. 
    Nhưng từ khi biết đến Nhân số học, tôi nhận ra vấn đề không phải do cá nhân chưa đủ tốt, lí do là bởi tôi không biết cách chọn lọc. 
    Bằng cách tra cứu Thần số học Pythagoras, tôi hiểu thêm về chính mình và bản thân phù hợp với những người như thế nào.`,
    author: 'Bông Mai',
    role: 'Kinh Doanh',
    avatar: '/assets/banner.jpg',
  },
  {
    id: 3,
    content: `Mình tự nhận thấy bản thân là một người lạc quan, thích được kết nối với mọi người xung 
    quanh. Đi cùng với đó là những điểm yếu như khó khăn trong quản lý tiền bạc, đôi khi sống hời hợt và chịu sự chi 
    phối của cảm xúc. Mình luôn thắc mắc tại sao lại có nét tính cách như vậy, có cách nào để khắc phục những vấn đề 
    trên không? Sau khi tra cứu thần số học trên trang web Tracuuthansohoc.com, mình được biết vì bản thân sở hữu 
    con số chủ đạo là con số 3 nên có các đặc điểm như vậy. Bên cạnh đó mình còn biết thêm về các chỉ số quan trọng 
    trong cuộc đời. Nếu tận dụng tốt hiểu biết về bản thân thông qua Nhân số học, mình tin tất cả mọi người sẽ sớm 
    tìm ra một lối đi phù hợp để phát triển hơn trong tương lai.`,
    author: 'Bông Mai',
    role: 'Kinh Doanh',
    avatar: '/assets/banner.jpg',
  },
  {
    id: 4,
    content: `Đi cùng với đó là những điểm yếu như khó khăn trong quản lý tiền bạc, đôi khi sống hời hợt và chịu sự chi 
    phối của cảm xúc. Mình luôn thắc mắc tại sao lại có nét tính cách như vậy, có cách nào để khắc phục những vấn đề 
    trên không? Sau khi tra cứu thần số học trên trang web Tracuuthansohoc.com, mình được biết vì bản thân sở hữu 
    con số chủ đạo là con số 3 nên có các đặc điểm như vậy. Bên cạnh đó mình còn biết thêm về các chỉ số quan trọng 
    trong cuộc đời. Nếu tận dụng tốt hiểu biết về bản thân thông qua Nhân số học, mình tin tất cả mọi người sẽ sớm 
    tìm ra một lối đi phù hợp để phát triển hơn trong tương lai.`,
    author: 'Bông Mai',
    role: 'Kinh Doanh',
    avatar: '/assets/banner.jpg',
  },
  // Thêm testimonial khác nếu cần
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  return (
    <>
      {/* Define animations using style tag */}
      <style>
        {`
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100%) rotateY(-10deg);
            }
            to {
              opacity: 1;
              transform: translateX(0) rotateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-100%) rotateY(10deg);
            }
            to {
              opacity: 1;
              transform: translateX(0) rotateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div className='relative max-w-6xl mx-auto mt-20 mb-20 px-4'>
        <div className='relative border border-white rounded-2xl p-1 shadow-lg'>
          <div
            className='relative rounded-xl overflow-hidden'
            style={{
              background:
                'linear-gradient(to right, rgba(255,100,100,0.3), rgba(255,0,255,0.3))',
            }}
          >
            <h2 className='text-center text-2xl md:text-3xl font-bold pt-12 pb-8 text-white px-4'>
              CHIA SẺ TỪ NHỮNG CÁ NHÂN
              <br />
              ĐÃ TÌM THẤY SỰ ĐỘT PHÁ CUỘC ĐỜI NHỜ NHÂN SỐ HỌC
            </h2>

            <div className='relative px-4 md:px-12 pb-12'>
              <button
                onClick={() => {
                  setDirection(-1);
                  setCurrentSlide(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length,
                  );
                }}
                className='absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 rounded-full w-10 h-10 flex items-center justify-center text-white z-10 transition-all duration-300 hover:scale-110'
              >
                ←
              </button>

              <div className='min-h-[300px] flex items-center justify-center'>
                <div
                  key={currentSlide}
                  className='text-white text-center max-w-4xl mx-auto'
                  style={
                    direction >= 0 ? styles.slideInRight : styles.slideInLeft
                  }
                >
                  <div className='h-[200px] overflow-y-auto mb-8'>
                    <p className='leading-relaxed text-sm md:text-base px-4'>
                      {testimonials[currentSlide].content}
                    </p>
                  </div>

                  <div
                    className='flex flex-col items-center pt-4'
                    style={styles.fadeIn}
                  >
                    <img
                      src={testimonials[currentSlide].avatar}
                      alt={testimonials[currentSlide].author}
                      className='w-16 h-16 rounded-full object-cover mb-4 border-2 border-white/50 hover:scale-110 transition-transform duration-300'
                    />
                    <h3 className='font-semibold text-xl'>
                      {testimonials[currentSlide].author}
                    </h3>
                    <p className='text-white/80'>
                      {testimonials[currentSlide].role}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setDirection(1);
                  setCurrentSlide((prev) => (prev + 1) % testimonials.length);
                }}
                className='absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 rounded-full w-10 h-10 flex items-center justify-center text-white z-10 transition-all duration-300 hover:scale-110'
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
