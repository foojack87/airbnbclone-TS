import { renderHook, act } from '@testing-library/react';
import useCurrentUser from '@/app/hooks/useCurrentUser';
import { User } from '@prisma/client';

describe('useCurrentUser', () => {
  test('should set and get the current user', () => {
    const { result } = renderHook(() => useCurrentUser());

    // Initial state
    expect(result.current.currentUser).toBe(null);

    // Set the current user
    const user: User = {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      emailVerified: new Date(),
      image: 'path/to/image.jpg',
      hashedPassword: 'hashedPassword',
      createdAt: new Date(),
      updatedAt: new Date(),
      favoriteIds: ['favoriteId1', 'favoriteId2'],
    };

    act(() => {
      result.current.setCurrentUser(user);
    });

    // Check if the current user is set correctly
    expect(result.current.currentUser).toEqual(user);

    // Set the current user to null
    act(() => {
      result.current.setCurrentUser(null);
    });

    // Check if the current user is null
    expect(result.current.currentUser).toBe(null);
  });
});
