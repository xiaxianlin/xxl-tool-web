import PageContainer from '@/components/page-container';
import { SimpleTable } from '@/components/simple-table';
import { UserRoleTitle } from '@/constants/user';
import { formatTime } from '@/utils/time';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import { Button, Card, Modal, Space, Switch, TableProps } from 'antd';
import React, { useMemo } from 'react';
import { UserFilter } from './components/filter';
import { UserFormModel } from './components/form-modal';
import { useUserLogic } from './logic';

const QueryTable: React.FC = () => {
  const { table, form, status, showForm, handleDeleteUser } = useUserLogic();

  const handleDelete = useMemoizedFn((uid: string) => {
    Modal.confirm({
      centered: true,
      title: '删除账户',
      content: '你确定要删除此账户吗？',
      onOk: () => handleDeleteUser(uid),
    });
  });

  const columns = useMemo<TableProps<UserAccount>['columns']>(
    () => [
      {
        title: '账户名',
        key: 'username',
        dataIndex: 'username',
        width: 200,
      },
      {
        title: '角色',
        dataIndex: 'role',
        key: 'role',
        render: (value) => UserRoleTitle[value],
        width: 200,
      },
      {
        title: '状态',
        key: 'status',
        dataIndex: 'status',
        render: (value, user) => (
          <Switch
            loading={status.loading}
            checkedChildren="启用"
            unCheckedChildren="禁用"
            checked={value === 1}
            onChange={() => status.changeStatus(user.uid, value)}
          />
        ),
      },
      {
        title: '创建时间',
        key: 'createTime',
        dataIndex: 'createTime',
        sorter: true,
        render: (value) => formatTime(value),
      },
      {
        title: '最近修改时间',
        key: 'updateTime',
        dataIndex: 'updateTime',
        render: (value) => formatTime(value),
      },
      {
        title: '操作',
        key: 'action',
        width: 180,
        render: (_, user) => {
          return (
            <Space>
              <Button size="small" type="text" icon={<EditOutlined />} onClick={() => showForm(user)} />
              <Button size="small" type="text" icon={<DeleteOutlined />} onClick={() => handleDelete(user.uid)} />
            </Space>
          );
        },
      },
    ],
    [status, showForm, handleDelete],
  );

  return (
    <PageContainer size="large" title="用户管理">
      <Space direction="vertical" size="large">
        <UserFilter form={table.form} onQuery={table.query} onReset={table.reset} />
        <Card
          bordered={false}
          className="with-table"
          title={
            <Button type="primary" icon={<PlusOutlined />} onClick={() => showForm()}>
              添加用户
            </Button>
          }
        >
          <SimpleTable<UserAccount> rowKey="uid" columns={columns} {...table.props} />
        </Card>
      </Space>
      <UserFormModel {...form} />
    </PageContainer>
  );
};

export default QueryTable;
