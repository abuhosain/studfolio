import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Typography, Button } from 'antd';
import { ArrowRightOutlined, PlayCircleOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const { Title, Paragraph } = Typography;

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop',
      title: 'Dream Big, Achieve Bigger',
      subtitle: 'Your potential is limitless',
      description: 'Every great achievement starts with a single step. Believe in yourself and take that step today.',
      buttonText: 'Start Your Journey'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=1080&fit=crop',
      title: 'Success is a Journey',
      subtitle: 'Not a destination',
      description: 'Every expert was once a beginner. Every professional was once an amateur. Keep learning, keep growing.',
      buttonText: 'Learn More'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
      title: 'Innovation Starts Here',
      subtitle: 'Build the future',
      description: 'The best way to predict the future is to create it. Let your creativity and passion drive innovation.',
      buttonText: 'Create Portfolio'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop',
      title: 'Teamwork Makes Dreams Work',
      subtitle: 'Connect and collaborate',
      description: 'Alone we can do so little; together we can do so much. Build meaningful connections and achieve greatness.',
      buttonText: 'Join Community'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop',
      title: 'Never Stop Learning',
      subtitle: 'Knowledge is power',
      description: 'In a world that is constantly changing, the only strategy that is guaranteed to fail is not taking risks.',
      buttonText: 'Explore Now'
    }
  ];

  return (
    <div style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        style={{
          height: '100%',
          '--swiper-navigation-color': '#ffffff',
          '--swiper-pagination-color': '#ffffff',
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              style={{
                position: 'relative',
                height: '100vh',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.4)',
                  zIndex: 1,
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  textAlign: 'center',
                  color: 'white',
                  width: '100%',
                  padding: '0',
                }}
              >
                <Title
                  level={1}
                  style={{
                    color: 'white',
                    fontSize: '4rem',
                    fontWeight: '700',
                    marginBottom: '16px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    lineHeight: '1.1',
                  }}
                >
                  {slide.title}
                </Title>

                <Title
                  level={3}
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '1.5rem',
                    fontWeight: '300',
                    marginBottom: '24px',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  }}
                >
                  {slide.subtitle}
                </Title>

                <Paragraph
                  style={{
                    color: 'rgba(255,255,255,0.95)',
                    fontSize: '1.2rem',
                    marginBottom: '40px',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    lineHeight: '1.6',
                  }}
                >
                  {slide.description}
                </Paragraph>

                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  style={{
                    height: '56px',
                    padding: '0 40px',
                    fontSize: '18px',
                    borderRadius: '28px',
                    background: 'rgba(255,255,255,0.2)',
                    border: '2px solid white',
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.color = '#1890ff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.2)';
                    e.target.style.color = 'white';
                  }}
                >
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div
        className="swiper-button-prev"
        style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: '50px',
          height: '50px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '50%',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.2)';
        }}
      >
        <LeftOutlined style={{ color: 'white', fontSize: '18px' }} />
      </div>

      <div
        className="swiper-button-next"
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: '50px',
          height: '50px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '50%',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.2)';
        }}
      >
        <RightOutlined style={{ color: 'white', fontSize: '18px' }} />
      </div>

      {/* Custom Pagination */}
      <div
        className="swiper-pagination"
        style={{
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}
      />

      {/* Play/Pause Button */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          right: '30px',
          zIndex: 10,
          width: '50px',
          height: '50px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '50%',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onClick={() => {
          // Toggle autoplay functionality
          console.log('Toggle autoplay');
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.2)';
        }}
      >
        <PlayCircleOutlined style={{ color: 'white', fontSize: '20px' }} />
      </div>
    </div>
  );
};

export default Banner;
