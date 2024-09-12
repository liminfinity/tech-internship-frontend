import type { UpdateAdvertisementButtonProps } from './updateAdvertisementButton.types';
import { Button } from 'antd';
import { useModal } from '@/shared/hooks';
import { UpdateAdvertisementModal } from '../updateAdvertisementModal';
import { useAdvertisementParams } from '@/entities/advertisement';

export const UpdateAdvertisementButton = ({ className }: UpdateAdvertisementButtonProps) => {
  const { isOpen, close, open } = useModal();

  const { advertisementId } = useAdvertisementParams();

  if (!advertisementId) return null;

  return (
    <>
      <Button type="primary" onClick={open} className={className} size="large">
        Редактировать
      </Button>
      <UpdateAdvertisementModal advertisementId={advertisementId} open={isOpen} onCancel={close} />
    </>
  );
};
