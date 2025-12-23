import React from 'react'; 
import { Typography, Card,  Row, Col, Space } from 'antd';
import {  InfoCircleOutlined, TeamOutlined, RocketOutlined, UserOutlined, BookOutlined, TrophyOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f0fdf4 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 0'
    }}>
      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
        padding: '0 24px',
        width: '100%'
      }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>

          {/* Header Section */}
          <div style={{
            textAlign: 'center',
            marginBottom: '64px',
            padding: '0 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Title
              level={1}
              style={{
                fontSize: '3rem',
                fontWeight: '300',
                color: '#1f2937',
                marginBottom: '24px'
              }}
            >
              About <span style={{ color: '#3b82f6', fontWeight: '400' }}>Studfolio</span>
            </Title>
            <Paragraph style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '896px',
              margin: '0 auto',
              lineHeight: '1.6',
              padding: '0 16px',
              textAlign: 'center'
            }}>
              We're building a comprehensive profile platform for students of
              <span style={{ color: '#3b82f6', fontWeight: '600' }}> Bogura Polytechnic Institute</span>,
              specifically designed for <span style={{ color: '#059669', fontWeight: '600' }}>Computer Science & Technology (CST) </span>
               students of <span style={{ color: '#7c3aed', fontWeight: '600' }}>Session 2223</span>.
            </Paragraph>
          </div>

          {/* Features Section */}
          <Row gutter={[32, 32]} style={{ marginBottom: '64px', padding: '0 16px', justifyContent: 'center' }}>
            <Col xs={24} md={12} lg={8}>
              <Card
                style={{
                  height: '100%',
                  textAlign: 'center',
                  border: 'none',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                bodyStyle={{ padding: '32px' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 8px 16px rgba(59, 130, 246, 0.3)'
                }}>
                  <InfoCircleOutlined style={{ fontSize: '32px', color: 'white' }} />
                </div>
                <Title level={3} style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
                  Our Mission
                </Title>
                <Paragraph style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  Empowering CST students of Bogura Polytechnic Institute to showcase their technical skills,
                  projects, and academic achievements in a professional portfolio platform.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={12} lg={8}>
              <Card
                style={{
                  height: '100%',
                  textAlign: 'center',
                  border: 'none',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                bodyStyle={{ padding: '32px' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 8px 16px rgba(16, 185, 129, 0.3)'
                }}>
                  <TeamOutlined style={{ fontSize: '32px', color: 'white' }} />
                </div>
                <Title level={3} style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
                  Our Community
                </Title>
                <Paragraph style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  A dedicated community of CST students from Bogura Polytechnic Institute,
                  Session 2223, working together to build their professional presence.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={12} lg={8}>
              <Card
                style={{
                  height: '100%',
                  textAlign: 'center',
                  border: 'none',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                bodyStyle={{ padding: '32px' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 8px 16px rgba(139, 92, 246, 0.3)'
                }}>
                  <RocketOutlined style={{ fontSize: '32px', color: 'white' }} />
                </div>
                <Title level={3} style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
                  Our Vision
                </Title>
                <Paragraph style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  Creating a platform where every CST student from Bogura Polytechnic Institute
                  can showcase their potential and connect with industry opportunities.
                </Paragraph>
              </Card>
            </Col>
          </Row>

          {/* Stats Section */}
          <Row gutter={[32, 32]} style={{ marginBottom: '64px', padding: '0 16px', justifyContent: 'center' }}>
            <Col xs={12} sm={6}>
              <Card style={{
                textAlign: 'center',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <UserOutlined style={{ fontSize: '24px', color: 'white' }} />
                </div>
                <Title level={2} style={{ fontSize: '32px', fontWeight: '700', color: '#2563eb', marginBottom: '8px' }}>40+</Title>
                <Paragraph style={{ color: '#6b7280', margin: 0 }}>CST Students</Paragraph>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card style={{
                textAlign: 'center',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: '#10b981',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <BookOutlined style={{ fontSize: '24px', color: 'white' }} />
                </div>
                <Title level={2} style={{ fontSize: '32px', fontWeight: '700', color: '#059669', marginBottom: '8px' }}>5+</Title>
                <Paragraph style={{ color: '#6b7280', margin: 0 }}>Projects Showcased</Paragraph>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card style={{
                textAlign: 'center',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: '#8b5cf6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <TrophyOutlined style={{ fontSize: '24px', color: 'white' }} />
                </div>
                <Title level={2} style={{ fontSize: '32px', fontWeight: '700', color: '#7c3aed', marginBottom: '8px' }}>3+</Title>
                <Paragraph style={{ color: '#6b7280', margin: 0 }}>Awards Won</Paragraph>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card style={{
                textAlign: 'center',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                background: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: '#f59e0b',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <RocketOutlined style={{ fontSize: '24px', color: 'white' }} />
                </div>
                <Title level={2} style={{ fontSize: '32px', fontWeight: '700', color: '#d97706', marginBottom: '8px' }}>100%</Title>
                <Paragraph style={{ color: '#6b7280', margin: 0 }}>Success Rate</Paragraph>
              </Card>
            </Col>
          </Row>
        </Space>
      </div>
    </div>
  );
};

export default About;
