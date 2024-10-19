var express = require('express');
var router = express.Router();

/* GET kakao page. */
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색',pageName:'kakao/book.ejs' });
});


// 지역검색
router.get('/local', function(req, res, next) {
  res.render('index', { title: '지역검색',pageName:'kakao/local.ejs' });
});

// 지역검색
router.get('/blog', function(req, res, next) {
  res.render('index', { title: '블로그검색',pageName:'kakao/blog.ejs' });
});

// 도서정보
router.get('/book/info', function(req, res, next) {
 const title = req.query.title;
 const thumbnail = req.query.thumbnail;
 const price = req.query.price;
 const isbn = req.query.isbn;
 const authors = req.query.authors;
 const publisher = req.query.publisher;
 const contents = req.query.contents;


 const info = {title, thumbnail, price, isbn, authors, publisher, contents}
  res.render('index', { title: '도서정보',pageName:'kakao/info.ejs', info});
});



module.exports = router;
