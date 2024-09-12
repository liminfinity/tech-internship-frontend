import { FormProvider, useForm } from 'react-hook-form';
import type { AddAdvertisementFormProps } from './addAdvertisementForm.types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  addAdvertisementSchema,
  AdvertisementFormFields,
  useAddAdvertisementMutation,
  type AddAdvertisementForm as TAddAdvertisementForm,
  AdvertisementFormButtonGroup,
} from '@/entities/advertisement';
import { useCallback } from 'react';
import { Flex } from 'antd';
import { GAPS } from '@/shared/constants';

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

  const { handleSubmit, reset, formState } = methods;

  const { isValid, dirtyFields } = formState;

  const isSubmitDisabled = !(dirtyFields?.name && dirtyFields?.price) || !isValid;

  const [addAdvertisement] = useAddAdvertisementMutation();

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
