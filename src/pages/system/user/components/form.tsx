import { UserRole, UserRoleTitle } from '@/constants/user';
import { useBoolean } from 'ahooks';
import { Form, FormProps, Input, Modal, Select } from 'antd';
import { FC, useEffect, useState } from 'react';

interface UserFormModelProps {
  visible?: boolean;
  initialValues?: UserFormModel;
  onHide?: () => void;
  onSubmit?: (values: UserFormModel) => Promise<any>;
}
export const UserFormModel: FC<UserFormModelProps> = ({ visible, initialValues, onHide, onSubmit }) => {
  const [form] = Form.useForm<UserFormModel>();
  const [changed, setChanged] = useState(false);
  const [submitting, { setTrue, setFalse }] = useBoolean(false);

  const required = !initialValues;

  const handleCancel = () => {
    form.resetFields();
    onHide?.();
  };

  const handleFinished: FormProps<UserFormModel>['onFinish'] = (values) => {
    setTrue();
    onSubmit?.(values)
      .then(() => handleCancel())
      .finally(() => setFalse());
  };

  useEffect(() => {
    visible && form.setFieldsValue(initialValues || { role: UserRole.User });
  }, [visible, initialValues]);

  return (
    <Modal
      centered
      title={required ? '添加用户' : '修改用户'}
      open={visible}
      onCancel={handleCancel}
      onOk={() => form.submit()}
      confirmLoading={submitting}
      okButtonProps={{ disabled: !changed }}
    >
      <Form
        form={form}
        autoComplete="off"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        style={{ marginTop: 24 }}
        onFinish={handleFinished}
        onValuesChange={() => !changed && setChanged(true)}
      >
        <Form.Item<UserFormModel> name="username" label="用户名" rules={[{ required }]}>
          <Input placeholder="请输入" maxLength={20} showCount />
        </Form.Item>
        <Form.Item<UserFormModel> name="password" label={required ? '密码' : '新密码'} rules={[{ required }]}>
          <Input placeholder="请输入" maxLength={20} showCount />
        </Form.Item>
        <Form.Item<UserFormModel> name="role" label="角色" rules={[{ required }]}>
          <Select placeholder="请选择">
            <Select.Option value={UserRole.Manager}>{UserRoleTitle[UserRole.Manager]}</Select.Option>
            <Select.Option value={UserRole.User}>{UserRoleTitle[UserRole.User]}</Select.Option>
            <Select.Option value={UserRole.Guest}>{UserRoleTitle[UserRole.Guest]}</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};
