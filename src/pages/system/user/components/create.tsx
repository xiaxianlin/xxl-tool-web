import { UserRole, UserRoleTitle } from '@/constants/user';
import { PlusOutlined } from '@ant-design/icons';
import { Result } from 'ahooks/lib/useRequest/src/types';
import { Button, Form, FormProps, Input, Modal, Select } from 'antd';
import { FC, useState } from 'react';

interface UserCreateProps {
  service: Result<string, [model: UserCreateModel]>;
}
export const UserCreate: FC<UserCreateProps> = ({ service }) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm<UserCreateModel>();

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  const handleFinished: FormProps<UserCreateModel>['onFinish'] = (values) => {
    service.runAsync(values).then(handleCancel);
  };

  return (
    <>
      <Button type="primary" icon={<PlusOutlined />} onClick={() => setOpen(true)}>
        添加用户
      </Button>
      <Modal title="添加用户" open={open} onOk={handleOk} confirmLoading={service.loading} onCancel={handleCancel}>
        <Form
          form={form}
          autoComplete="off"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          style={{ marginTop: 24 }}
          onFinish={handleFinished}
          initialValues={{ role: UserRole.User }}
        >
          <Form.Item<UserCreateModel> name="username" label="账户名" rules={[{ required: true }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item<UserCreateModel> name="password" label="密码" rules={[{ required: true }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item<UserCreateModel> name="role" label="角色">
            <Select placeholder="请选择">
              <Select.Option value={UserRole.Manager}>{UserRoleTitle[UserRole.Manager]}</Select.Option>
              <Select.Option value={UserRole.User}>{UserRoleTitle[UserRole.User]}</Select.Option>
              <Select.Option value={UserRole.Guest}>{UserRoleTitle[UserRole.Guest]}</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
