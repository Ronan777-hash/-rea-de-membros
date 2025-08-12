
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  plan: 'basic' | 'premium';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, plan: 'basic' | 'premium') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, plan: 'basic' | 'premium') => {
    // This is a mock login. In a real app, you'd handle this with Firebase Auth.
    const mockUser: User = { email, plan };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
