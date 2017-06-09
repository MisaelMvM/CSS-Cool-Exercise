var myApp = angular.module("app", ['ngMaterial']);

myApp.controller("appCtrl", function() {
	$('.nav li').click(function(){
	  $(this).addClass('is-active').siblings().removeClass('is-active');
	});



	$('.grid .item').click(function(){
	  $('.website .alert-element').toggleClass('is-active');
	});



	$('.section-modal .profile').click(function(){
	  $('.overlay').addClass('is-active');
	  console.log("Here");
	  // setTimeout(function(){
	  //   $('.overlay').removeClass('is-active');
	  // }, 5000);
	});
});


