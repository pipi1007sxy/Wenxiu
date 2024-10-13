var ishelp = false
document.getElementsByClassName('btn_help')[0].onclick = () => {
    if(!ishelp){
        $('.outWorld').css('display','block')
        $('.help_window').css('display','block')
        ishelp=true
    }
}
document.getElementsByClassName('btn_close')[0].onclick = () => {
    if(ishelp){
        $('.outWorld').css('display','none')
        $('.help_window').css('display','none')
        ishelp=false
    }
}
document.getElementsByClassName('box_')[0].onclick = () => {
    document.getElementsByClassName('first_step')[0].style.display = 'none'
    document.getElementsByClassName('second_step')[0].style.display = 'block'
    document.getElementsByClassName('btn_help')[0].style.display = 'none'
}

document.getElementsByClassName('people_kind1')[0].onclick = () => {
    document.getElementsByClassName('people_unclear')[0].getElementsByTagName('img')[0].src = './img/front2.png'
}
document.getElementsByClassName('people_kind2')[0].onclick = () => {
    document.getElementsByClassName('people_unclear')[0].getElementsByTagName('img')[0].src = './img/front3.png'
}

document.getElementsByClassName('to_step3')[0].onclick = () => {
    document.getElementsByClassName('second_step')[0].style.display = 'none'
    document.getElementById('page3').style.display = 'block'
}