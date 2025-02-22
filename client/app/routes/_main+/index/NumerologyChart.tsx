import React, { useState } from 'react';

const CircleArrows = () => {
  const [hoveredStates, setHoveredStates] = useState<{
    [key: number]: boolean;
    center?: boolean; // Thêm trạng thái hover cho center
  }>({});
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Thêm thông tin cho số 22 ở center
  const centerInfo = {
    image: '/assets/number/22b.png',
    hoverImage: '/assets/number/22.jpg',
    title: 'Số 22',
    description:
      '22 là một trong bộ ba số quan trọng trong Nhân số học (11, 22, 33). Theo đó, cả 3 số này được liên kết với nhau và tạo thành "Tam giác của sự khai sáng" (theo tiếng Anh là Triangle of Enlightenment). Mỗi con số trên đều mang một biểu tượng lớn và nhiều ý nghĩa nhỏ đặc thù. Những người mang vận mệnh thần số học số 22 thường có tham vọng lớn, khát khao phát triển cuộc đời. Đặc biệt, họ luôn có tố chất, phong thái của nhà lãnh đạo thông minh, tài ba.',
  };

  // Mảng chứa đường dẫn đến 11 hình ảnh khác nhau
  const numberInfo = [
    {
      image: '/assets/number/1b.png',
      hoverImage: '/assets/number/1.png',
      title: 'Số 1',
      description: 'Số 1 tượng trưng cho sự khởi đầu, độc lập và sáng tạo...',
    },
    {
      image: '/assets/number/2b.png',
      hoverImage: '/assets/number/2.png',
      title: 'Số 2',
      description: 'Số 2 đại diện cho sự hợp tác, quan hệ và trực giác...',
    },
    {
      image: '/assets/number/3b.png',
      hoverImage: '/assets/number/3.png',
      title: 'Số 3',
      description: 'Số 1 tượng trưng cho sự khởi đầu, độc lập và sáng tạo...',
    },
    {
      image: '/assets/number/4b.png',
      hoverImage: '/assets/number/4.png',
      title: 'Số 4',
      description: 'Số 1 tượng trưng cho sự khởi đầu, độc lập và sáng tạo...',
    },
    {
      image: '/assets/number/5b.png',
      hoverImage: '/assets/number/5.png',
      title: 'Số 5',
      description: 'Số 1 tượng trưng cho sự khởi đầu, độc lập và sáng tạo...',
    },
    {
      image: '/assets/number/6b.png',
      hoverImage: '/assets/number/6.png',
      title: 'Số 6',
      description: 'Số 1 tượng trưng cho sự khởi đầu, độc lập và sáng tạo...',
    },
    {
      image: '/assets/number/7b.png',
      hoverImage: '/assets/number/7.png',
      title: 'Số 7',
      description: 'Số 1 tượng trưng cho sự khởi đầu, độc lập và sáng tạo...',
    },
    {
      image: '/assets/number/8b.png',
      hoverImage: '/assets/number/8.png',
      title: 'Số 8',
      description: 'Số 1 tượng trưng cho sự khởi đầu, độc lập và sáng tạo...',
    },
    {
      image: '/assets/number/9b.png',
      hoverImage: '/assets/number/9.png',
      title: 'Số 9',
      description: 'Số 1 tượng trưng cho sự khởi đầu, độc lập và sáng tạo...',
    },
    {
      image: '/assets/number/11b.png',
      hoverImage: '/assets/number/11.png',
      title: 'Số 11',
      description: 'Số 1 tượng trưng cho sự khởi đầu, độc lập và sáng tạo...',
    },

    // ... Thêm thông tin cho các số còn lại
  ];

  return (
    <>
      <div className='hidden md:flex container mx-auto px-4'>
        <div className='flex flex-row items-start gap-8'>
          {/* Chart Section */}
          <div className='relative w-[450px] h-[450px]'>
            {/* Center Image */}
            <div
              style={{
                position: 'absolute',
                width: '150px',
                height: '150px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                zIndex: 1,
                cursor: 'pointer',
              }}
              onMouseEnter={() =>
                setHoveredStates((prev) => ({ ...prev, center: true }))
              }
              onMouseLeave={() =>
                setHoveredStates((prev) => ({ ...prev, center: false }))
              }
              onClick={() => setSelectedIndex(null)} // Khi click vào center, hiển thị mô tả của số 22
            >
              <img
                src={
                  hoveredStates.center || selectedIndex === null
                    ? centerInfo.hoverImage
                    : centerInfo.image
                }
                alt='Center'
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                }}
              />
            </div>

            {/* Images around the circle */}
            {numberInfo.map((info, index) => {
              const angle = index * (360 / 10) - 90;
              const radians = angle * (Math.PI / 180);
              const radius = 140; // Radius mới

              const x = Math.cos(radians) * radius;
              const y = Math.sin(radians) * radius;

              return (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    width: '120px',
                    height: '120px',
                    transform: `translate(${x}px, ${y}px)`,
                    left: '50%',
                    top: '50%',
                    marginLeft: '-60px',
                    marginTop: '-60px',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() =>
                    setHoveredStates((prev) => ({ ...prev, [index]: true }))
                  }
                  onMouseLeave={() =>
                    setHoveredStates((prev) => ({ ...prev, [index]: false }))
                  }
                  onClick={() => setSelectedIndex(index)}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transform: `rotate(${angle + 90}deg)`,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <img
                      src={
                        hoveredStates[index] || selectedIndex === index
                          ? info.hoverImage
                          : info.image
                      }
                      alt={`Image ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          {/* Desktop Description */}
          <div className='flex-1 max-w-2xl p-4'>
            <h2 className='text-3xl font-bold mb-6'>
              Ý NGHĨA CÁC CON SỐ TRONG THẦN SỐ HỌC PITAGO
            </h2>

            {selectedIndex !== null ? (
              <>
                <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>
                  {numberInfo[selectedIndex].title}
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#666',
                    marginBottom: '20px',
                  }}
                >
                  {numberInfo[selectedIndex].description}
                </p>
              </>
            ) : (
              // Default content when no number is selected
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#666',
                }}
              >
                22 là một trong bộ ba số quan trọng trong Nhân số học (11, 22,
                33). Theo đó, cả 3 số này được liên kết với nhau và tạo thành
                "Tam giác của sự khai sáng" (theo tiếng Anh là Triangle of
                Enlightenment). Mỗi con số trên đều mang một biểu tượng lớn và
                nhiều ý nghĩa nhỏ đặc thù. Những người mang vận mệnh thần số học
                số 22 thường có tham vọng lớn, khát khao phát triển cuộc đời.
                Đặc biệt, họ luôn có tố chất, phong thái của nhà lãnh đạo thông
                minh, tài ba.
              </p>
            )}

            <button
              style={{
                backgroundColor: '#C84B9B',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer',
                marginTop: '20px',
                transition: 'background-color 0.3s',
              }}
            >
              XEM CHI TIẾT
            </button>
          </div>
        </div>
      </div>

      <div className='md:hidden flex flex-col items-center px-4'>
        {/* Mobile Chart - Copy style từ desktop */}
        <div className='relative w-[300px] h-[300px]'>
          {/* Center Image - Giữ nguyên style từ desktop */}
          <div
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              zIndex: 1,
              cursor: 'pointer',
            }}
            onMouseEnter={() =>
              setHoveredStates((prev) => ({ ...prev, center: true }))
            }
            onMouseLeave={() =>
              setHoveredStates((prev) => ({ ...prev, center: false }))
            }
            onClick={() => setSelectedIndex(null)}
          >
            <img
              src={
                hoveredStates.center || selectedIndex === null
                  ? centerInfo.hoverImage
                  : centerInfo.image
              }
              alt='Center'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
              }}
            />
          </div>

          {/* Mobile Circle Numbers - Copy style từ desktop */}
          {numberInfo.map((info, index) => {
            const angle = index * (360 / 10) - 90;
            const radians = angle * (Math.PI / 180);
            const radius = 100; // Điều chỉnh radius phù hợp với kích thước mobile

            const x = Math.cos(radians) * radius;
            const y = Math.sin(radians) * radius;

            return (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  width: '80px',
                  height: '80px',
                  transform: `translate(${x}px, ${y}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-40px',
                  marginTop: '-40px',
                  cursor: 'pointer',
                }}
                onMouseEnter={() =>
                  setHoveredStates((prev) => ({ ...prev, [index]: true }))
                }
                onMouseLeave={() =>
                  setHoveredStates((prev) => ({ ...prev, [index]: false }))
                }
                onClick={() => setSelectedIndex(index)}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: `rotate(${angle + 90}deg)`,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <img
                    src={
                      hoveredStates[index] || selectedIndex === index
                        ? info.hoverImage
                        : info.image
                    }
                    alt={`Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      transition: 'all 0.3s ease',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Description */}
        <div className='text-center mt-8'>
          <h2 className='text-2xl font-bold mb-4'>
            Ý NGHĨA CÁC CON SỐ TRONG THẦN SỐ HỌC PITAGO
          </h2>
          {selectedIndex !== null ? (
            <>
              <h3 className='text-xl mb-3'>
                {numberInfo[selectedIndex].title}
              </h3>
              <p className='text-gray-600 mb-6'>
                {numberInfo[selectedIndex].description}
              </p>
            </>
          ) : (
            <p className='text-gray-600 mb-6'>{centerInfo.description}</p>
          )}
          <button className='bg-pink-600 text-white px-6 py-2 rounded-md'>
            XEM CHI TIẾT ›
          </button>
        </div>
      </div>
    </>
  );
};

export default CircleArrows;
