import { create } from 'zustand'

type PDFStore = {
  documents: { page: number; token: string; imageUrl: string }[]
  setDocuments: (
    docs: { page: number; token: string; imageUrl: string }[]
  ) => void
}

export const usePDFStore = create<PDFStore>((set) => ({
  documents: [],
  setDocuments: (docs) => set({ documents: docs }),
}))
