import { FormProvider, useForm } from 'react-hook-form';
import type { AddAdvertisementFormProps } from './addAdvertisementForm.types';
import type { AddAdvertisementForm as TAddAdvertisementForm } from '@/entities/advertisement';
import { zodResolver } from '@hookform/resolvers/zod';
import { addAdvertisementSchema, useAddAdvertisementMutation } from '@/entities/advertisement';
import { useCallback } from 'react';
import { Button, Flex, type InputNumberProps } from 'antd';
import { RHFInput, RHFInputNumber, RHFTextArea } from '@/shared/ui';
import { FaRegPenToSquare, FaRegImage, FaRubleSign } from 'react-icons/fa6';
import { GAPS } from '@/shared/constants';
import { PRICE_MIN_VALUE } from './addAdvertisementForm.constants';
import styles from './addAdvertisementForm.module.scss';

const formatter: Required<InputNumberProps>['formatter'] = (value) =>
  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const AddAdvertisementForm = ({ onSubmit, className }: AddAdvertisementFormProps) => {
  const methods = useForm<TAddAdvertisementForm>({
    defaultValues: {
      name: '',
    },
    mode: 'onSubmit',
    criteriaMode: 'all',
    shouldUseNativeValidation: false,
    shouldUnregister: true,
    shouldFocusError: true,
    resolver: zodResolver(addAdvertisementSchema),
  });

  const { handleSubmit, formState, reset } = methods;

  const { isDirty, isValid, dirtyFields } = formState;

  const [addAdvertisement, { isLoading }] = useAddAdvertisementMutation();

  const isSubmitDisabled = !(dirtyFields?.name && dirtyFields?.price) || !isValid;

  const isResetDisabled = !isDirty;

  const handleAddAdvertisement = useCallback(
    async (newAdvertisement: TAddAdvertisementForm) => {
      await addAdvertisement(newAdvertisement);
      reset();
      onSubmit?.();
    },
    [addAdvertisement, onSubmit, reset],
  );

  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  const handleCancel = useCallback(() => {
    reset();
    onSubmit?.();
  }, [reset, onSubmit]);

  return (
    <FormProvider {...methods}>
      <Flex
        component={'form'}
        onSubmit={handleSubmit(handleAddAdvertisement)}
        vertical
        gap={GAPS.MD}
        className={className}>
        <RHFInput<TAddAdvertisementForm>
          name="name"
          required
          placeholder="Название объявления"
          size="large"
          allowClear
          prefix={<FaRegPenToSquare />}
        />
        <RHFInputNumber<TAddAdvertisementForm>
          name="price"
          required
          placeholder="Цена"
          size="large"
          min={PRICE_MIN_VALUE}
          formatter={formatter}
          prefix={<FaRubleSign />}
          className={styles.priceInput}
        />
        <RHFTextArea<TAddAdvertisementForm>
          name="description"
          placeholder="Описание объявления"
          size="large"
          allowClear
        />
        <RHFInput<TAddAdvertisementForm>
          name="imageUrl"
          placeholder="Ссылка на изображение"
          size="large"
          allowClear
          prefix={<FaRegImage />}
        />
        <Flex align="center" justify="flex-end" gap={GAPS.MD}>
          <Button htmlType="button" onClick={handleCancel}>
            Отменить
          </Button>
          <Button htmlType="reset" onClick={handleReset} disabled={isResetDisabled}>
            Очистить
          </Button>
          <Button type="primary" htmlType="submit" loading={isLoading} disabled={isSubmitDisabled}>
            Создать
          </Button>
        </Flex>
      </Flex>
    </FormProvider>
  );
};
