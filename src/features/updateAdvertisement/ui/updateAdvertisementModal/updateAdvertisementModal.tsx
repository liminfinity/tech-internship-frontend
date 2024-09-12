import type { UpdateAdvertisementModalProps } from './updateAdvertisementModal.types';
import { Modal, Typography } from 'antd';
import { UpdateAdvertisementForm } from '../updateAdvertisementForm';
import { WIDTHS } from '@/shared/constants';
import { useCallback } from 'react';
import { useGetAdvertisementQuery } from '@/entities/advertisement';

const { Title } = Typography;

export const UpdateAdvertisementModal = ({
  advertisementId,
  onCancel,
  ...props
}: UpdateAdvertisementModalProps) => {
  const { data } = useGetAdvertisementQuery(advertisementId);

  const handleSubmit = useCallback(() => {
    onCancel?.();
  }, [onCancel]);

  if (!data) return null;

  const updatedAdvertisement = {
    name: data.name,
    price: data.price,
    description: data.description,
    imageUrl: data.imageUrl,
  };

  return (
    <Modal
      title={<Title level={3}>Редактирование объявления</Title>}
      width={WIDTHS.MODAL}
      centered
      footer={null}
      onCancel={onCancel}
      {...props}>
      <UpdateAdvertisementForm
        advertisementId={advertisementId}
        updatedAdvertisement={updatedAdvertisement}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
};
