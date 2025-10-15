import React from 'react';
import { Typography, Row, Col, Button, Card, Statistic } from 'antd';
import {
  ArrowRightOutlined,
  ProjectOutlined,
  TeamOutlined,
  UserOutlined,
  RocketOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import Banner from './Banner';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* Hero Section */}
      <div style={{ padding: '80px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title
            level={1}
            style={{
              fontSize: '3.5rem',
              fontWeight: '300',
              color: '#333',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}
          >
            Build Your Professional
            <span style={{ color: '#1890ff', fontWeight: '400' }}> Portfolio</span>
          </Title>

          <Paragraph
            style={{
              fontSize: '1.25rem',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto 48px',
              lineHeight: '1.6'
            }}
          >
            Create stunning portfolios that showcase your skills, projects, and achievements.
            Stand out to employers and clients with a professional online presence.
          </Paragraph>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              type="primary"
              size="large"
              icon={<RocketOutlined />}
              style={{
                height: '48px',
                padding: '0 32px',
                fontSize: '16px',
                borderRadius: '24px',
                boxShadow: '0 4px 12px rgba(24, 144, 255, 0.3)'
              }}
            >
              Start Building
            </Button>
            <Button
              size="large"
              style={{
                height: '48px',
                padding: '0 32px',
                fontSize: '16px',
                borderRadius: '24px',
                borderColor: '#d9d9d9',
                color: '#666'
              }}
            >
              View Examples
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ background: '#ffffff', padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={12} sm={8} md={6}>
              <Statistic
                title={<span style={{ color: '#666', fontSize: '16px' }}>Active Users</span>}
                value={12500}
                suffix="+"
                valueStyle={{ color: '#1890ff', fontSize: '32px', fontWeight: '600' }}
              />
            </Col>
            <Col xs={12} sm={8} md={6}>
              <Statistic
                title={<span style={{ color: '#666', fontSize: '16px' }}>Portfolios Created</span>}
                value={8750}
                suffix="+"
                valueStyle={{ color: '#52c41a', fontSize: '32px', fontWeight: '600' }}
              />
            </Col>
            <Col xs={12} sm={8} md={6}>
              <Statistic
                title={<span style={{ color: '#666', fontSize: '16px' }}>Success Rate</span>}
                value={94}
                suffix="%"
                valueStyle={{ color: '#faad14', fontSize: '32px', fontWeight: '600' }}
              />
            </Col>
            <Col xs={12} sm={8} md={6}>
              <Statistic
                title={<span style={{ color: '#666', fontSize: '16px' }}>Countries</span>}
                value={45}
                suffix="+"
                valueStyle={{ color: '#722ed1', fontSize: '32px', fontWeight: '600' }}
              />
            </Col>
          </Row>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <Title level={2} style={{ color: '#333', fontSize: '2.5rem', fontWeight: '300' }}>
              Why Choose Studfolio?
            </Title>
            <Paragraph style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Everything you need to create a professional portfolio that gets noticed
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} lg={8}>
              <Card
                style={{
                  height: '100%',
                  border: '1px solid #f0f0f0',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}
                bodyStyle={{ padding: '32px' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, #1890ff, #40a9ff)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px'
                  }}>
                    <ProjectOutlined style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                  <Title level={4} style={{ color: '#333', marginBottom: '16px' }}>
                    Professional Templates
                  </Title>
                  <Paragraph style={{ color: '#666', fontSize: '16px' }}>
                    Choose from a variety of professionally designed templates that are optimized for different industries and career paths.
                  </Paragraph>
                </div>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card
                style={{
                  height: '100%',
                  border: '1px solid #f0f0f0',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}
                bodyStyle={{ padding: '32px' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, #52c41a, #73d13d)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px'
                  }}>
                    <UserOutlined style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                  <Title level={4} style={{ color: '#333', marginBottom: '16px' }}>
                    Easy to Use
                  </Title>
                  <Paragraph style={{ color: '#666', fontSize: '16px' }}>
                    Intuitive drag-and-drop interface makes it simple to create and customize your portfolio without any coding knowledge.
                  </Paragraph>
                </div>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card
                style={{
                  height: '100%',
                  border: '1px solid #f0f0f0',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}
                bodyStyle={{ padding: '32px' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, #faad14, #ffc53d)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px'
                  }}>
                    <TeamOutlined style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                  <Title level={4} style={{ color: '#333', marginBottom: '16px' }}>
                    Global Network
                  </Title>
                  <Paragraph style={{ color: '#666', fontSize: '16px' }}>
                    Connect with professionals worldwide and get discovered by top employers and clients in your field.
                  </Paragraph>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Benefits Section */}
      <div style={{ background: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <Title level={2} style={{ color: '#333', fontSize: '2.5rem', fontWeight: '300' }}>
              What You'll Get
            </Title>
            <Paragraph style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              All the tools you need to create a portfolio that stands out
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '32px' }}>
                <CheckCircleOutlined style={{ fontSize: '20px', color: '#52c41a', marginTop: '4px' }} />
                <div>
                  <Title level={5} style={{ color: '#333', marginBottom: '8px' }}>
                    Responsive Design
                  </Title>
                  <Paragraph style={{ color: '#666', margin: 0 }}>
                    Your portfolio will look perfect on all devices - desktop, tablet, and mobile.
                  </Paragraph>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '32px' }}>
                <CheckCircleOutlined style={{ fontSize: '20px', color: '#52c41a', marginTop: '4px' }} />
                <div>
                  <Title level={5} style={{ color: '#333', marginBottom: '8px' }}>
                    SEO Optimized
                  </Title>
                  <Paragraph style={{ color: '#666', margin: 0 }}>
                    Built-in SEO features help your portfolio rank higher in search results.
                  </Paragraph>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '32px' }}>
                <CheckCircleOutlined style={{ fontSize: '20px', color: '#52c41a', marginTop: '4px' }} />
                <div>
                  <Title level={5} style={{ color: '#333', marginBottom: '8px' }}>
                    Analytics Dashboard
                  </Title>
                  <Paragraph style={{ color: '#666', margin: 0 }}>
                    Track visitor engagement and portfolio performance with detailed analytics.
                  </Paragraph>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '32px' }}>
                <CheckCircleOutlined style={{ fontSize: '20px', color: '#52c41a', marginTop: '4px' }} />
                <div>
                  <Title level={5} style={{ color: '#333', marginBottom: '8px' }}>
                    24/7 Support
                  </Title>
                  <Paragraph style={{ color: '#666', margin: 0 }}>
                    Get help whenever you need it with our dedicated support team.
                  </Paragraph>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        background: 'linear-gradient(135deg, #1890ff, #40a9ff)',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={2} style={{ color: 'white', fontSize: '2.5rem', fontWeight: '300', marginBottom: '24px' }}>
            Ready to Build Your Professional Portfolio?
          </Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', marginBottom: '40px' }}>
            Join thousands of professionals who have already created their portfolios with Studfolio
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
              background: 'white',
              color: '#1890ff',
              border: 'none',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
            }}
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;