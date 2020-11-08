class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
        if (this._state > 100) {
            this._state = 100;
        }
        if (this._state < 0) {
            this._state = 0;
        }
        return this.state;
    }

    fix() {
        return this.state = Math.round(this.state * 1.5);
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = books || [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
            return true;
        }
        return false;
    }

    findBookBy(field, value) {
        return this.books.filter((book) => book[field] === value)[0] || null;
    }

    giveBookByName(bookName) {
        for (let item = 0; item < this.books.length; item += 1) {
            if (this.books[item].name === bookName) {
                return this.books.splice(item, 1)[0];
            }
        }
        return null;
    }
}

const myLibrary = new Library('Моя библиотека');
myLibrary.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
myLibrary.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
myLibrary.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
myLibrary.addBook(new Magazine("Мурзилка", 1924, 60));
myLibrary.addBook(new Book("Александр Сергеевич Пушкин", "Сказки", 1919, 123));

console.log(myLibrary.books);
console.log(myLibrary.findBookBy('releaseDate', 1919));

const takingBook = myLibrary.giveBookByName('Пикник на обочине');
console.log(takingBook);
console.log(myLibrary.books);
takingBook.state = 30;
myLibrary.addBook(takingBook);
console.log(myLibrary.addBook(takingBook));
takingBook.fix();
console.log(myLibrary.addBook(takingBook));
console.log(myLibrary.books);

class StudentLog {
    constructor(name) {
        this.name = name
        this.marks = [];
    }

    getName() {
        return this.name
    }

    getIndexOfSubject(subject) {
        for (let item = 0; item < this.marks.length; item += 1) {
            if (this.marks[item].subject === subject) {
                return item;
            }
        }
        return null;
    }

    addGrade(grade, subject) {
        function checkGrade(grade) {
            return (Number.isInteger(grade)) && (grade >= 1) && (grade <= 5);
        }

        const subjectIndex = this.getIndexOfSubject(subject);

        if (subjectIndex !== null) {
            if (checkGrade(grade)) {
                this.marks[subjectIndex].items.push(grade);
            }
            return this.marks[subjectIndex].items.length;
        }

        if (checkGrade(grade)) {
            this.marks.push({subject: subject, items: [grade]});
            return 1;
        }
        return 0;
    }

    getAverageBySubject(subject) {
        const subjectIndex = this.getIndexOfSubject(subject);
        if (subjectIndex !== null) {
            let sum = 0;
            let counter = 0;
            this.marks[subjectIndex].items.forEach(function (item) {
                sum += item;
                counter += 1;
            });
            return (sum / counter) || 0;
        }
        return 0;
    }

    getTotalAverage() {
        let sum = 0;
        let counter = 0;
        this.marks.forEach(function (subject) {
            subject.items.forEach(function (item) {
                sum += item;
                counter += 1;
            });
        });
        return (sum / counter) || 0;
    }
}
