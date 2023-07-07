import { create } from 'zustand';
import { User } from '@prisma/client';

interface CurrentUserStore {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

const useCurrentUser = create<CurrentUserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
}));

export default useCurrentUser;
