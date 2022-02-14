let index=0;

const imageList = [
    './Assets/images/A1.jpg',
    './Assets/images/A2.jpg',
    './Assets/images/A3.jpg',
    './Assets/images/A4.jpg',
    './Assets/images/A5.jpg'
];
function goLeft (){
    if(index>0){
        index-=1;
        document.getElementById("parent").src=imageList[index];
    }
}
function goRight (){
    if(index<4){
        index++;
        document.getElementById("parent").src =imageList[index];
    }
}
setInterval(goRight,5000);