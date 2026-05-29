"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type UserType = "usuario" | "estabelecimento" | null

interface AuthUser {
  name: string
  email: string
  type: UserType
  avatar?: string
  businessName?: string
}

interface AuthContextType {
  user: AuthUser | null
  login: (email: string, password: string, type: UserType) => boolean
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
  isAuthenticated: false,
  isLoading: true,
})

// Mock credentials
const MOCK_USERS = [
  {
    email: "mane@floripa.com",
    password: "123456",
    type: "usuario" as UserType,
    name: "Jorge Cláudio",
    avatar: "/bonicos/16.png",
  },
  {
    email: "parceiro@floripa.com",
    password: "123456",
    type: "estabelecimento" as UserType,
    name: "Ostras no Ribeirão",
    businessName: "Ostras no Ribeirão",
    avatar: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&q=80",
  },
]

const SESSION_KEY = "mane_guide_session"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(SESSION_KEY)
      if (saved) {
        setUser(JSON.parse(saved))
      }
    } catch {
      // ignore
    } finally {
      setIsLoading(false)
    }
  }, [])

  const login = (email: string, password: string, type: UserType): boolean => {
    const found = MOCK_USERS.find(
      (u) => u.email === email && u.password === password && u.type === type
    )

    // Also accept any credentials for demo purposes
    if (!found) {
      const demoUser: AuthUser =
        type === "estabelecimento"
          ? {
              name: "Seu Estabelecimento",
              email,
              type,
              businessName: "Meu Negócio",
              avatar: "/bonicos/16.png",
            }
          : {
              name: "Manezinho",
              email,
              type,
              avatar: "/bonicos/16.png",
            }
      setUser(demoUser)
      localStorage.setItem(SESSION_KEY, JSON.stringify(demoUser))
      return true
    }

    const authUser: AuthUser = {
      name: found.name,
      email: found.email,
      type: found.type,
      avatar: found.avatar,
      businessName: found.businessName,
    }
    setUser(authUser)
    localStorage.setItem(SESSION_KEY, JSON.stringify(authUser))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(SESSION_KEY)
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
