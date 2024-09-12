import type { AddAdvertisementModalProps } from './addAdvertisementModal.types';
import { Modal, Typography } from 'antd';
import { AddAdvertisementForm } from '../addAdvertisementForm';
import { WIDTHS } from '@/shared/constants';
import { useCallback } from 'react';

const { Title } = Typography;

export const AddAdvertisementModal = ({ onCancel, ...props }: AddAdvertisementModalProps) => {
  const handleSubmit = useCallback(() => {
    onCancel?.();
  }, [onCancel]);

  return (
    <Modal
      title={<Title level={3}>Создание объявления</Title>}
      width={WIDTHS.MODAL}
      centered
      footer={null}
      onCancel={onCancel}
      {...props}>
      <AddAdvertisementForm onSubmit={handleSubmit} />
    </Modal>
  );
};
