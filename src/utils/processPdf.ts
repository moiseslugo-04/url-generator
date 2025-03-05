import { extractPages } from './extractPages'
import { generateToken } from './generateToken'
export async function processPDF(file: File) {
  const pdf = await extractPages(file)
  return pdf.map((imageUrl, index) => ({
    page: index + 1,
    token: generateToken(),
    imageUrl,
  }))
}
