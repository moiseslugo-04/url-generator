import { Link } from 'react-router-dom'
import { usePDFStore } from '../store/PDFStore'

export default function DocumentsList() {
  const documents = usePDFStore((state) => state.documents)

  return (
    <div>
      <h1>Lista de URLs para gerar QR</h1>
      <ul>
        {documents.map(({ token, page }) => (
          <li key={token}>
            <Link to={`${window.location.origin}/document/${token}`}>
              Page {page}:{window.location.origin}/document/{token}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
