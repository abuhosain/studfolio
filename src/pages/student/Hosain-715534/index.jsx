import React from 'react';
import { Typography, Card, Row, Col, Tag, Button, Space, Avatar, Divider, Progress } from 'antd';
import {
  IdcardOutlined,
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  GlobalOutlined,
  ArrowLeftOutlined,
  TrophyOutlined,
  BookOutlined,
  CodeOutlined,
  RocketOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router';

const { Title, Paragraph, Text } = Typography;

const AbuHosainProfile = () => {
  const navigate = useNavigate();

  const studentData = {
    name: "Md. Abu Hosain",
    roll: "715534",
    department: "Computer Science & Technology (CST)",
    session: "2223",
    institute: "Bogura Polytechnic Institute",
    email: "abuhosain.cst715534@bpi.edu.bd",
    phone: "+880 123 456 7890",
    github: "https://github.com/abuhosain715534",
    linkedin: "https://linkedin.com/in/abuhosain715534",
    website: "https://abuhosain.dev",
    location: "Bogura, Bangladesh",
    bio: "Passionate Computer Science student with a strong interest in web development, software engineering, and emerging technologies. Always eager to learn new skills and contribute to innovative projects.",
    skills: {
      "Programming Languages": ["JavaScript", "Python", "Java", "C++", "PHP"],
      "Web Development": ["React", "Node.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
      "Database": ["MySQL", "MongoDB", "PostgreSQL"],
      "Tools & Technologies": ["Git", "VS Code", "Figma", "Postman", "Docker"],
      "Frameworks": ["Express.js", "Django", "Laravel"]
    },
    projects: [
      {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce application built with React and Node.js. Features include user authentication, product management, shopping cart, and payment integration.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
        github: "https://github.com/abuhosain715534/ecommerce",
        demo: "https://ecommerce-demo.abuhosain.dev",
        status: "Completed",
        image: "🛒"
      },
      {
        title: "Student Management System",
        description: "Comprehensive student management system for educational institutions with attendance tracking, grade management, and report generation.",
        technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        github: "https://github.com/abuhosain715534/sms",
        demo: "https://sms-demo.abuhosain.dev",
        status: "In Progress",
        image: "📚"
      },
      {
        title: "Weather App",
        description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
        technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
        github: "https://github.com/abuhosain715534/weather-app",
        demo: "https://weather.abuhosain.dev",
        status: "Completed",
        image: "🌤️"
      },
      {
        title: "Task Management Tool",
        description: "Collaborative task management application with real-time updates, team collaboration features, and project tracking.",
        technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
        github: "https://github.com/abuhosain715534/task-manager",
        demo: "https://tasks.abuhosain.dev",
        status: "Planning",
        image: "✅"
      }
    ],
    achievements: [
      {
        title: "Best Project Award",
        description: "Won first place in CST Department Project Competition 2023",
        date: "December 2023",
        icon: "🏆"
      },
      {
        title: "Hackathon Winner",
        description: "First place in TechFest 2023 Hackathon",
        date: "November 2023",
        icon: "🚀"
      },
      {
        title: "Academic Excellence",
        description: "Maintained GPA 3.8+ for 3 consecutive semesters",
        date: "2023",
        icon: "⭐"
      },
      {
        title: "Leadership Award",
        description: "Recognized for outstanding leadership in student activities",
        date: "October 2023",
        icon: "👑"
      }
    ],
    certifications: [
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "January 2024",
        credential: "AWS-CCP-715534"
      },
      {
        name: "React Developer Certification",
        issuer: "Meta",
        date: "December 2023",
        credential: "META-REACT-715534"
      },
      {
        name: "Python Programming Certificate",
        issuer: "Python Institute",
        date: "November 2023",
        credential: "PYTHON-PC-715534"
      }
    ],
    stats: {
      projectsCompleted: 8,
      linesOfCode: 25000,
      githubRepos: 12,
      technologiesLearned: 15
    }
  };

  const getSkillLevel = (skill) => {
    const levels = {
      "JavaScript": 90,
      "React": 85,
      "Node.js": 80,
      "Python": 75,
      "MySQL": 70,
      "Java": 65,
      "PHP": 60
    };
    return levels[skill] || 70;
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '40px 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Back Button */}
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/students')}
            style={{
              marginBottom: '24px',
              background: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white'
            }}
          >
            Back to Students
          </Button>

          {/* Profile Header */}
          <Card style={{
            border: 'none',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            overflow: 'hidden'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '40px 40px 60px 40px',
              textAlign: 'center',
              position: 'relative',
              margin: '-24px -24px 24px -24px'
            }}>
              <Avatar
                size={120}
                style={{
                  backgroundColor: '#667eea',
                  fontSize: '36px',
                  fontWeight: '700',
                  marginBottom: '20px',
                  border: '6px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              >
                AH
              </Avatar>
              <Title level={1} style={{ color: 'white', marginBottom: '8px', fontSize: '2.5rem' }}>
                {studentData.name}
              </Title>
              <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', display: 'block', marginBottom: '20px' }}>
                <IdcardOutlined style={{ marginRight: '8px' }} />
                Roll: {studentData.roll} | {studentData.department}
              </Text>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <Tag color="blue" style={{ fontSize: '14px', padding: '6px 16px', borderRadius: '20px' }}>
                  {studentData.institute}
                </Tag>
                <Tag color="green" style={{ fontSize: '14px', padding: '6px 16px', borderRadius: '20px' }}>
                  Session {studentData.session}
                </Tag>
                <Tag color="purple" style={{ fontSize: '14px', padding: '6px 16px', borderRadius: '20px' }}>
                  {studentData.location}
                </Tag>
              </div>
            </div>

            {/* Bio Section */}
            <div style={{ padding: '0 40px 40px 40px' }}>
              <Paragraph style={{
                fontSize: '16px',
                color: '#666',
                textAlign: 'center',
                lineHeight: '1.8',
                marginBottom: '40px'
              }}>
                {studentData.bio}
              </Paragraph>

              {/* Contact Links */}
              <Row gutter={[16, 16]} justify="center">
                <Col>
                  <Button
                    type="primary"
                    icon={<MailOutlined />}
                    href={`mailto:${studentData.email}`}
                    style={{ borderRadius: '20px', padding: '8px 20px' }}
                  >
                    Email
                  </Button>
                </Col>
                <Col>
                  <Button
                    icon={<GithubOutlined />}
                    href={studentData.github}
                    target="_blank"
                    style={{ borderRadius: '20px', padding: '8px 20px' }}
                  >
                    GitHub
                  </Button>
                </Col>
                <Col>
                  <Button
                    icon={<LinkedinOutlined />}
                    href={studentData.linkedin}
                    target="_blank"
                    style={{ borderRadius: '20px', padding: '8px 20px' }}
                  >
                    LinkedIn
                  </Button>
                </Col>
                <Col>
                  <Button
                    icon={<GlobalOutlined />}
                    href={studentData.website}
                    target="_blank"
                    style={{ borderRadius: '20px', padding: '8px 20px' }}
                  >
                    Portfolio
                  </Button>
                </Col>
              </Row>
            </div>
          </Card>

          <Row gutter={[24, 24]}>
            {/* Skills Section */}
            <Col xs={24} lg={12}>
              <Card
                title={
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CodeOutlined style={{ color: '#667eea', fontSize: '20px' }} />
                    <span style={{ fontSize: '18px', fontWeight: '600' }}>Technical Skills</span>
                  </div>
                }
                style={{
                  height: '100%',
                  border: 'none',
                  borderRadius: '16px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                }}
              >
                {Object.entries(studentData.skills).map(([category, skills]) => (
                  <div key={category} style={{ marginBottom: '24px' }}>
                    <Title level={5} style={{ color: '#333', marginBottom: '12px' }}>
                      {category}
                    </Title>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {skills.map((skill, index) => (
                        <div key={index} style={{ width: '100%', marginBottom: '8px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                            <Text style={{ fontSize: '14px' }}>{skill}</Text>
                            <Text style={{ fontSize: '12px', color: '#666' }}>{getSkillLevel(skill)}%</Text>
                          </div>
                          <Progress
                            percent={getSkillLevel(skill)}
                            size="small"
                            strokeColor={{
                              '0%': '#667eea',
                              '100%': '#764ba2',
                            }}
                            style={{ marginBottom: '8px' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Card>
            </Col>

            {/* Stats Section */}
            <Col xs={24} lg={12}>
              <Card
                title={
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <TrophyOutlined style={{ color: '#667eea', fontSize: '20px' }} />
                    <span style={{ fontSize: '18px', fontWeight: '600' }}>Statistics</span>
                  </div>
                }
                style={{
                  height: '100%',
                  border: 'none',
                  borderRadius: '16px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                }}
              >
                <Row gutter={[16, 16]}>
                  <Col xs={12}>
                    <div style={{ textAlign: 'center', padding: '20px', background: '#f8f9ff', borderRadius: '12px' }}>
                      <Title level={2} style={{ color: '#667eea', margin: 0 }}>
                        {studentData.stats.projectsCompleted}
                      </Title>
                      <Text style={{ color: '#666' }}>Projects</Text>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div style={{ textAlign: 'center', padding: '20px', background: '#f8f9ff', borderRadius: '12px' }}>
                      <Title level={2} style={{ color: '#667eea', margin: 0 }}>
                        {studentData.stats.linesOfCode.toLocaleString()}
                      </Title>
                      <Text style={{ color: '#666' }}>Lines of Code</Text>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div style={{ textAlign: 'center', padding: '20px', background: '#f8f9ff', borderRadius: '12px' }}>
                      <Title level={2} style={{ color: '#667eea', margin: 0 }}>
                        {studentData.stats.githubRepos}
                      </Title>
                      <Text style={{ color: '#666' }}>GitHub Repos</Text>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div style={{ textAlign: 'center', padding: '20px', background: '#f8f9ff', borderRadius: '12px' }}>
                      <Title level={2} style={{ color: '#667eea', margin: 0 }}>
                        {studentData.stats.technologiesLearned}
                      </Title>
                      <Text style={{ color: '#666' }}>Technologies</Text>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          {/* Projects Section */}
          <Card
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <RocketOutlined style={{ color: '#667eea', fontSize: '20px' }} />
                <span style={{ fontSize: '18px', fontWeight: '600' }}>Featured Projects</span>
              </div>
            }
            style={{
              border: 'none',
              borderRadius: '16px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
            }}
          >
            <Row gutter={[24, 24]}>
              {studentData.projects.map((project, index) => (
                <Col xs={24} md={12} key={index}>
                  <Card
                    style={{
                      border: '1px solid #f0f0f0',
                      borderRadius: '12px',
                      height: '100%',
                      transition: 'all 0.3s ease'
                    }}
                    bodyStyle={{ padding: '24px' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ fontSize: '24px' }}>{project.image}</div>
                      <div>
                        <Title level={4} style={{ margin: 0, color: '#333' }}>
                          {project.title}
                        </Title>
                        <Tag color={project.status === 'Completed' ? 'green' : project.status === 'In Progress' ? 'blue' : 'orange'}>
                          {project.status}
                        </Tag>
                      </div>
                    </div>

                    <Paragraph style={{ color: '#666', marginBottom: '16px' }}>
                      {project.description}
                    </Paragraph>

                    <div style={{ marginBottom: '16px' }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Tag key={techIndex} color="blue" style={{ margin: '2px' }}>
                          {tech}
                        </Tag>
                      ))}
                    </div>

                    <Space>
                      <Button
                        size="small"
                        icon={<GithubOutlined />}
                        href={project.github}
                        target="_blank"
                        style={{ borderRadius: '16px' }}
                      >
                        Code
                      </Button>
                      <Button
                        size="small"
                        icon={<GlobalOutlined />}
                        href={project.demo}
                        target="_blank"
                        type="primary"
                        style={{ borderRadius: '16px' }}
                      >
                        Live Demo
                      </Button>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Achievements Section */}
          <Card
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrophyOutlined style={{ color: '#667eea', fontSize: '20px' }} />
                <span style={{ fontSize: '18px', fontWeight: '600' }}>Achievements & Awards</span>
              </div>
            }
            style={{
              border: 'none',
              borderRadius: '16px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
            }}
          >
            <Row gutter={[24, 24]}>
              {studentData.achievements.map((achievement, index) => (
                <Col xs={24} md={12} key={index}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px',
                    background: '#f8f9ff',
                    borderRadius: '12px',
                    border: '1px solid #e8ecff'
                  }}>
                    <div style={{ fontSize: '32px' }}>{achievement.icon}</div>
                    <div>
                      <Title level={5} style={{ margin: 0, color: '#333' }}>
                        {achievement.title}
                      </Title>
                      <Paragraph style={{ color: '#666', margin: '4px 0 0 0' }}>
                        {achievement.description}
                      </Paragraph>
                      <Text style={{ color: '#999', fontSize: '12px' }}>
                        {achievement.date}
                      </Text>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Certifications Section */}
          <Card
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOutlined style={{ color: '#667eea', fontSize: '20px' }} />
                <span style={{ fontSize: '18px', fontWeight: '600' }}>Certifications</span>
              </div>
            }
            style={{
              border: 'none',
              borderRadius: '16px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
            }}
          >
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              {studentData.certifications.map((cert, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  background: '#f8f9ff',
                  borderRadius: '12px',
                  border: '1px solid #e8ecff'
                }}>
                  <div>
                    <Title level={5} style={{ margin: 0, color: '#333' }}>
                      {cert.name}
                    </Title>
                    <Text style={{ color: '#666' }}>{cert.issuer}</Text>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <Text style={{ color: '#999', fontSize: '12px', display: 'block' }}>
                      {cert.date}
                    </Text>
                    <Text style={{ color: '#667eea', fontSize: '12px', fontWeight: '500' }}>
                      {cert.credential}
                    </Text>
                  </div>
                </div>
              ))}
            </Space>
          </Card>
        </Space>
      </div>
    </div>
  );
};

export default AbuHosainProfile;
