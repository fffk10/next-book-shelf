type GoogleBook = {
  kind: string
  id: string
  etag: string
  volumeInfo: {
    authors: string[]
    categories: string[]
    title: string
    industryIdentifiers: {
      type: string
      identifier: string
    }[]
    publisher: string
    publishedDate: string
    description: string
  }
}
