import React from 'react';
import { Typography, Row, Col, Button, Card, Statistic, Space, Divider } from 'antd';
import {
  ArrowRightOutlined,
  ProjectOutlined,
  TeamOutlined,
  UserOutlined,
  RocketOutlined,
  CheckCircleOutlined,
  CodeOutlined,
  BookOutlined,
  TrophyOutlined,
  GlobalOutlined,
  GithubOutlined,
  LinkedinOutlined,
  FileTextOutlined,
  BulbOutlined
} from '@ant-design/icons';
import Banner from './Banner';

const { Title, Paragraph, Text } = Typography;

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f0fdf4 100%)',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <Title
            level={1}
            style={{
              fontSize: '3.5rem',
              fontWeight: '300',
              color: '#1f2937',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}
          >
            Build Your <span style={{ color: '#3b82f6', fontWeight: '400' }}>Student Portfolio</span>
            <br />
            <span style={{ color: '#059669', fontSize: '2.5rem' }}>CST Session 2223</span>
          </Title>

          <Paragraph
            style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '800px',
              margin: '0 auto 48px',
              lineHeight: '1.6'
            }}
          >
            Join your fellow <span style={{ color: '#3b82f6', fontWeight: '600' }}>Computer Science & Technology</span> students
            from <span style={{ color: '#059669', fontWeight: '600' }}>Bogura Polytechnic Institute</span> in creating
            professional portfolios that showcase your coding projects, skills, and achievements.
          </Paragraph>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              type="primary"
              size="large"
              icon={<CodeOutlined />}
              style={{
                height: '48px',
                padding: '0 32px',
                fontSize: '16px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                border: 'none',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
              }}
            >
              Start Coding Portfolio
            </Button>
            <Button
              size="large"
              icon={<ProjectOutlined />}
              style={{
                height: '48px',
                padding: '0 32px',
                fontSize: '16px',
                borderRadius: '24px',
                borderColor: '#3b82f6',
                color: '#3b82f6'
              }}
            >
              View Student Projects
            </Button>
          </div>
        </div>
      </div>

      {/* CST Community Stats */}
      <div style={{ background: '#ffffff', padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Title level={2} style={{ color: '#1f2937', fontSize: '2rem', fontWeight: '300' }}>
              Our <span style={{ color: '#3b82f6' }}>CST Community</span> at a Glance
            </Title>
            <Paragraph style={{ color: '#6b7280', fontSize: '16px' }}>
              Bogura Polytechnic Institute - Computer Science & Technology, Session 2223
            </Paragraph>
          </div>

          <Row gutter={[32, 32]} justify="center">
            <Col xs={12} sm={8} md={6}>
              <Card style={{ textAlign: 'center', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <Statistic
                  title={<span style={{ color: '#6b7280', fontSize: '14px' }}>CST Students</span>}
                  value={40}
                  suffix="+"
                  valueStyle={{ color: '#3b82f6', fontSize: '28px', fontWeight: '600' }}
                />
              </Card>
            </Col>
            <Col xs={12} sm={8} md={6}>
              <Card style={{ textAlign: 'center', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <Statistic
                  title={<span style={{ color: '#6b7280', fontSize: '14px' }}>Projects Built</span>}
                  value={150}
                  suffix="+"
                  valueStyle={{ color: '#059669', fontSize: '28px', fontWeight: '600' }}
                />
              </Card>
            </Col>
            <Col xs={12} sm={8} md={6}>
              <Card style={{ textAlign: 'center', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <Statistic
                  title={<span style={{ color: '#6b7280', fontSize: '14px' }}>Portfolios Created</span>}
                  value={35}
                  suffix="+"
                  valueStyle={{ color: '#7c3aed', fontSize: '28px', fontWeight: '600' }}
                />
              </Card>
            </Col>
            <Col xs={12} sm={8} md={6}>
              <Card style={{ textAlign: 'center', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <Statistic
                  title={<span style={{ color: '#6b7280', fontSize: '14px' }}>Technologies Used</span>}
                  value={25}
                  suffix="+"
                  valueStyle={{ color: '#f59e0b', fontSize: '28px', fontWeight: '600' }}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Features Section - What Students Can Do */}
      <div style={{ padding: '80px 0', background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <Title level={2} style={{ color: '#1f2937', fontSize: '2.5rem', fontWeight: '300' }}>
              What You Can <span style={{ color: '#3b82f6' }}>Build Here</span>
            </Title>
            <Paragraph style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Everything a CST student needs to showcase their technical skills and projects
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} lg={8}>
              <Card
                style={{
                  height: '100%',
                  border: 'none',
                  borderRadius: '16px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)'
                }}
                bodyStyle={{ padding: '32px' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px'
                  }}>
                    <CodeOutlined style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                  <Title level={4} style={{ color: '#1f2937', marginBottom: '16px' }}>
                    Project Showcase
                  </Title>
                  <Paragraph style={{ color: '#6b7280', fontSize: '16px' }}>
                    Display your coding projects, web applications, mobile apps, and software solutions with live demos and source code links.
                  </Paragraph>
                </div>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card
                style={{
                  height: '100%',
                  border: 'none',
                  borderRadius: '16px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)'
                }}
                bodyStyle={{ padding: '32px' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, #059669, #10b981)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px'
                  }}>
                    <BookOutlined style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                  <Title level={4} style={{ color: '#1f2937', marginBottom: '16px' }}>
                    Skills & Certifications
                  </Title>
                  <Paragraph style={{ color: '#6b7280', fontSize: '16px' }}>
                    Highlight your programming languages, frameworks, tools, and certifications. Show your learning journey and achievements.
                  </Paragraph>
                </div>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card
                style={{
                  height: '100%',
                  border: 'none',
                  borderRadius: '16px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)'
                }}
                bodyStyle={{ padding: '32px' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px'
                  }}>
                    <TeamOutlined style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                  <Title level={4} style={{ color: '#1f2937', marginBottom: '16px' }}>
                    Connect & Collaborate
                  </Title>
                  <Paragraph style={{ color: '#6b7280', fontSize: '16px' }}>
                    Connect with fellow CST students, share ideas, collaborate on projects, and build your professional network.
                  </Paragraph>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Technologies & Tools Section */}
      <div style={{ background: '#ffffff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <Title level={2} style={{ color: '#1f2937', fontSize: '2.5rem', fontWeight: '300' }}>
              Technologies You Can <span style={{ color: '#059669' }}>Showcase</span>
            </Title>
            <Paragraph style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Build portfolios featuring the latest technologies and frameworks
            </Paragraph>
          </div>

          <Row gutter={[24, 24]} justify="center">
            <Col xs={12} sm={8} md={6} lg={4}>
              <Card style={{ textAlign: 'center', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚛️</div>
                <Text style={{ color: '#1f2937', fontWeight: '500' }}>React</Text>
              </Card>
            </Col>
            <Col xs={12} sm={8} md={6} lg={4}>
              <Card style={{ textAlign: 'center', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🟢</div>
                <Text style={{ color: '#1f2937', fontWeight: '500' }}>Node.js</Text>
              </Card>
            </Col>
            <Col xs={12} sm={8} md={6} lg={4}>
              <Card style={{ textAlign: 'center', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🐍</div>
                <Text style={{ color: '#1f2937', fontWeight: '500' }}>Python</Text>
              </Card>
            </Col>
            <Col xs={12} sm={8} md={6} lg={4}>
              <Card style={{ textAlign: 'center', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>💎</div>
                <Text style={{ color: '#1f2937', fontWeight: '500' }}>JavaScript</Text>
              </Card>
            </Col>
            <Col xs={12} sm={8} md={6} lg={4}>
              <Card style={{ textAlign: 'center', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>☕</div>
                <Text style={{ color: '#1f2937', fontWeight: '500' }}>Java</Text>
              </Card>
            </Col>
            <Col xs={12} sm={8} md={6} lg={4}>
              <Card style={{ textAlign: 'center', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🗄️</div>
                <Text style={{ color: '#1f2937', fontWeight: '500' }}>Database</Text>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Student Success Stories Preview */}
      <div style={{ padding: '80px 0', background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <Title level={2} style={{ color: '#1f2937', fontSize: '2.5rem', fontWeight: '300' }}>
              What Our <span style={{ color: '#7c3aed' }}>Students</span> Are Building
            </Title>
            <Paragraph style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Real projects from CST students at Bogura Polytechnic Institute
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card style={{ border: 'none', boxShadow: '0 8px 25px rgba(0,0,0,0.1)', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <UserOutlined style={{ color: 'white', fontSize: '20px' }} />
                  </div>
                  <div>
                    <Title level={5} style={{ margin: 0, color: '#1f2937' }}>Polash Kumar</Title>
                    <Text style={{ color: '#6b7280' }}>CST Student - Roll: 515401</Text>
                  </div>
                </div>
                <Title level={4} style={{ color: '#1f2937', marginBottom: '12px' }}>
                  E-Commerce Web Application
                </Title>
                <Paragraph style={{ color: '#6b7280', marginBottom: '16px' }}>
                  Built a full-stack e-commerce platform using React, Node.js, and MongoDB. Features include user authentication,
                  product management, and payment integration.
                </Paragraph>
                <Space>
                  <Button size="small" icon={<GithubOutlined />}>View Code</Button>
                  <Button size="small" icon={<GlobalOutlined />}>Live Demo</Button>
                </Space>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card style={{ border: 'none', boxShadow: '0 8px 25px rgba(0,0,0,0.1)', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #059669, #10b981)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <UserOutlined style={{ color: 'white', fontSize: '20px' }} />
                  </div>
                  <div>
                    <Title level={5} style={{ margin: 0, color: '#1f2937' }}>Md. Al Amin</Title>
                    <Text style={{ color: '#6b7280' }}>CST Student - Roll: 616383</Text>
                  </div>
                </div>
                <Title level={4} style={{ color: '#1f2937', marginBottom: '12px' }}>
                  Student Management System
                </Title>
                <Paragraph style={{ color: '#6b7280', marginBottom: '16px' }}>
                  Developed a comprehensive student management system using Python Django and PostgreSQL.
                  Includes attendance tracking, grade management, and report generation.
                </Paragraph>
                <Space>
                  <Button size="small" icon={<GithubOutlined />}>View Code</Button>
                  <Button size="small" icon={<FileTextOutlined />}>Documentation</Button>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <Title level={2} style={{ color: 'white', fontSize: '2.5rem', fontWeight: '300', marginBottom: '24px' }}>
            Ready to Build Your <span style={{ color: '#fbbf24' }}>CST Portfolio</span>?
          </Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', marginBottom: '40px' }}>
            Join your fellow Computer Science & Technology students from Bogura Polytechnic Institute, Session 2223,
            and start showcasing your coding projects and technical skills today!
          </Paragraph>
          <Space size="large">
            <Button
              type="primary"
              size="large"
              icon={<RocketOutlined />}
              style={{
                height: '56px',
                padding: '0 40px',
                fontSize: '18px',
                borderRadius: '28px',
                background: 'white',
                color: '#3b82f6',
                border: 'none',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
              }}
            >
              Start Building Now
            </Button>
            <Button
              size="large"
              icon={<BulbOutlined />}
              style={{
                height: '56px',
                padding: '0 40px',
                fontSize: '18px',
                borderRadius: '28px',
                border: '2px solid white',
                color: 'white',
                background: 'transparent'
              }}
            >
              Get Inspired
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Home;