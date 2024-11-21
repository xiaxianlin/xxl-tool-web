import Icon from '@/components/icon';
import { AppType } from '@/pages/utility/applications';
import { Avatar, Button, Dropdown, List, Skeleton, Tooltip } from 'antd';
import { isEmpty } from 'lodash';
import type React from 'react';

const PinButton: React.FC = () => {
  return (
    <Tooltip title="Fixed in the menu">
      <Button
        type="text"
        size="small"
        icon={<Icon name="pin" strokeWidth={1.5} />}
      />
    </Tooltip>
  );
};

const MoreButton: React.FC = () => {
  return (
    <Dropdown
      menu={{
        items: [
          {
            label: 'Open',
            key: 'open',
            icon: <Icon name="square-arrow-out-up-right" size={14} />,
          },
          {
            label: 'Help',
            key: 'help',
            icon: <Icon name="circle-help" size={14} />,
          },
          {
            label: 'Feedback',
            key: 'feedback',
            icon: <Icon name="square-pen" size={14} />,
          },
          {
            type: 'divider',
          },
          {
            label: 'Uninstall',
            key: 'uninstall',
            danger: true,
            icon: <Icon name="trash-2" size={14} />,
          },
        ],
      }}
    >
      <Button
        size="small"
        type="text"
        icon={<Icon name="ellipsis-vertical" strokeWidth={1.5} />}
      />
    </Dropdown>
  );
};

const AppItem: React.FC<{
  record: AppType | null;
}> = ({ record }) => {
  if (isEmpty(record)) {
    return (
      <List.Item>
        <Skeleton
          avatar
          active
          paragraph={{ rows: 2, width: ['25%', '100%'] }}
          title={false}
        />
      </List.Item>
    );
  }

  return (
    <List.Item actions={[<PinButton key="pin" />, <MoreButton key="more" />]}>
      <List.Item.Meta
        avatar={
          <Avatar shape="square" src={record.icon} className="avatar-contain" />
        }
        title={record.name}
        description={record.desc}
      />
    </List.Item>
  );
};

export default AppItem;
