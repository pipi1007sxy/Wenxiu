var list = document.getElementsByTagName("li");

var mango = document.getElementById("mango");

var bg = document.getElementById("bg");
var info = document.getElementById("info");

var bgm = document.getElementById("bgm");
var music = document.getElementsByClassName("music")[0];

function ismute(){
    if(bgm.paused){
        music.src="./images/music.png";
        bgm.play();
    }else{
        music.src="./images/mute.png";
        bgm.pause();
    }
}

//显示被抛的芒果
function appear(){
    mango.style.opacity=1;
    mango.style.transitionDuration="1.5s";
    mango.style.transitionProperty="opacity";
}
//消失
function disappear(){
    mango.style.opacity=0;
    mango.style.transitionDuration="1.5s";
    mango.style.transitionProperty="opacity";
}

//各盒子坐标
var moveX=["300px","600px","850px","300px","600px","850px"];
var moveY=["50px","250px"];

//抛物线
function run(x,y){
    mango.style.transition="all 0.5s cubic-bezier(0,0,0,0)";
    mango.style.transform="translateX("+x+")";
    var inner = document.getElementById("m");
    inner.style.transform="translateY("+y+")";
}


for(let i=0;i<list.length;i++){
    list[i].onmouseover=function(){
        appear();
    }
    list[i].onmouseout=function(){
        disappear();
    }
    if(i==0||i==1||i==2){
        list[i].onclick=function(){
            document.getElementById("sound1").play();
            run(moveX[i],moveY[0]);
            setTimeout(function(){
                show();
            },1500);
        }
    }else{
        list[i].onclick=function(){
            document.getElementById("sound1").play();
            run(moveX[i],moveY[1]);
            setTimeout(function(){
                show();
            },1500);
        }
    }
}


bgm.play();
//关闭弹窗
var c = document.getElementById("close");
c.onclick = function(){
    bg.style.display="none";
    info.style.display="none";
    disappear();
    mango.style.transition="none";
    mango.style.transform="none";
    var inner = document.getElementById("m");
    inner.style.transform="none";
    if(bgm.paused){
        bgm.play();
    }
}




//弹窗内容
var p1="<p>黄文秀（1989年4月18日—2019年6月17日），女，壮族，中共党员，出生于广西壮族自治区百色市田阳区巴别乡德爱村多柳屯，2016届广西定向选调生、北京师范大学法学硕士。本科就读于山西省长治学院。生前系广西壮族自治区百色市委宣传部副科长、派驻乐业县新化镇百坭村第一书记 。</p>"+
"<p>2018年3月26日，黄文秀来到广西壮族自治区百色市乐业县新化镇百坭村担任驻村第一书记。2019年6月17日凌晨，黄文秀从百色返回乐业途中遭遇山洪因公殉职，年仅30岁。</p>"+
"<p>2019年6月，习近平对黄文秀同志先进事迹作出重要指示；7月1日，中国共产党中央委员会宣传部追授黄文秀“时代楷模”称号；7月17日，中华全国总工会授黄文秀同志全国五一劳动奖章；9月，荣获第七届全国道德模范“全国敬业奉献模范”；9月25日，被授予“最美奋斗者”称号；10月，被追授为“全国优秀共产党员”称号；11月，入选感动中国2019候选人物。</p>"+
"<p>2020年5月17日，被评为“感动中国2019年度人物” 。2021年2月25日，被授予“全国脱贫攻坚楷模”称号；6月29日，中共中央授予黄文秀“七一勋章” 。</p>"

var p2="<div id='mangos'><img id='m1' src='./images/guifei.png'><img id='m2' src='./images/xiaotainong.png'>"+
"<img id='m3' src='./images/guiqi.png'>"+"<span id='s1'>贵妃芒</span>"+
"<span id='s2'>小台芒</span>"+"<span id='s3'>桂七</span><span id='phone'>了解百色芒果基地：15078191885 </span>"+
"<div id='m1info'>又名红金龙，核薄肉厚，果肉可食率高达90%，口味浓郁，细腻无丝，是公认的“好吃到爆的芒果”。</div>"+
"<div id='m2info'>从中国台湾引进，现在在广西广泛种植。小台农外观与大台农相似，个小味甜，果肉饱满、细嫩柔滑无纤。果核却如纸张般薄小，有核似无核。</div>"+
"<div id='m3info'>桂七芒是广西特有的芒果名品，在广西本地拥有极高的知名度及美誉度。果实呈S形，表皮青绿，果肉金黄，肉质细腻，汁水多糖分高纤维少。"+
"果期短暂，在形成规模生产前，桂七香芒作为极其贵重的水果，很少直接在市场上流通，因此也被称为芒果贡品。</div></div>";

