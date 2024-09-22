import { FormProvider, useForm } from 'react-hook-form';
import type { UpdateAdvertisementFormProps } from './updateAdvertisementForm.types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AdvertisementFormFields,
  updateAdvertisementSchema,
  useUpdateAdvertisementMutation,
  type UpdateAdvertisementForm as TUpdateAdvertisementForm,
  AdvertisementFormButtonGroup,
} from '@/entities/advertisement';
import { useCallback } from 'react';
import { Flex } from 'antd';
import { GAPS } from '@/shared/constants';

export const UpdateAdvertisementForm = ({
  updatedAdvertisement,
  advertisementId,
  onSubmit,
  className,
}: UpdateAdvertisementFormProps) => {
  const methods = useForm<TUpdateAdvertisementForm>({
    defaultValues: updatedAdvertisement,
    mode: 'onSubmit',
    criteriaMode: 'all',
    shouldUseNativeValidation: false,
    shouldUnregister: true,
    shouldFocusError: true,
    resolver: zodResolver(updateAdvertisementSchema),
  });

  const { handleSubmit, reset, formState } = methods;

  const { isDirty, isValid } = formState;

  const isSubmitDisabled = !isDirty || !isValid;

  const [updateAdvertisement] = useUpdateAdvertisementMutation();

  const handleUpdateAdvertisement = useCallback(
    async (updatedAdvertisement: TUpdateAdvertisementForm) => {
      await updateAdvertisement({ ...updatedAdvertisement, advertisementId });
      reset(updatedAdvertisement);
      onSubmit?.();
    },
    [updateAdvertisement, onSubmit, reset, advertisementId],
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
        onSubmit={handleSubmit(handleUpdateAdvertisement)}
        vertical
        gap={GAPS.MD}
        className={className}>
        <AdvertisementFormFields />
        <AdvertisementFormButtonGroup
          isSubmitDisabled={isSubmitDisabled}
          onCancel={handleCancel}
          onReset={handleReset}
        />
      </Flex>
    </FormProvider>
  );
};
