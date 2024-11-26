import { useBoolean } from 'ahooks';
import { Form, FormProps, Input, Modal } from 'antd';
import { FC, useEffect, useState } from 'react';

interface RoleFormModelProps {
  visible?: boolean;
  initialValues?: RoleFormModel;
  onHide?: () => void;
  onSubmit?: (values: RoleFormModel) => Promise<any>;
}
export const RoleFormModel: FC<RoleFormModelProps> = ({ visible, initialValues, onHide, onSubmit }) => {
  const [form] = Form.useForm<RoleFormModel>();
  const [changed, setChanged] = useState(false);
  const [submitting, { setTrue, setFalse }] = useBoolean(false);

  const isEdit = !initialValues;

  const handleCancel = () => {
    form.resetFields();
    onHide?.();
  };

  const handleFinished: FormProps<RoleFormModel>['onFinish'] = (values) => {
    setTrue();
    onSubmit?.(values).then(() => {
      setFalse();
      handleCancel();
    });
  };

  useEffect(() => {
    visible && initialValues && form.setFieldsValue(initialValues);
  }, [visible, initialValues]);

  return (
    <Modal
      centered
      title={isEdit ? '编辑角色' : '添加角色'}
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
        <Form.Item<RoleFormModel> name="key" label="Key" rules={[{ required: true }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item<RoleFormModel> name="name" label="名称" rules={[{ required: true }]}>
          <Input placeholder="请输入" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
