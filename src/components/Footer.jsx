import React from 'react';
import { Link } from 'react-router';
import { Typography, Row, Col, Divider } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  ProjectOutlined,
  ContactsOutlined,
  UserOutlined,
  BookOutlined,
  TrophyOutlined,
  RocketOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Footer = () => {
  return (
    <footer style={{
      background: '#f9fafb',
      color: '#1f2937',
      borderTop: '1px solid #e5e7eb',
      padding: '64px 0'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <Row gutter={[48, 32]}>
          {/* About Section */}
          <Col xs={24} sm={12} lg={6}>
            <div style={{ marginBottom: '24px' }}>
              <Title level={3} style={{ color: '#1f2937', marginBottom: '16px', fontSize: '20px', textAlign: 'left' }}>
                About Studfolio
              </Title>
              <Paragraph style={{ color: '#6b7280', lineHeight: '1.6', textAlign: 'left' }}>
                A comprehensive profile platform for students of
                <span style={{ color: '#2563eb', fontWeight: '600' }}> Bogura Polytechnic Institute</span>,
                specifically designed for <span style={{ color: '#059669', fontWeight: '600' }}>Computer Science & Technology (CST)</span>
                students of <span style={{ color: '#7c3aed', fontWeight: '600' }}>Session 2223</span>.
              </Paragraph>
            </div>
          </Col>

          {/* Quick Stats */}
          <Col xs={24} sm={12} lg={6}>
            <div style={{ marginBottom: '24px' }}>
              <Title level={3} style={{ color: '#1f2937', marginBottom: '16px', fontSize: '20px', textAlign: 'left' }}>
                Our Community
              </Title>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <UserOutlined style={{ color: 'white', fontSize: '14px' }} />
                  </div>
                  <div>
                    <Text style={{ color: '#1f2937', fontWeight: '600' }}>40+</Text>
                    <Text style={{ color: '#6b7280', marginLeft: '8px' }}>CST Students</Text>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BookOutlined style={{ color: 'white', fontSize: '14px' }} />
                  </div>
                  <div>
                    <Text style={{ color: '#1f2937', fontWeight: '600' }}>5+</Text>
                    <Text style={{ color: '#6b7280', marginLeft: '8px' }}>Projects Showcased</Text>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#8b5cf6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TrophyOutlined style={{ color: 'white', fontSize: '14px' }} />
                  </div>
                  <div>
                    <Text style={{ color: '#1f2937', fontWeight: '600' }}>3+</Text>
                    <Text style={{ color: '#6b7280', marginLeft: '8px' }}>Awards Won</Text>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#f59e0b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <RocketOutlined style={{ color: 'white', fontSize: '14px' }} />
                  </div>
                  <div>
                    <Text style={{ color: '#1f2937', fontWeight: '600' }}>100%</Text>
                    <Text style={{ color: '#6b7280', marginLeft: '8px' }}>Success Rate</Text>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Navigation */}
          <Col xs={24} sm={12} lg={6}>
            <div style={{ marginBottom: '24px' }}>
              <Title level={3} style={{ color: '#1f2937', marginBottom: '16px', fontSize: '20px', textAlign: 'left' }}>
                Quick Links
              </Title>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <Link
                    to="/"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#6b7280',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                    onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                  >
                    <HomeOutlined style={{ marginRight: '8px' }} />
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    to="/about"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#6b7280',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                    onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                  >
                    <InfoCircleOutlined style={{ marginRight: '8px' }} />
                    About
                  </Link>
                </div>
                <div>
                  <Link
                    to="/projects"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#6b7280',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                    onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                  >
                    <ProjectOutlined style={{ marginRight: '8px' }} />
                    Projects
                  </Link>
                </div>
                <div>
                  <Link
                    to="/contact"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#6b7280',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                    onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                  >
                    <ContactsOutlined style={{ marginRight: '8px' }} />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          {/* Contact & Credits */}
          <Col xs={24} sm={12} lg={6}>
            <div style={{ marginBottom: '24px' }}>
              <Title level={3} style={{ color: '#1f2937', marginBottom: '16px', fontSize: '20px', textAlign: 'left' }}>
                Contact & Credits
              </Title>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <GlobalOutlined style={{ color: '#2563eb' }} />
                  <a
                    href="https://bogura.polytechedu.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#6b7280',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                    onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                  >
                    bogura.polytechedu.com
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MailOutlined style={{ color: '#059669' }} />
                  <Text style={{ color: '#6b7280' }}>hello@studfolio.com</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <PhoneOutlined style={{ color: '#7c3aed' }} />
                  <Text style={{ color: '#6b7280' }}>+1 (555) 123-4567</Text>
                </div>
              </div>

               
            </div>
          </Col>
        </Row>

        <Divider style={{ borderColor: '#d1d5db', margin: '32px 0' }} />

        {/* Bottom Section */}
        <div style={{ textAlign: 'center' }}>
          <Row justify="center" align="middle">
            <Col xs={24} sm={12} style={{ textAlign: 'center' }}>
              <Text style={{ color: '#9ca3af' }}>
                © {new Date().getFullYear()} Studfolio. All rights reserved.
              </Text>
            </Col>
            <Col xs={24} sm={12} style={{ textAlign: 'center' }}>
              <Text style={{ color: '#9ca3af' }}>
                Made with ❤️ Helped by <a
                  href="https://www.neexg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#2563eb',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#1d4ed8'}
                  onMouseLeave={(e) => e.target.style.color = '#2563eb'}
                >
                   NeexG
                </a>
              </Text>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
