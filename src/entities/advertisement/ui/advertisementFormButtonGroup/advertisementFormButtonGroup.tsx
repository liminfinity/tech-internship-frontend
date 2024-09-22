import { Button, Flex } from 'antd';
import type { AdvertisementFormButtonGroupProps } from './advertisementFormButtonGroup.types';
import { GAPS } from '@/shared/constants';
import { useFormContext } from 'react-hook-form';
import type { AdvertisementForm } from '@/entities/advertisement/types';

export const AdvertisementFormButtonGroup = ({
  isSubmitDisabled,
  submitButtonText = 'Создать',
  onCancel,
  onReset,
  className,
}: AdvertisementFormButtonGroupProps) => {
  const { formState } = useFormContext<AdvertisementForm>();

  const { isDirty, isLoading } = formState;

  const isResetDisabled = !isDirty;

  return (
    <Flex align="center" justify="flex-end" gap={GAPS.MD} className={className}>
      {onCancel && (
        <Button htmlType="button" onClick={onCancel}>
          Отменить
        </Button>
      )}
      {onReset && (
        <Button htmlType="reset" onClick={onReset} disabled={isResetDisabled}>
          Очистить
        </Button>
      )}
      <Button type="primary" htmlType="submit" loading={isLoading} disabled={isSubmitDisabled}>
        {submitButtonText}
      </Button>
    </Flex>
  );
};
