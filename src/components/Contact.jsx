import React from 'react';
import { Typography, Card, Button, Form, Input, Row, Col, Space, Divider } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined, ClockCircleOutlined, GlobalOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log('Contact form values:', values);
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f0fdf4 100%)',
      minHeight: '100vh',
      padding: '80px 0'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Header Section */}
          <div style={{
            textAlign: 'center',
            marginBottom: '64px'
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
              Get in <span style={{ color: '#3b82f6', fontWeight: '400' }}>Touch</span>
            </Title>
            <Paragraph style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Have a question or want to work together? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </Paragraph>
          </div>

          {/* Contact Information & Form Section */}
          <Row gutter={[48, 32]} style={{ marginBottom: '64px' }}>
            {/* Contact Information */}
            <Col xs={24} lg={10}>
              <Card style={{
                height: '100%',
                border: 'none',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)'
              }}>
                <Title level={2} style={{ color: '#1f2937', marginBottom: '32px', fontSize: '24px' }}>
                  Contact Information
                </Title>

                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <MailOutlined style={{ color: 'white', fontSize: '20px' }} />
                    </div>
                    <div>
                      <Title level={4} style={{ color: '#1f2937', marginBottom: '8px', fontSize: '18px' }}>Email</Title>
                      <Text style={{ color: '#6b7280', display: 'block' }}>hello@studfolio.com</Text>
                      <Text style={{ color: '#6b7280', display: 'block' }}>support@studfolio.com</Text>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <PhoneOutlined style={{ color: 'white', fontSize: '20px' }} />
                    </div>
                    <div>
                      <Title level={4} style={{ color: '#1f2937', marginBottom: '8px', fontSize: '18px' }}>Phone</Title>
                      <Text style={{ color: '#6b7280', display: 'block' }}>+880 123 456 7890</Text>
                      <Text style={{ color: '#6b7280', display: 'block' }}>Mon - Fri, 9am - 6pm</Text>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <EnvironmentOutlined style={{ color: 'white', fontSize: '20px' }} />
                    </div>
                    <div>
                      <Title level={4} style={{ color: '#1f2937', marginBottom: '8px', fontSize: '18px' }}>Office</Title>
                      <Text style={{ color: '#6b7280', display: 'block' }}>Bogura Polytechnic Institute</Text>
                      <Text style={{ color: '#6b7280', display: 'block' }}>Bogura, Bangladesh</Text>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <ClockCircleOutlined style={{ color: 'white', fontSize: '20px' }} />
                    </div>
                    <div>
                      <Title level={4} style={{ color: '#1f2937', marginBottom: '8px', fontSize: '18px' }}>Working Hours</Title>
                      <Text style={{ color: '#6b7280', display: 'block' }}>Monday - Friday: 9:00 AM - 6:00 PM</Text>
                      <Text style={{ color: '#6b7280', display: 'block' }}>Saturday: 10:00 AM - 4:00 PM</Text>
                    </div>
                  </div>
                </Space>
              </Card>
            </Col>

            {/* Contact Form */}
            <Col xs={24} lg={14}>
              <Card style={{
                height: '100%',
                border: 'none',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)'
              }}>
                <Title level={2} style={{ color: '#1f2937', marginBottom: '32px', fontSize: '24px' }}>
                  Send us a Message
                </Title>

                <Form
                  name="contact"
                  onFinish={onFinish}
                  layout="vertical"
                  size="large"
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="firstName"
                        rules={[{ required: true, message: 'Please input your first name!' }]}
                        label={<Text style={{ color: '#374151', fontWeight: '500' }}>First Name</Text>}
                      >
                        <Input
                          placeholder="John"
                          style={{
                            borderRadius: '8px',
                            border: '1px solid #d1d5db',
                            padding: '12px 16px'
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="lastName"
                        rules={[{ required: true, message: 'Please input your last name!' }]}
                        label={<Text style={{ color: '#374151', fontWeight: '500' }}>Last Name</Text>}
                      >
                        <Input
                          placeholder="Doe"
                          style={{
                            borderRadius: '8px',
                            border: '1px solid #d1d5db',
                            padding: '12px 16px'
                          }}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: 'Please input your email!' },
                      { type: 'email', message: 'Please enter a valid email!' }
                    ]}
                    label={<Text style={{ color: '#374151', fontWeight: '500' }}>Email</Text>}
                  >
                    <Input
                      placeholder="john@example.com"
                      style={{
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        padding: '12px 16px'
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    name="subject"
                    rules={[{ required: true, message: 'Please input the subject!' }]}
                    label={<Text style={{ color: '#374151', fontWeight: '500' }}>Subject</Text>}
                  >
                    <Input
                      placeholder="How can we help you?"
                      style={{
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        padding: '12px 16px'
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    rules={[{ required: true, message: 'Please input your message!' }]}
                    label={<Text style={{ color: '#374151', fontWeight: '500' }}>Message</Text>}
                  >
                    <Input.TextArea
                      rows={4}
                      placeholder="Tell us more about your project or question..."
                      style={{
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        padding: '12px 16px'
                      }}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<SendOutlined />}
                      style={{
                        width: '100%',
                        height: '48px',
                        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '600',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                      }}
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>

          {/* Map Section */}
          <Card style={{
            border: 'none',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            marginBottom: '32px'
          }}>
            <Title level={2} style={{ color: '#1f2937', marginBottom: '24px', fontSize: '24px', textAlign: 'center' }}>
              Find Us Here
            </Title>

            {/* Google Maps Embed */}
            <div style={{
              height: '400px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.1901184546364!2d89.37495447592119!3d24.82317114674759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54968d3b5cdd%3A0xd5c89978703585d6!2z4Kas4KaX4KeB4Kec4Ka-IOCmquCmsuCmv-Cmn-Cnh-CmleCmqOCmv-CmlSDgpofgpqjgp43gprjgpp_gpr_gpp_gpr_gpongpp8!5e0!3m2!1sbn!2sbd!4v1760554323350!5m2!1sbn!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bogura Polytechnic Institute Location"
              />
            </div>

            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <Text style={{ color: '#6b7280', fontSize: '16px' }}>
                📍 Bogura Polytechnic Institute, Bogura, Bangladesh
              </Text>
            </div>
          </Card>
        </Space>
      </div>
    </div>
  );
};

export default Contact;