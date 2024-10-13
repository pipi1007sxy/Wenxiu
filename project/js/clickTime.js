function clickBox(){
    this.getElementsByTagName('img')[0].src = './images/bopen.png'
    this.getElementsByTagName('img')[0].style.marginTop = '100px'
    this.getElementsByTagName('img')[1].style.top = '0'
    this.getElementsByTagName('img')[0].style.opacity = '0'
    startWalk()
    this.removeEventListener('click', clickBox);
}

document.getElementsByClassName('boy')[0].addEventListener('click', clickBox);
document.getElementsByClassName('girl')[0].addEventListener('click', clickBox);

document.getElementsByClassName("refresh")[0].addEventListener('click',function(){
    location.reload();
})