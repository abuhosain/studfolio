import React from 'react';
import { Link } from 'react-router';
import { ArrowLeftOutlined, InfoCircleOutlined, TeamOutlined, RocketOutlined } from '@ant-design/icons';

const About = () => {
  return (
    <div className="about w-full">
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
              About <span className="text-blue-500 font-normal">Studfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to help students and professionals showcase their work,
              build their brand, and connect with opportunities that matter.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <InfoCircleOutlined className="text-2xl text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Empowering individuals to build professional portfolios that stand out and get noticed.
            </p>
          </div>

          <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <TeamOutlined className="text-2xl text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Team</h3>
            <p className="text-gray-600">
              A passionate group of developers and designers dedicated to your success.
            </p>
          </div>

          <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <RocketOutlined className="text-2xl text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Creating a world where talent is easily discovered and opportunities are accessible to all.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-light text-gray-800 mb-8">Ready to get started?</h2>
          <Link
            to="/"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Create Your Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
