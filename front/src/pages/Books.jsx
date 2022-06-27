import { useEffect, useState, useContext } from "react"
import bookAPI from "../services/bookAPI"

import Book from "../components/Book"

import CurrentUserContext from "../contexts/userContext"

function Books() {
  const [books, setBooks] = useState([])

  const { setUser } = useContext(CurrentUserContext)

  useEffect(() => {
    bookAPI
      .get("/api/book")
      .then((res) => {
        setUser("google")
        setBooks(res.data)
        console.log("render")
      })
      .catch((err) => console.error(err.message))
  }, [setUser])

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
