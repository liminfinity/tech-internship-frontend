import { Button, Modal, Typography } from 'antd';
import type { OrderItemsButtonProps } from './orderItemsButton.types';
import { useModal } from '@/shared/hooks';
import { WIDTHS } from '@/shared/constants';
import { OrderItems } from '../orderItems';

const { Title } = Typography;

export const OrderItemsButton = ({ orderItems, className }: OrderItemsButtonProps) => {
  const { isOpen, close, open } = useModal();

  return (
    <>
      <Button type="primary" onClick={open} className={className} size="large">
        Посмотреть объявления
      </Button>
      <Modal
        title={<Title level={3}>Объявления в заказе</Title>}
        width={WIDTHS.MODAL}
        centered
        footer={null}
        open={isOpen}
        onCancel={close}>
        <OrderItems orderItems={orderItems} />
      </Modal>
    </>
  );
};
