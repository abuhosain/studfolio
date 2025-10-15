import React from 'react';
import { Link } from 'react-router';
import { ArrowLeftOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const Contact = () => {
  const onFinish = (values) => {
    console.log('Contact form values:', values);
  };

  return (
    <div className="contact w-full">
      <div className="w-full py-16">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8 group"
          >
            <ArrowLeftOutlined className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-gray-800 mb-6">
              Get in <span className="text-blue-500 font-normal">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a question or want to work together? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MailOutlined className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">hello@studfolio.com</p>
                    <p className="text-gray-600">support@studfolio.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneOutlined className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon - Fri, 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <EnvironmentOutlined className="text-purple-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Office</h3>
                    <p className="text-gray-600">123 Innovation Street</p>
                    <p className="text-gray-600">Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Send us a Message</h2>

            <Form
              name="contact"
              onFinish={onFinish}
              layout="vertical"
              size="large"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item
                  name="firstName"
                  rules={[{ required: true, message: 'Please input your first name!' }]}
                  label={<span className="text-gray-700 font-medium">First Name</span>}
                >
                  <Input placeholder="John" className="rounded-lg" />
                </Form.Item>

                <Form.Item
                  name="lastName"
                  rules={[{ required: true, message: 'Please input your last name!' }]}
                  label={<span className="text-gray-700 font-medium">Last Name</span>}
                >
                  <Input placeholder="Doe" className="rounded-lg" />
                </Form.Item>
              </div>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
                label={<span className="text-gray-700 font-medium">Email</span>}
              >
                <Input placeholder="john@example.com" className="rounded-lg" />
              </Form.Item>

              <Form.Item
                name="subject"
                rules={[{ required: true, message: 'Please input the subject!' }]}
                label={<span className="text-gray-700 font-medium">Subject</span>}
              >
                <Input placeholder="How can we help you?" className="rounded-lg" />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[{ required: true, message: 'Please input your message!' }]}
                label={<span className="text-gray-700 font-medium">Message</span>}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Tell us more about your project or question..."
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SendOutlined />}
                  className="w-full bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 rounded-lg shadow-md"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
