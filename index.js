import Book from './modules/Book.js';
import { showTime } from './modules/showTime.js';
import navLinks from './modules/showNavigation.js';
import addNew from './modules/addNew.js';


window.onload = () => {
    Book.showBooks();
    showTime();
    document.querySelector('form').addEventListener('submit', addNew);
    navLinks()
  };
