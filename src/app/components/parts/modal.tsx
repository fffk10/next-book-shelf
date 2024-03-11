import { CommonButton } from '@/app/components/parts/button'
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@yamada-ui/react'
import { ReactNode } from 'react'

type CommonModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  content: ReactNode
  size?: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
}

/**
 * 汎用モーダル
 * @param isOpen モーダル開閉フラグ
 * @param onClose クローズハンドラ
 * @param title タイトル
 * @param content 本文
 * @param size サイズ
 * @param confirmText ポジティブボタンテキスト
 * @param cancelText ネガティブボタンテキスト
 * @param onConfirm ポジティブボタンクリックハンドラ
 * @param onCancel ネガティブボタンクリックハンドラ
 * @returns モーダル
 */
export default function CommonModal({
  isOpen,
  onClose,
  title,
  content,
  size = '2xl',
  confirmText = 'OK',
  cancelText = '戻る',
  onConfirm,
  onCancel,
}: CommonModalProps) {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm()
    }
    onClose()
  }

  const handleCancel = () => {
    if (onCancel) {
      onCancel()
    }
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{content}</ModalBody>
      <ModalFooter>
        <CommonButton
          variant='outline'
          colorScheme='gray'
          text={cancelText}
          onClick={handleCancel}
        />
        <CommonButton
          variant='outline'
          colorScheme='yellow'
          text={confirmText}
          onClick={handleConfirm}
        />
      </ModalFooter>
    </Modal>
  )
}
