import { useParams } from 'react-router-dom'
import { usePDFStore } from '../store/PDFStore'
import ErrorPage from './ErrorPage'

export default function DocumentPage() {
  const { token } = useParams()
  const { documents } = usePDFStore()
  const document = documents.find((doc) => doc.token === token)

  if (!document) {
    return <ErrorPage />
  }

  return (
    <div>
      <h1>Carné Digital</h1>
      <img
        style={{ maxWidth: '300px' }}
        src={document.imageUrl}
        alt={`Página ${document.page}`}
      />
    </div>
  )
}