var p3="<img id='house' src='./images/yuedong.png'><p>粤东会馆位于百色市右江区解放街39号，此馆建于清乾隆初年，由广东旅邕商帮集资兴建。"+
"原馆分前、中、后三进，周边配有厢房20多间，占地8000多平方米，现仅存前进头门。</p>"+
"<p>粤东会馆作为广东人与家乡联系的中转站，在当地广东人的心中发挥了不可替代的作用。在当地的百色人心中，粤东会馆最值得他们骄傲是因为那里曾领导过中国革命的壮举。当年，邓小平等老一辈革命家就是在这里运筹、指挥百色起义的。"+
"这是红七军军部旧址，至今保存着一代传人的史迹。</p>"+
"<p>1929年12月11日，邓小平同志成功发动发百色起义，同时，中国工农红军第七军在百色成立。"+
"军部设司令部和政治部，司令部就设在粤东会馆，司令部所属的参谋处、经理处、副官处、军医处等就在这里办公。"+
"邓小平、张云逸的办公室和住室摆设十分俭朴，每人一张办公桌和一张床铺，坐着床铺办公。</p>"+
"<p>党中央、国务院和广西壮族自治区党委、人民政府对红七军军部旧址的保护极为重视。"+
"1961年3月26日，自治区人民政府把红七军军部旧址列为自治区重点文物保护单位，同时又在旧址里建立了“右江革命文物馆”。"+
"1977年8月17日邓小平同志挥毫为红七军旧址题名：中国工农红军第七军军部旧址。"+
"1988年1月13日，国务院又把红七军军部旧址列为“全国重点文物保护单位”。 </p>";

var p4 = "<img class='instruct' src='./images/maguhu.jpg'>"+
"<p><b>马骨胡</b>，壮族拉弦乐器。壮族称冉督、冉列。流行于广西壮族自治区西林、隆林、田林、百色、靖西、德保一带和云南、湖南等省壮族地区。<br>"
+"在北路壮剧的乐器中，马骨胡是主要乐器，是其他剧种所没有的，它音色高亢嘹亮、音清远传、专奏高音部。"
+"“琴筒”用马的大筒骨制作，“琴皮”用花蛇皮或蚂拐皮，“弓”用白马尾或黑马尾加上小竹条合制，“琴弦”用高胡钢丝制成。</p>"
+"<img class='instruct' src='./images/drum.jpg'>"
+"<p><b>牛皮鼓</b>流行于广西壮族自治区南丹、田林等地。各地形制不同。田林县平山等地的大鼓，鼓框用木板拼成，两端均蒙牛皮，鼓面直径80厘米左右、鼓高100厘米～120厘米。<br>"
+"演奏时置于乐队中央，用双棰敲击，声音洪大。奏法有跨腿击、弯腰击、反击擂、交叉棰等，并交替击奏鼓心、鼓边或鼓框等。</p>"
+"<img class='instruct' src='./images/tongbo.png'>"
+"<p><b>铜钹</b>是常见的打击乐器。历史久远，表现力强。不仅在民族音乐、地方戏剧、吹打乐和锣鼓乐中使用，还广泛用于各族的民间歌舞和文娱、宣传活动中。"
+"壮师戏和富宁壮剧主要以其为伴奏乐器，广南壮剧使用大小钹为打击乐器。</p>"
+"<img class='instruct' src='./images/di.jpg'>"
+"<p><b>壮笛</b>，壮族边棱气鸣乐器。壮语称奴，直译为笛。主要分布在广西西林、 田林、百色、那坡、德保、靖西等桂西各地。<br>"
+"壮笛常用于独奏、器乐合奏或壮剧伴奏，是壮族八音乐队中 的重要乐器之一，它和马骨胡同为主奏乐器，每支八音乐队中要有两个壮笛席位。在壮剧乐 队中，壮笛也常担任领奏。</p>";

