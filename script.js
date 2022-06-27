const btnLeft = document.getElementById('leftArrow');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');

const btnRight = document.getElementById('rightArrow');
const picture = document.getElementById('picture');
let timerId;
let i = 0;
const img1 = 'img/p1.jpg';
const img2 = 'img/p2.jpg';
const img3 = 'img/p3.jpg';
const img4 = 'img/p4.jpg';
const img5 = 'img/p5.jpg';
const img6 = 'img/p6.jpg';
const img = [img1,img2,img3,img4,img5,img6];
function indexPlus(){
	if(i <=-1){
		i = 1;
	}

	if(i>=6){
		i=0;
	}
	picture.src = img[i];
	return i=i+1;
}
function indexMinus(){
	if(i <=-1){
		i = 0;
	}
	if(i>=6){
		i=4;
	}
	picture.src = img[i];
	return i=i-1;
}


btnRight.addEventListener('click',indexPlus)
btnLeft.addEventListener('click',indexMinus)
btnPlay.addEventListener('click',function(){
	clearInterval(timerId);
	timerId = setInterval(indexPlus,1000)

})
btnPause.addEventListener('click',function(){
	clearInterval(timerId);
})
function autoChange(){
	
}
