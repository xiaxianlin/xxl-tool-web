import { Button, Card, Col, Form, Input, Row, Space } from 'antd';
import type React from 'react';

export const UserFilter: React.FC = () => {
  return (
    <Card bordered={false} styles={{ body: { paddingBlock: '32px 8px' } }}>
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 19 }}>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item label="账号">
              <Input placeholder="Please enter" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="角色">
              <Input placeholder="Please enter" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="状态">
              <Input placeholder="Please enter" />
            </Form.Item>
          </Col>
          <Col flex="auto">
            <Form.Item wrapperCol={{ style: { textAlign: 'right' } }}>
              <Space>
                <Button>Reset</Button>
                <Button type="primary">Query</Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
