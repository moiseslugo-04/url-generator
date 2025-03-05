import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist'
import pdfWorker from 'pdfjs-dist/build/pdf.worker?url'

GlobalWorkerOptions.workerSrc = pdfWorker

export async function extractPages(pdfFile: File) {
  const pdf = await getDocument(await pdfFile.arrayBuffer()).promise
  const pages = []

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const viewport = page.getViewport({ scale: 2 })
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    if (!context) continue

    canvas.width = viewport.width
    canvas.height = viewport.height

    const renderTask = page.render({ canvasContext: context, viewport })
    await renderTask.promise
    pages.push(canvas.toDataURL('image/png'))
  }

  return pages
}
