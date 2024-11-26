import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC } from 'react';

interface ButtonProps {
  onClick: () => void;
}

export const EditIconButton: FC<ButtonProps> = ({ onClick }) => (
  <Button size="small" type="text" icon={<EditOutlined />} onClick={onClick} />
);

export const DeleteIconButton: FC<ButtonProps> = ({ onClick }) => (
  <Button size="small" type="text" icon={<DeleteOutlined />} onClick={onClick} />
);
