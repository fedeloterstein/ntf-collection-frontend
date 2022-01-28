import { Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Modal } from '@chakra-ui/react';

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}
export const ModalCustom = ({isOpen, onClose}: ModalProps) => {
     
        return (
          <>
            <Modal size={'xl'} onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Soy el body
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
};
