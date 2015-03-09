var express = require('express'),
  router = express.Router();

router.get('/helloWorld', function(req, res, next) {
  res.render('components/helloWorld.html', {
    title: "Hello World"
  });
});

router.get('/todoApp', function(req, res, next){
  res.render('components/helloWorld.html', {
    title: "Todo App"
  });
});
router.get('/api1', function(req, res, next){
  res.render('components/api1.html', {
    title: "Api 1"
  });
});
router.get('/api2', function(req, res, next){
  res.render('components/api2.html', {
    title: "Api 2"
  });
});
router.get('/api3', function(req, res, next){
  res.render('components/api3.html', {
    title: "Api 3"
  });
});
router.get('/api4', function(req, res, next){
  res.render('components/api4.html', {
    title: "Api 4"
  });
});
router.get('/api5', function(req, res, next){
  res.render('components/api5.html', {
    title: "Api 5"
  });
});
router.get('/api6', function(req, res, next){
  res.render('components/api6.html', {
    title: "Api 6"
  });
});
router.get('/api7', function(req, res, next){
  res.render('components/api7.html', {
    title: "Api 7"
  });
});
router.get('/api8', function(req, res, next){
  res.render('components/api8.html', {
    title: "Api 8"
  });
});
router.get('/api9', function(req, res, next){
  res.render('components/api9.html', {
    title: "Api 9"
  });
});
router.get('/api10', function(req, res, next){
  res.render('components/api10.html', {
    title: "Api 10"
  });
});
module.exports = router;
