import PageContainer from '@/components/page-container';
import { SimpleTable } from '@/components/simple-table';
import { UserRoleTitle } from '@/constants/user';
import { formatTime } from '@/utils/time';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Card, Space, TableProps } from 'antd';
import React, { useMemo } from 'react';
import { UserCreate } from './components/create';
import { UserFilter } from './components/filter';
import { useUserLogic } from './logic';

const QueryTable: React.FC = () => {
  const { table, addUserService } = useUserLogic();

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
        render: (value) => (value === 1 ? '启用' : '禁用'),
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
        render: () => {
          return (
            <Space>
              <Button size="small" type="text" icon={<EditOutlined />} />
              <Button size="small" type="text" icon={<DeleteOutlined />} />
            </Space>
          );
        },
      },
    ],
    [],
  );

  return (
    <PageContainer size="large" title="用户管理">
      <Space direction="vertical" size="large">
        <UserFilter form={table.form} onQuery={table.query} onReset={table.reset} />
        <Card bordered={false} className="with-table" title={<UserCreate service={addUserService} />}>
          <SimpleTable<UserAccount> rowKey="uid" columns={columns} {...table.props} />
        </Card>
      </Space>
    </PageContainer>
  );
};

export default QueryTable;
