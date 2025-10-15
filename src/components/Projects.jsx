import React from 'react';
import { Link } from 'react-router';
import { ArrowLeftOutlined, ProjectOutlined, GithubOutlined, LinkOutlined } from '@ant-design/icons';

const Projects = () => {
  return (
    <div className="projects w-full">
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
              Our <span className="text-blue-500 font-normal">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of innovative projects and solutions that showcase our expertise
              and commitment to excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
              <ProjectOutlined className="text-4xl text-blue-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Portfolio Platform</h3>
              <p className="text-gray-600 mb-4">A comprehensive platform for students and professionals to showcase their work.</p>
              <div className="flex space-x-3">
                <Link href="#" className="text-blue-500 hover:text-blue-600">
                  <GithubOutlined className="text-lg" />
                </Link>
                <Link href="#" className="text-blue-500 hover:text-blue-600">
                  <LinkOutlined className="text-lg" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="w-full h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
              <ProjectOutlined className="text-4xl text-green-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Management Tool</h3>
              <p className="text-gray-600 mb-4">An intuitive tool for managing and tracking project progress and deadlines.</p>
              <div className="flex space-x-3">
                <Link href="#" className="text-green-500 hover:text-green-600">
                  <GithubOutlined className="text-lg" />
                </Link>
                <Link href="#" className="text-green-500 hover:text-green-600">
                  <LinkOutlined className="text-lg" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <div className="w-full h-48 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
              <ProjectOutlined className="text-4xl text-purple-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Learning Management System</h3>
              <p className="text-gray-600 mb-4">A modern platform for educational content delivery and student engagement.</p>
              <div className="flex space-x-3">
                <Link href="#" className="text-purple-500 hover:text-purple-600">
                  <GithubOutlined className="text-lg" />
                </Link>
                <Link href="#" className="text-purple-500 hover:text-purple-600">
                  <LinkOutlined className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
