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
      isCollapsed: false,
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
            // Expanding section - auto-expand first subsection
            const firstSubSectionId = `${sectionId}-location-performance` // For comparative analytics
            return {
              expandedSections: [...state.expandedSections, sectionId],
              expandedSubSections: sectionId === 'comparative' 
                ? [...state.expandedSubSections, firstSubSectionId]
                : state.expandedSubSections
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