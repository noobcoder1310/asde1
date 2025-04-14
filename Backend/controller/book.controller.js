import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const books = await Book.find(); // ✅ use Mongoose model directly
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
