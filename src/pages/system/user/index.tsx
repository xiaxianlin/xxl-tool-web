import PageContainer from '@/components/page-container';
import { formatTime } from '@/utils/time';
import { Button, Card, Space, Table, TableProps } from 'antd';
import React from 'react';
import { UserAction } from './components/action';
import { UserFilter } from './components/filter';
import { useUserLogic } from './logic';

const columns: TableProps<UserAccount>['columns'] = [
  {
    title: '账户',
    key: 'username',
    dataIndex: 'username',
  },
  {
    title: '角色',
    key: 'role',
    dataIndex: 'role',
  },
  {
    title: '状态',
    key: 'role',
    dataIndex: 'role',
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
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
      return <Button type="link">Edit</Button>;
    },
  },
];
const QueryTable: React.FC = () => {
  const { data, loading } = useUserLogic();

  return (
    <PageContainer size="large" title="用户管理">
      <Space direction="vertical" size="large">
        <UserFilter />
        <Card bordered={false} className="with-table" title={`共 ${data?.total || 0} 个用户`} extra={<UserAction />}>
          <Table<UserAccount> rowKey="uid" columns={columns} loading={loading} dataSource={data?.data} pagination={{ pageSize: data?.size }} />
        </Card>
      </Space>
    </PageContainer>
  );
};

export default QueryTable;