var p5="<object type='text/html' data='../project/sing.html' width='95%' height='96%'></object>";

var p6="<img class='village' src='./images/bainicun.jpg'>"+
"<p>百坭村位于广西乐业县新化镇北部，居住着壮、汉、瑶、苗等民族。这里曾经是个深度贫困村，全村共有472户2068 人，其中建档立卡贫困户195户883人，2017年未脱贫的仍有154户691人，特别是因学致贫和因残、因病致贫者占比较高。"
+"2020年，随着最后9户贫困户脱贫，全村实现贫困人口“清零”，人均纯收入超过1.5万元。</p>"+
"<p>全国优秀共产党员、时代楷模、感动中国2019年度人物黄文秀同志生前是该村的第一书记。"+
"2018年3月，黄文秀同志积极响应组织号召，到乐业县新化镇百坭村担任驻村第一书记，带领百坭村在2018年实现88户418名贫困群众脱贫，全村贫困发生率从22.88%下降为2.71%。</p>"
+"<img class='village' style='float: right;' src='./images/bainicun2.jpg'>"+
"<p>百坭村两委、驻村工作队学习弘扬黄文秀精神，带动群众大力发展扶贫产业，取得显著成效。百坭村因地制宜，发展了砂糖橘、山茶油、清水鸭、龙虾、百香果、杉木、八角、枇杷等多种特色产业。"
+"近年来，百坭村立足特色资源优势，积极探索“党建+乡村旅游”模式，因地制宜发展乡村旅游、休闲农业，促进乡村产业与文化和旅游融合发展，赋能乡村振兴。"
+"2021年，乡村旅游给群众带来的总收益约14万元，成功调动群众办旅游民宿的内生动力，积极推动村级文旅产业发展。</p>";

var p=[p1,p2,p3,p4,p5,p6];

//随机数
function randomSen(min,max){
    var num = max-min+1;
    return Math.floor(Math.random()*num+min);
}

//显示弹窗内容
function show(){
    bg.style.display="block";
    info.style.display="block";
    let index = randomSen(0,p.length-1);
    document.getElementById("content").innerHTML=p[index];
    if(index==4){
        bgm.pause();
    }
    showMango();
}

function showMango(){
    var mangos = document.getElementById("mangos");
    if(mangos!=null){
        var m1 = document.getElementById("m1");
        var m2 = document.getElementById("m2");
        var m3 = document.getElementById("m3");
        var m1info = document.getElementById("m1info");
        var m2info = document.getElementById("m2info");
        var m3info = document.getElementById("m3info");
        m1.onclick=function(){
            document.getElementById("sound2").play();
            if(m1info.style.display=="none"){
                m1info.style.display="block";
            }else{
                m1info.style.display="none";
            }
        }
        m2.onclick=function(){
            document.getElementById("sound2").play();
            if(m2info.style.display=="none"){
                m2info.style.display="block";
            }else{
                m2info.style.display="none";
            }
        }
        m3.onclick=function(){
            document.getElementById("sound2").play();
            if(m3info.style.display=="none"){
                m3info.style.display="block";
            }else{
                m3info.style.display="none";
            }
        }
    }
}

function trun(){
    var page3 = document.getElementById("page3");
    var page4 = document.getElementById("page4");
    page3.style.display='none'
    page4.style.display='block'

    // page3.style.opacity=0;
    // page3.style.transitionDuration="1.5s";
    // page3.style.transitionProperty="opacity";
    var code = Number();
    document.getElementById("code").innerHTML="NO."+code;
    page4.style.opacity=1;
    page4.style.transitionDuration="1.5s";
    page4.style.transitionProperty="opacity";

}

function Number(){
    const now = new Date();
    let year = now.getFullYear().toString();
    let month = (now.getMonth()+1).toString();
    let day = now.getDate().toString();
    let hour = now.getHours().toString();
    let minutes = now.getMinutes().toString();
    let seconds = now.getSeconds().toString();

    let num='';
    for(var i=0;i<4;i++){
        num+=randomSen(0,9);
    }
    let code = year+month+day+hour+minutes+seconds+num;
    return code;
}



