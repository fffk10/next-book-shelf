type GoogleBook = {
  kind: string
  id: string
  etag: string
  volumeInfo: {
    authors: string[]
    categories: string[]
    title: string
  }
}
