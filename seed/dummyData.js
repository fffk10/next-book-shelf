const dummyBooks = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
    isbn: '978-1234567890',
    publisher: 'Publisher 1',
    publishedDate: '2022-01-01',
    description: 'Description 1',
    coverImage: 'cover1.jpg',
  },
  {
    id: 2,
    title: 'Book 2',
    author: 'Author 2',
    isbn: '978-0987654321',
    publisher: 'Publisher 2',
    publishedDate: '2021-06-15',
    description: 'Description 2',
    coverImage: 'cover2.jpg',
  },
  {
    id: 3,
    title: 'Book 3',
    author: 'Author 3',
    isbn: '978-5555555555',
    publisher: 'Publisher 3',
    publishedDate: '2020-12-25',
    description: 'Description 3',
    coverImage: 'cover3.jpg',
  },
]

const dummyUsers = [
  {
    id: 1,
    username: 'user1',
    email: 'user1@example.com',
    password: 'password1',
    role: 'user',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    password: 'password2',
    role: 'user',
  },
  {
    id: 3,
    username: 'admin',
    email: 'admin@example.com',
    password: 'adminpass',
    role: 'admin',
  },
]

const dummyCategories = [
  {
    id: 1,
    name: 'Fiction',
  },
  {
    id: 2,
    name: 'Non-Fiction',
  },
  {
    id: 3,
    name: 'Science',
  },
]

const dummyBookCategories = [
  {
    bookId: 1,
    categoryId: 1,
  },
  {
    bookId: 2,
    categoryId: 2,
  },
  {
    bookId: 3,
    categoryId: 3,
  },
]

const dummyReviews = [
  {
    id: 1,
    bookId: 1,
    userId: 1,
    rating: 4,
    comment: 'Great book!',
    createdAt: '2023-04-01',
  },
  {
    id: 2,
    bookId: 2,
    userId: 2,
    rating: 3,
    comment: 'Average read.',
    createdAt: '2023-03-15',
  },
  {
    id: 3,
    bookId: 3,
    userId: 1,
    rating: 5,
    comment: 'Highly recommended!',
    createdAt: '2023-02-20',
  },
]

const dummyUserBooks = [
  {
    userId: 1,
    bookId: 1,
    acquiredDate: '2023-04-01',
  },
  {
    userId: 2,
    bookId: 2,
    acquiredDate: '2023-03-15',
  },
  {
    userId: 1,
    bookId: 3,
    acquiredDate: '2023-02-20',
  },
]
