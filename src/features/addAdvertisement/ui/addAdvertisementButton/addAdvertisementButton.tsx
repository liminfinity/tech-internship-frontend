import type { AddAdvertisementButtonProps } from './addAdvertisementButton.types';
import { Button } from 'antd';
import { useModal } from '@/shared/hooks';
import { AddAdvertisementModal } from '../addAdvertisementModal';

export const AddAdvertisementButton = ({ className }: AddAdvertisementButtonProps) => {
  const { isOpen, close, open } = useModal();

  return (
    <>
      <Button type="primary" onClick={open} className={className} size="large">
        Создать объявление
      </Button>
      <AddAdvertisementModal open={isOpen} onCancel={close} />
    </>
  );
};
