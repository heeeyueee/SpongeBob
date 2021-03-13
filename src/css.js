const string = `
我是一个前端新人
现在一起来画一只海绵宝宝~
点击下面的按钮可以选择
[暂停][播放][慢速][快速]
.face {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: 100px auto;
	width: 600px;
	height: 600px;
	text-align: center;
}
@media (min-width:500px) {
	.face {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: 100px auto;
		width: 600px;
		height: 600px;
		text-align: center;
	}

}


.eyes {
	position: relative;
	top: 10%;
	display: inline-block;
	border-radius: 50%;
	width: 200px;
	height: 200px;
	border: 5px solid black;
	background: white;
	-webkit-animation: blink forwards 
	infinite 6s ease-in-out;
	        animation: blink forwards 
			infinite 6s ease-in-out;
}

.eyes::after {
	position: absolute;
	top: 30%;
	left: 32%;
	content: '';
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 5px solid black;
	background: #0099ff;
	display: block;
}

.eyes::before {
	z-index: 9999;
	position: absolute;
	top: 37%;
	left: 39%;
	content: '';
	width: 25px;
	height: 25px;
	background: #000;
	border-radius: 50%;
}

.eyebrow {
	position: absolute;
	top: -50px;
	left: 85px;
	height: 50px;
	width: 15px;
	background-color: #000;
}

.eyebrow::after {
	content: '';
	display: block;
	position: absolute;
	top: 21px;
	left: -70px;
	height: 50px;
	width: 15px;
	background: #000;
	-webkit-transform: rotate(-45deg);
	        transform: rotate(-45deg);
}

.eyebrow::before {
	content: '';
	display: block;
	position: absolute;
	top: 20px;
	left: 70px;
	height: 50px;
	width: 15px;
	background: #000;
	-webkit-transform: rotate(45deg);
	        transform: rotate(45deg);
}

.blush-group {
	position: absolute;
	top: 20%;
	width: 600px;
	/* z-index: 9999; */
}

.nose {
	position: absolute;
	left: 43%;
	width: 80px;
	height: 120px;
	border-radius: 70%;
	border: 5px solid #000;
	background-color: rgba(253,219,33,1);
	z-index: 9999;
}

.nose::after {
	content: '';
	position: absolute;
	top: 55%;
	left: 5%;
	background-color: rgba(253,219,33,1);
	width: 60px;
	height: 60px;
	border-radius: 50%;
	z-index: 9999;
}

.blush {
	position: absolute;
	margin-top: 20px;
	border: 5px solid rgb(215,60,18);
	border-radius: 50px;
	width: 90px;
	height: 90px;
	background-color: rgba(253,219,33,1);
	z-index: 9999;
}

.blush::after {
	content: '';
	position: absolute;
	top: 40%;
	left: -5%;
	width: 80px;
	height: 60px;
	background-color: rgba(253,219,33,1);
	border-radius: 50%;
	-webkit-transform: rotate(-60deg);
	        transform: rotate(-60deg);
	z-index: 9999;
}

.blush::before {
	content: '';
	position: absolute;
	top: 50%;
	left: 60%;
	width: 20px;
	height: 40px;
	background-color: rgba(253,219,33,1);
	z-index: 9999;
}

.blush-group .blush.left {
	left: 15%;
}

.blush-group .blush.right {
	right: 15%;
}

.freckless {
	display: block;
	position: absolute;
	left: 15%;
	top: 30%;
	width: 10px;
	height: 10px;
	background-color: rgb(215,60,18);
	border-radius: 50%;
	z-index: 9999;
}

.freckless::after {
	content: '';
	display: block;
	position: absolute;
	left: 45px;
	width: 10px;
	height: 10px;
	background-color: rgb(215,60,18);
	border-radius: 50%;
	z-index: 9999;
}

.freckless::before {
	content: '';
	display: block;
	position: absolute;
	left: 20px;
	top: -15px;
	width: 10px;
	height: 10px;
	background-color: rgb(215,60,18);
	border-radius: 50%;
	z-index: 9999;
}

.mouth-group {
	position: absolute;
	width: 600px;
	height: 120px;
	z-index: 9999;
}

.mouth-group .lips {
	position: absolute;
	top: -50px;
	left: 15%;
	width: 420px;
	height: 120px;
	border: solid 5px #000;
	border-color: #000 transparent 
	transparent transparent;
	border-radius: 50%/100px 100px 0 0;
	-webkit-transform: rotate(180deg);
	        transform: rotate(180deg);
	z-index: 9999;
}

.mouth-group .lips::after {
	content: '';
	position: absolute;
	top: 30px;
	right: 18px;
	width: 20px;
	height: 20px;
  	border: 5px solid transparent;
  	border-left: 5px solid #000;
  	-webkit-transform: rotate(30deg);
  	        transform: rotate(30deg);
}

.mouth-group .lips::before {
	content: '';
	position: absolute;
	top: 25px;
	left: 32px;
	width: 20px;
	height: 20px;
  border: 5px solid transparent;
  border-left: 5px solid #000;
  -webkit-transform: rotate(-30deg);
          transform: rotate(-30deg);
}

.tooth {
	position: absolute;
	top: 65px;
	left: 40%;
	width: 50px;
	height: 50px;
	background-color: white;
	border-radius: 5px;
	-webkit-transform: rotate(5deg);
	        transform: rotate(5deg);
	border: 5px solid #000;
}

.tooth.left {
	top: 65px;
	left: 40%;
}

.tooth.right {
	top: 65px;
	left: 52%;
	-webkit-transform: rotate(-5deg);
	        transform: rotate(-5deg);
}

.chin {
	position: absolute;
	left: 36%;
	top: 100%;
	width: 80px;
	height: 50px;
	border-radius: 45%;
	border: 5px solid rgb(215,60,18);
}

.chin::after {
	content: '';
	position: absolute;
	left: 90%;
	top: -10%;
	width: 80px;
	height: 50px;
	border-radius: 50%;
	border: 5px solid rgb(215,60,18);
}

.chin::before {
	content: '';
	position: absolute;
	left: -10%;
	top: -12%;
	background-color: rgba(253,219,33,1);
	width: 165px;
	height: 38px;
	z-index: 9999;
}

.pore {
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: rgb(174,172,12);
}

.pore-01 {
	width: 80px;
	height: 80px;
	bottom: 140px;
	left: 20px;
}

.pore-02 {
	width: 80px;
	height: 80px;
	bottom: 30%;
	right: 50px;	
}

.pore-03 {
	width: 30px;
	height: 30px;
	bottom: 40%;
	left: 20px;
}

.pore-04 {
	width: 80px;
	height: 80px;
	left: 5px;
}

.pore-05 {
	width: 30px;
	height: 30px;
	top: 5%;
	right: 10px;
}

.pore-06 {
	width: 40px;
	height: 40px;
	top: 20%;
	left: 20px;
}

.pore-07 {
	width: 40px;
	height: 40px;
	bottom: 22%;
	right: 40px;
}

@-webkit-keyframes blink { 
  0%, 2%, 60%, 62%, 100% { 
  	-webkit-transform: scaleX(1)
	  scaleY(1); 
  	        transform: scaleX(1) 
			  scaleY(1); 
  } 
  1%, 61% { 
  	-webkit-transform: scaleX(1.5) 
	  scaleY(0.1); 
  	        transform: scaleX(1.5)
			   scaleY(0.1); 
  } 
}

@keyframes blink { 
  0%, 2%, 60%, 62%, 100% { 
  	-webkit-transform: scaleX(1)
	   scaleY(1); 
  	        transform: scaleX(1) 
			  scaleY(1); 
  } 

  1%, 61% { 
  	-webkit-transform: scaleX(1.5) 
	  scaleY(0.1); 
  	transform: scaleX(1.5)
			   scaleY(0.1); 
  } 
}
`
export default string;