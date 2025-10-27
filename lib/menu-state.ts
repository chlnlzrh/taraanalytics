'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface MenuState {
  expandedSections: string[]
  expandedSubSections: string[]
  isCollapsed: boolean
  toggleSection: (sectionId: string) => void
  toggleSubSection: (subSectionId: string) => void
  setCollapsed: (collapsed: boolean) => void
}

export const useMenuState = create<MenuState>()(
  persist(
    (set) => ({
      expandedSections: [], // Start collapsed by default per CLAUDE.md
      expandedSubSections: [],
      isCollapsed: true, // Start with sidebar collapsed for cleaner initial view
      toggleSection: (sectionId: string) =>
        set((state) => {
          const isCurrentlyExpanded = state.expandedSections.includes(sectionId)
          
          if (isCurrentlyExpanded) {
            // Collapsing section - also collapse all its subsections
            return {
              expandedSections: state.expandedSections.filter((id) => id !== sectionId),
              expandedSubSections: state.expandedSubSections.filter((id) => !id.startsWith(sectionId + '-'))
            }
          } else {
            // Expanding section - let user manually expand subsections
            return {
              expandedSections: [...state.expandedSections, sectionId],
              expandedSubSections: state.expandedSubSections
            }
          }
        }),
      toggleSubSection: (subSectionId: string) =>
        set((state) => ({
          expandedSubSections: state.expandedSubSections.includes(subSectionId)
            ? state.expandedSubSections.filter((id) => id !== subSectionId)
            : [...state.expandedSubSections, subSectionId],
        })),
      setCollapsed: (collapsed: boolean) =>
        set({ isCollapsed: collapsed }),
    }),
    {
      name: 'tara-menu-state',
    }
  )
)