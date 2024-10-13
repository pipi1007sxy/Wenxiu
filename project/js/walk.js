var m_top = '100px'
var m_left = '120px'
var m_top_num = 100
var m_left_num = 120
var isclose = false
// console.log(document.getElementsByClassName('boy')[0].style.left);

function startWalk(){
document.addEventListener("keydown", function (event) {
    m_top_num = parseInt(m_top.replace('px'))
    m_left_num = parseInt(m_left.replace('px'))
    if(parseInt(m_top.replace('px'))<0)m_top = '0px'
    if(parseInt(m_left.replace('px'))<0)m_left = '0px'
    if((m_top_num>10&&m_top_num<150)&&(m_left_num>200&&m_left_num<400)){
        document.getElementById('startF').style.display = 'block'
        isclose=true
    }
    else document.getElementById('startF').style.display = 'none'
    switch (event.key) {
        case "w":
            m_top=parseInt(m_top.replace('px'))-15+'px'
            document.getElementsByClassName('people')[1].style
            .top = m_top
            $('.people').eq(1).find('img').eq(1).attr('src',`./images/m/m_up.png`)
            break;
        case "a":
            m_left=parseInt(m_left.replace('px'))-15+'px'
            document.getElementsByClassName('people')[1].style
            .left = m_left
            $('.people').eq(1).find('img').eq(1).attr('src',`./images/m/m_left.png`)
            break;
        case "d":
            m_left=parseInt(m_left.replace('px'))+15+'px'
            document.getElementsByClassName('people')[1].style
            .left = m_left
            $('.people').eq(1).find('img').eq(1).attr('src',`./images/m/m_right.png`)
            break;
        case "s":
            m_top=parseInt(m_top.replace('px'))+15+'px'
            document.getElementsByClassName('people')[1].style
            .top = m_top
            $('.people').eq(1).find('img').eq(1).attr('src',`./images/m/m_down.png`)
            break;
        case "f":
            if(isclose)
            document.getElementById('zj').play()
            startCircle()
            document.getElementById('startF').style.display = 'none'
    }
});}