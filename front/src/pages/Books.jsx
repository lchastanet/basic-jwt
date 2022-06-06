import { useEffect, useState } from "react"
import axios from "axios"

import Book from "../components/Book"

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/book")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err.message))
  }, [])

  return (
    <div>
      <h1 className="text-center my-3">Books</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default Books
