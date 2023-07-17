import { renderHook, act } from '@testing-library/react';
import useRegisterModal from '@/app/hooks/useRegisterModal';

test('should toggle modal state', () => {
  const { result } = renderHook(() => useRegisterModal());

  // Initial state should be closed
  expect(result.current.isOpen).toBe(false);

  // Call onOpen to open the modal
  act(() => {
    result.current.onOpen();
  });

  // After calling onOpen, isOpen should be true
  expect(result.current.isOpen).toBe(true);

  // Call onClose to close the modal
  act(() => {
    result.current.onClose();
  });

  // After calling onClose, isOpen should be false again
  expect(result.current.isOpen).toBe(false);
});
