import { useNavigate } from 'react-router-dom'
import { usePDFStore } from '../store/PDFStore'
import { processPDF } from '../utils/processPdf'

export default function UploadPage() {
  const navigate = useNavigate()
  const { setDocuments } = usePDFStore()

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]
    if (!file) return

    const documents = await processPDF(file)
    setDocuments(documents)
    //  Redirect to URL list
    navigate('/documents')
  }

  return (
    <div>
      <h1>Carregar arquivo PDF</h1>
      <input type='file' accept='application/pdf' onChange={handleFileUpload} />
    </div>
  )
}
