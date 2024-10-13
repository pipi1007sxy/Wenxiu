const m_arr = ['m_down','m_left','m_up','m_right']
const f_arr = ['f_down','f_left','f_up','f_right']
var m_num = 0, f_num = 0

// startCircle()
function startCircle(){
    m_num=0
    f_num=0
    const startCircleCode = setInterval(() => {
        $('.people').eq(1).find('img').eq(1).attr('src',`./images/m/${m_arr[m_num++]}.png`)
        if(m_num>3)m_num=0
        $('.people').eq(0).find('img').eq(1).attr('src',`./images/m/${f_arr[f_num++]}.png`)
        if(f_num>3)f_num=0
        console.log(f_num,m_num);
    }, 500);
}