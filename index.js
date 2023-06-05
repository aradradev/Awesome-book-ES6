import Book from './modules/Book.js';
import { DateTime } from './modules/luxon.js';

Book.showBooks();
document.querySelector('form').addEventListener('submit', Book.addNew);
Book.showNaviagtionBar();
Book.showTime();
DateTime.now().toString();
