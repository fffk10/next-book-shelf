'use client'

import { useFormState } from 'react-dom'
import { createBook } from '@/app/lib/books/actions'
import { Stack, VStack } from '@yamada-ui/react'
import { ValidateMessageState } from '@/app/types/validate'
import FormInput, {
  FormInputProps,
} from '@/app/components/books/form/form-input'
import FormButton from '@/app/components/books/form/form-button'

/** Form入力要素 */
const FormInputList: FormInputProps[] = [
  {
    name: 'title',
    label: '書籍名',
    placeholder: '書籍名',
    size: 'md',
  },
  {
    name: 'author',
    label: '作者',
    placeholder: '作者',
    size: 'md',
  },
]

const CreateForm = () => {
  // バリデーションメッセージ
  const initialState: ValidateMessageState = { message: null, errors: {} }
  const [state, dispatch] = useFormState(createBook, initialState)

  return (
    <form action={dispatch}>
      <VStack>
        {FormInputList.map((elem) => (
          <Stack key={elem.name}>
            <FormInput
              name={elem.name}
              label={elem.label}
              placeholder={elem.placeholder}
              size={elem.size}
              validateMessageState={state}
            />
          </Stack>
        ))}

        <FormButton />
      </VStack>
    </form>
  )
}

export default CreateForm
