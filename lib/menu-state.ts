'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface MenuState {
  expandedSections: string[]
  isCollapsed: boolean
  toggleSection: (sectionId: string) => void
  setCollapsed: (collapsed: boolean) => void
}

export const useMenuState = create<MenuState>()(
  persist(
    (set) => ({
      expandedSections: [], // Start collapsed by default per CLAUDE.md
      isCollapsed: false,
      toggleSection: (sectionId: string) =>
        set((state) => ({
          expandedSections: state.expandedSections.includes(sectionId)
            ? state.expandedSections.filter((id) => id !== sectionId)
            : [...state.expandedSections, sectionId],
        })),
      setCollapsed: (collapsed: boolean) =>
        set({ isCollapsed: collapsed }),
    }),
    {
      name: 'tara-menu-state',
    }
  )
)