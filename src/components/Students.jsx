import React, { useState } from 'react';
import { Typography, Row, Col, Card, Input, Button, Space, Avatar, Tag } from 'antd';
import { SearchOutlined, UserOutlined, IdcardOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;

const Students = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Real student data - CST Session 2223
  const students = [
    { "id": 1, "name": "Polash Kumar", "roll": "515401" },
    { "id": 2, "name": "Md. Al Amin", "roll": "616383" },
    { "id": 3, "name": "Nawshin Huda Barsha", "roll": "616384" },
    { "id": 4, "name": "Md. Nayem Islam", "roll": "702938" },
    { "id": 5, "name": "Mst Sadiya Jahan Sosee", "roll": "708335" },
    { "id": 6, "name": "Nafis Muhtasim", "roll": "715494" },
    { "id": 7, "name": "Mst Osna Akter Bristi", "roll": "715495" },
    { "id": 8, "name": "Shovan Kumar Mandol Pranto", "roll": "715499" },
    { "id": 9, "name": "Md. Morshed Mahbub", "roll": "715506" },
    { "id": 10, "name": "Diponkar Kumar Kundu", "roll": "715507" },
    { "id": 11, "name": "Mst Annana Akter", "roll": "715508" },
    { "id": 12, "name": "Md. Reajul Zannat Rafi", "roll": "715510" },
    { "id": 13, "name": "Md. Abdul Ohave Osim", "roll": "715517" },
    { "id": 14, "name": "Shoumit Saha", "roll": "715519" },
    { "id": 15, "name": "Md. Yeyanu Islam Robin", "roll": "715520" },
    { "id": 16, "name": "Md. Ruhan Emam Roni", "roll": "715521" },
    { "id": 17, "name": "Rakibul Hasan", "roll": "715523" },
    { "id": 18, "name": "Md. Helal Hossen", "roll": "715524" },
    { "id": 19, "name": "Jerin Akter", "roll": "715526" },
    { "id": 20, "name": "Sanjida Akter Taniya", "roll": "715527" },
    { "id": 21, "name": "Md. Rakibul Hasan Rifat", "roll": "715528" },
    { "id": 22, "name": "Md. Naimur Rahman Nishan", "roll": "715530" },
    { "id": 23, "name": "Md. Abu Hosain", "roll": "715534" },
    { "id": 24, "name": "Hafizul Islam Raha", "roll": "715535" },
    { "id": 25, "name": "Mst Nusrat Sultana Prathona", "roll": "715536" },
    { "id": 26, "name": "Md. Rifat Hossain", "roll": "715538" },
    { "id": 27, "name": "Md. Tawhid Hosen", "roll": "715539" },
    { "id": 28, "name": "Md. Zamiul Hasan", "roll": "715542" },
    { "id": 29, "name": "Mahfuzur Rahman", "roll": "715543" },
    { "id": 30, "name": "Mst Sadia Akter", "roll": "715544" },
    { "id": 31, "name": "Md. Abu Hanjalal", "roll": "715546" },
    { "id": 32, "name": "Md. Nuhas Mahmud", "roll": "715547" },
    { "id": 33, "name": "Md. Ferdous Hasan", "roll": "715548" },
    { "id": 34, "name": "Md. Sabbir Hossain", "roll": "715549" },
    { "id": 35, "name": "Musab Us Sudais Safa", "roll": "715550" },
    { "id": 36, "name": "Md. Shobuj Sheikh", "roll": "715551" },
    { "id": 37, "name": "Mst Shrmin Akter Joynor", "roll": "715553" },
    { "id": 38, "name": "Md. Shariyar Ahmed", "roll": "718922" },
    { "id": 39, "name": "Md. Shafiul Islam", "roll": "719026" },
    { "id": 40, "name": "Mst Ayesha Khatun", "roll": "724098" },
    { "id": 41, "name": "Bishal Chandra Shaha", "roll": "724099" },
    { "id": 42, "name": "Israt Jahan Nabila", "roll": "726867" },
    { "id": 43, "name": "Md. Mehedi Hasan", "roll": "776336" },
    { "id": 44, "name": "Md. Hasibul Islamn Tuhine", "roll": "777374" }
  ].map((student) => ({
    ...student,
    avatar: student.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
  }));

  // Filter students based on search term
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.roll.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStudentClick = (student) => {
    // Navigate to student's profile page
    navigate(`/student/${student.roll}`);
  };

  const getAvatarColor = (name) => {
    const colors = [
      '#3b82f6', '#059669', '#7c3aed', '#f59e0b', '#ef4444',
      '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#6366f1',
      '#14b8a6', '#f43f5e'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
      padding: '80px 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Title level={2} style={{ color: '#1f2937', fontSize: '2.5rem', fontWeight: '300' }}>
              Our <span style={{ color: '#3b82f6' }}>CST Students</span>
            </Title>
            <Paragraph style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Meet the talented Computer Science & Technology students from Bogura Polytechnic Institute, Session 2223
            </Paragraph>
          </div>

          {/* Search Section */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Search
              placeholder="Search by name or roll number..."
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              style={{ maxWidth: '500px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Students Grid */}
          <Row gutter={[24, 24]}>
            {filteredStudents.map((student) => (
              <Col xs={24} sm={12} md={8} lg={6} key={student.id}>
                <Card
                  hoverable
                  style={{
                    height: '100%',
                    border: 'none',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  bodyStyle={{ padding: '24px' }}
                  onClick={() => handleStudentClick(student)}
                >
                  <div style={{ textAlign: 'center' }}>
                    {/* Avatar */}
                    <Avatar
                      size={60}
                      style={{
                        backgroundColor: getAvatarColor(student.name),
                        marginBottom: '16px',
                        fontSize: '20px',
                        fontWeight: '700',
                        border: '3px solid rgba(255,255,255,0.8)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}
                    >
                      {student.avatar}
                    </Avatar>

                    {/* Student Name */}
                    <Title level={4} style={{
                      color: '#1f2937',
                      marginBottom: '8px',
                      fontSize: '16px',
                      fontWeight: '600'
                    }}>
                      {student.name}
                    </Title>

                    {/* Roll Number */}
                    <div style={{ marginBottom: '12px' }}>
                      <Text style={{
                        color: '#6b7280',
                        fontSize: '13px',
                        fontWeight: '500'
                      }}>
                        <IdcardOutlined style={{ marginRight: '6px' }} />
                        {student.roll}
                      </Text>
                    </div>

                    {/* CST Student Badge */}
                    <div>
                      <Tag
                        color="blue"
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          padding: '4px 12px',
                          borderRadius: '16px',
                          border: 'none',
                          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                          color: 'white'
                        }}
                      >
                        CST Student
                      </Tag>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* No Results */}
          {filteredStudents.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <Title level={3} style={{ color: '#6b7280' }}>
                No students found
              </Title>
              <Paragraph style={{ color: '#9ca3af' }}>
                Try searching with different keywords
              </Paragraph>
            </div>
          )}

          {/* Stats */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Row gutter={[32, 32]} justify="center">
              <Col xs={12} sm={6}>
                <div>
                  <Title level={3} style={{ color: '#3b82f6', margin: 0 }}>
                    {students.length}
                  </Title>
                  <Text style={{ color: '#6b7280' }}>Total Students</Text>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div>
                  <Title level={3} style={{ color: '#059669', margin: 0 }}>
                    {students.length}
                  </Title>
                  <Text style={{ color: '#6b7280' }}>Active Students</Text>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div>
                  <Title level={3} style={{ color: '#7c3aed', margin: 0 }}>
                    CST
                  </Title>
                  <Text style={{ color: '#6b7280' }}>Department</Text>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div>
                  <Title level={3} style={{ color: '#f59e0b', margin: 0 }}>
                    2223
                  </Title>
                  <Text style={{ color: '#6b7280' }}>Session</Text>
                </div>
              </Col>
            </Row>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default Students;
