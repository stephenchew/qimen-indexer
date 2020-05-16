import { Callable, createRunner } from './util/runner';

const body1 = `<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><div style="width:auto;"><html><head><met
a http-equiv="Content-Type" content="text/html; charset=utf-8"></head><meta http-equiv="Content-Type" conten
t="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Language" content="zh-tw">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style type="text/css">
<!--
@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css);
@import url(https://fonts.googleapis.com/earlyaccess/notosanssc.css);
body {font-family: "Noto Sans TC", "Noto Sans SC", "Microsoft JhengHei", "Microsoft YaHei", SimHei, Sans-Serif, Arial;color:#000;}
body {-webkit-print-color-adjust: exact;}
.tdW {background-color: #FFFFFF}
.tdB {background-color: #000000}
.td1 {background-color: #75794C; color: #FFFFFF;}
.td1C {background-color: #898953; color: #FFFFFF;}
.td2 {background-color: #B9B87D}
.td3 {background-color: #D1D175}
.td4 {background-color: #B2B281}
.td5 {background-color: #DBD7BC}

.logo{margin: 0 15px 8px 15px;}
.抬頭館號{font-size: 1.3em;font-weight:700;}
.抬頭館號E {font-size: 1.0em; line-height: 1.5em; font-weight:700; font-family: "Arial"}
.抬頭館號E span {font-size: 0.4em;}
.抬頭館號E2{line-height: 0.3em;font-size: 0.7em;font-weight:100;}
.四柱{font-size:3.5em;line-height:61px;font-weight: 700;color: #827B45;}
.五行 {font-size:0.7em;}
.五行-木{color:#079436;}
.五行-火{color:#E20A0D;}
.五行-土{color:#B07F46;}
.五行-金{color:#FAAE47;}
.五行-水{color:#2D9CDD;}
.盤體{background: linear-gradient(to bottom, rgba(255, 255, 255,0.7) 15%, rgba(255,255,255,0.7) 15%), url('https://www.ncc.com.tw/image/fengshui/wbg.png') no-repeat center center;background-size:cover}
.外緣{font-size:1.6em;color:#000;font-weight: 400;background:#827B45;letter-spacing:0px;line-height:1.1em;padding:1px;}
.平{height:35px;}
.直{width:35px;}
td span.直{width:15px;display:block;line-height:18px;}
td span.平{width:35px;display:block;word-break:keep-all;margin-bottom:-14px;}
.方位{color:#FFF;text-align:center;}
.窄{width: 35px;}
.塊{display:block;}
.置左{float:left;}
.置右{float:right;}
.九宮{border: 1px solid #000;width:230px;height:219px;overflow:hidden;}
.九宮>table{font-size:1.85em;font-weight:700;}
.九宮>table>tr>td {width:88px;height:88px;}
.九宮 font>sub{font-size:0.5em;font-weight:400;margin-bottom:3px;}
.折行{width:1.6em;line-height:1em}
.干支{font-size:0.5em;width:0.5em;display:inline-block;line-height:1em;}
.八門{font-size:1.7em;font-weight:900;border: 5px solid Gray;color:Gray;}
td.mark{background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAADFBMVEUAAAAAAAAAAAAAAAA16TeWAAAABHRSTlMAJidNXfvTgAAAAEhJREFUeNqNykEBADAIACF0/Tsvgscb807sfUISkpCEJCQhCUlIQhKSkIQkJCEJSUhCEpKQhCQkIQlJSEISkpCEJCQhCUlIQvqOpgc/ctoBmwAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:top right;}
.九宮-2 td{font-size:2em;font-weight:700;}
.九宮-3 td{height:67px; width:26px; overflow: hidden;text-align:center;font-size:1.2em;vertical-align:middle;}
.空 {border-radius:25px;padding:0px 3px;border:2px solid Gray;display: table;font-size:1em;font-weight:300;margin-bottom:3px;}
.遁 {padding:1px 5px;display:inline-block;font-size:0.5em;font-weight:300;background:#000;color:#FFF;border-radius:20px;margin:5px;}
.格局 td {width:10%;height:67px;font-size:0.5em;line-height:1em;vertical-align:middle;font-weight:400;}
.格局 td.天干{width:1em;font-size:1.0em;vertical-align:middle;font-weight:700;}
.格局 td.九數{font-size:1.5em;text-align:center;vertical-align:middle;font-weight:600;}
.格局 td.九數 span{margin-right: 7px;}
.卦64{width:45px;height:51px;background-repeat:no-repeat;background-position:left top;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtQAAADMCAMAAABk6cQdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDgtMTRUMDk6NDk6MzIrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA4LTE0VDEwOjU5OjU2KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA4LTE0VDEwOjU5OjU2KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRkZFMTMzQzlGNkUxMUU4QjAxM0RGMzlFMzUzRkQxRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRkZFMTMzRDlGNkUxMUU4QjAxM0RGMzlFMzUzRkQxRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFGRkUxMzNBOUY2RTExRThCMDEzREYzOUUzNTNGRDFFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFGRkUxMzNCOUY2RTExRThCMDEzREYzOUUzNTNGRDFFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+X5admwAAAAZQTFRFLS0t////deIVYwAAAAJ0Uk5T/wDltzBKAAAD7klEQVR42uzdMXLjMBBFQeL+l3biQIGtEgVy8AfsF25pWTK3g+EsLB1D2qzDLRDUUgPUx2f9/oW//vC/P//vxR+9+rv3ceOlL3/xqbdx45u+5o3k3GmooYYaaqihhhpqqKGGeh61ZKUnQS3tuqfuORbWj8lPvXktHxShhhpqqKGGGmqooYZ6U9SSlZ4EtbTrnnoUTFhjj7FwOPvx/ZWhhhpqqKGGGmqooYYa6nnUkpWeBLVkT500cda/6WVPDaHHW87eaaihhhpqqKGGGmqooYZ6HrVkpSdBLdlTXzaOdT2+MJb8ImHKY8O+D4pQQw011FBDDTXUUEPdBrVkpSdBLe26p+556ZCBM2amDnkgSXlQhBpqqKGGGmqooYYa6k1RS1Z6EtQS1BLUEtTaG3X90UJHTx09nb3ymxdDDTXUUEMNNdRQQw011P6bXLLSE9RS9z11wRg0Oo2FaQPn6s9BDnnGOPegCDXUUEMNNdRQQw011FDbU8tKT4JasqfOGgvN1K2Ot5x9MdRQQw011FBDDTXUUEM9j1qy0pOgltbuqVuOhaPgXWcO4GbqTx4UoYYaaqihhhpqqKGGGmp7alnpSVBL9tSNj5WYqSMfSFIeFKGGGmqooYYaaqihhnpT1JKVngS1tHZPvdUZg5Zf47LsJ9z3i4yghhpqqKGGGmqooYYaap9PLSs9CWoJaglqCWrpBbWVXt7pybHJRyQseTHUUEMNNdRQQw011FBD7b/JJSs9QS3ZUx/P/da0lJ8w7lRr5bldqKGGGmqooYYaaqihhnoetWSlJ0EtNdpTpxxfODeutx7Ah5n65gNNUEMNNdRQQw011FBDDbVkpSdBLe27p44ZC9PGZDfv0itDDTXUUEMNtX8XqKGG2s2bRy1Z6UlQS2v31AUzU6uJs36WfepMfdWLoYYaaqihhhpqqKGGGmp7aslKT1BL9tTHc3/NrvdPmPs1LmPyF2+hhhpqqKGGGmqooYYaap/7ISs9CWoJaglqCWrpBfXzVnqn3kf9m66+eRWXrrzTUEMNNdRQQw011FBDDfU8aslKT4JaWrunLpiZ6ias6NOTKUdPU87tXnVlqKGGGmqooYYaaqihhnoetWSlJ0EtNdpTxx3QyP2A2QZPDSN2TB6x36MINdRQQw011FBDDTXUm6KWrPQkqKVd99QLBt+u35o2cr+vL+TmvXkbUEMNNdRQQw011FBDDfU8aslKT4JaWrunvm9mihkLC45RLH5qSLn0kpsHNdRQQw011FBDDTXUUM+jlqz0JKiltXvq+lMUG/2OYv0MWX7pkFM2b64MNdRQQw011FBDDTXUUM+jlqz0JKilwn4EGAC8xz037ukXwgAAAABJRU5ErkJggg==');}
.天{background-position: 3px 0px;}.地{background-position: -42px 0px;}.屯{background-position: -87px 0px;}.蒙{background-position: -133px 0px;}.需{background-position: -178px 0px;}.訟{background-position: -224px 0px;}.師{background-position: -269px 0px;}.比{background-position: -314px 0px;}.小畜{background-position: -359px 0px;}.履{background-position: -404px 0px;}.泰{background-position: -450px 0px;}.否{background-position: -495px 0px;}.同人{background-position: -541px 0px;}.大有{background-position: -586px 0px;}.謙{background-position: -631px 0px;}.豫{background-position: -676px 0px;}.隨{background-position: 3px -51px;}.蠱{background-position: -42px -51px;}.臨{background-position: -87px -51px;}.觀{background-position: -133px -51px;}.噬嗑{background-position: -178px -51px;}.賁{background-position: -224px -51px;}.剝{background-position: -269px -51px;}.復{background-position: -314px -51px;}.旡妄{background-position: -359px -51px;}.大畜{background-position: -404px -51px;}.頤{background-position: -450px -51px;}.大過{background-position: -495px -51px;}.水{background-position: -541px -51px;}.火{background-position: -586px -51px;}.咸{background-position: -631px -51px;}.恆{background-position: -676px -51px;}
.遯{background-position: 3px -102px;}.大壯{background-position: -42px -102px;}.晉{background-position: -87px -102px;}.明夷{background-position: -133px -102px;}.家人{background-position: -178px -102px;}.睽{background-position: -224px -102px;}.蹇{background-position: -269px -102px;}.解{background-position: -314px -102px;}.損{background-position: -359px -102px;}.益{background-position: -404px -102px;}.夬{background-position: -450px -102px;}.姤{background-position: -495px -102px;}.萃{background-position: -541px -102px;}.升{background-position: -586px -102px;}.困{background-position: -631px -102px;}.井{background-position: -676px -102px;}
.革{background-position: 3px -153px;}.鼎{background-position: -42px -153px;}.雷{background-position: -87px -153px;}.山{background-position: -133px -153px;}.漸{background-position: -178px -153px;}.歸妹{background-position: -224px -153px;}.豐{background-position: -269px -153px;}.旅{background-position: -314px -153px;}.風{background-position: -359px -153px;}.澤{background-position: -404px -153px;}.渙{background-position: -450px -153px;}.節{background-position: -495px -153px;}.中孚{background-position: -541px -153px;}.小過{background-position: -586px -153px;}.既濟{background-position: -631px -153px;}.未濟{background-position: -676px -153px;}
small.天干{position:relative;top:-11px;left:3px;border-radius:20px;border: 1px solid black;padding: 0px 2px 2px 2px;color:black;font-size:0.8em;width:17px;display:grid;text-align:center}
.粗 {font-weight: 500;}
.吉格 {color: red;}
.黑細 {color: black;}
.黑粗 {color: black; font-weight: bold;}
.紅細 {color: red;}
.紅粗 {color: red; font-weight: bold;}
.藍細 {color: blue;}
.藍粗 {color: blue; font-weight: bold;}
.深藍細 {color: navy;}
.深藍粗 {color: navy; font-weight: bold;}
.綠細 {color: green;}
.綠粗 {color: green; font-weight: bold;}
.紫細 {color: purple;}
.紫粗 {color: purple; font-weight: bold;}
.咖細 {color: #800000;}
.咖粗 {color: #800000; font-weight: bold;}
.橘細 {color: #FF8040;}
.橘粗 {color: #FF8040; font-weight: bold;}
.桃細 {color: #FF64FF;}
.桃粗 {color: #FF64FF; font-weight: bold;}
.肝細 {color: #C80000;}
.肝粗 {color: #C80000; font-weight: bold;}
.土細 {color: #808000;}
.土粗 {color: #808000; font-weight: bold;}
.白{color: #FFF;}
@media print {
.hidden {display: none;}
}
//-->
</style>
<style type="text/css">
<!--
.格局 td.九數{padding-right:0.1rem}
//-->
</style>
<table width="870" cellpadding="2" cellspacing="1" align="center" class="">
  <tr class="td1">
    <td valign="top"><table width="100%" cellpadding="8" cellspacing="2" border="0">
        <tr class="td1">
          <td></td>
          <td width="1%" valign="middle" nowrap>
            <img src="https://www.ncc.com.tw/image/fengshui/logo.png" width="350" class="logo">
          </td>
        </tr>
      </table></td>
  </tr>
</table>
<table width="870" cellpadding="2" cellspacing="1" align="center" class="" style="margin-top:5px;">
  <tr class="tdW" width="55%">
    <td valign="top">

      <table width="100%" cellpadding="0" cellspacing="1" class="tdB">
        <tr>
          <th width="25%" class="td1">時 Hour</th>
          <th width="25%" class="td1">日 Day</th>
          <th width="25%" class="td1">月 Month</th>
          <th width="25%" class="td1">年 Year</th>
        </tr>
        <tr class="tdW">
          <td>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">壬</td>
                <td width="25%" class="五行-水 粗" valign="bottom">水</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Ren, Water</td>
              </tr>
            </table>
          </td>
          <td>
            <table width="100%" cellpadding="0" cellspacing="02">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">庚</td>
                <td width="25%" class="五行-金 粗" valign="bottom">金</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Geng, Metal</td>
              </tr>
            </table>
          </td>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">辛</td>
                <td width="25%" class="五行-金 粗" valign="bottom">金</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Xin, Metal</td>
              </tr>
            </table>
          </td>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">庚</td>
                <td width="25%" class="五行-金 粗" valign="bottom">金</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Geng, Metal</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr class="tdW">
          <td>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">午</td>
                <td width="25%" class="五行-火 粗" valign="bottom">火</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Horse, Fire</td>
              </tr>
            </table>
          </td>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">戌</td>
                <td width="25%" class="五行-土 粗" valign="bottom">土</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Dog, Earth</td>
              </tr>
            </table>
          </td>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">巳</td>
                <td width="25%" class="五行-火 粗" valign="bottom">火</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Snake, Fire</td>
              </tr>
            </table>
          </td>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">子</td>
                <td width="25%" class="五行-水 粗" valign="bottom">水</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Rat, Water</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
    <td width="45%" valign="top">

      <table width="100%" cellpadding="2" cellspacing="1" class="tdB" style="line-height: 2.1em">
        <tr>
          <th width="12%" class="td2 白">陽曆</th>
          <td width="61%" class="tdW">07/05/2020</td>
          <th width="12%" class="td2 白">值使</th>
          <td width="15%" class="tdW">東南</td>
        </tr>
        <tr>
          <th class="td2 白">時間</th>
          <td class="tdW">11:38am</td>
          <th class="td2 白">值符</th>
          <td class="tdW">天芮</td>
        </tr>
        <tr>
          <th class="td2 白">農曆</th>
          <td class="tdW" nowrap>二○二○年四月十五日午時</td>
          <th class="td2 白">符首</th>
          <td class="tdW">甲戌</td>
        </tr>
        <tr>
          <th class="td2 白">局數</th>
          <td class="tdW">陽四局</td>
          <th class="td2 白">節氣</th>
          <td class="tdW">立夏</td>
        </tr>
        <tr>
          <th class="td2 白">格局</th>
          <td colspan="3" class="tdW">天干反吟、九星反吟</td>
        </tr>
      </table>
    </td>
  </tr>
</table>
<table width="870" cellpadding="2" cellspacing="1" align="center">
  <tr>
    <td valign="top">
      <table border="0" cellspacing="0" cellpadding="0" align="center" width="100%" height="100%" class="td5">
        <tr><!--top-->
          <td class="卦64 否" valign="middle" align="center"></td>
          <td align="left" valign="middle"><span class="直">庚戌</span></td>
          <td align="center">
            <table border="0" cellpadding="3" cellspacing="0" align="center">
              <tr>
                <td><span class="直">己卯</span></td>
                <td class="卦64 節" valign="middle" align="center"></td>
                <td valign="middle"><span class="平">節</span></td>
              </tr>
            </table>
          </td>
          <td align="right" valign="middle"><span class="直">壬辰</span></td>
          <td class="卦64 大畜" valign="middle" align="center"></td>
        </tr>
        <tr><!--middle top-->
          <td valign="top" align="center" valign="middle" height="300"><span class="平">否</span></td>
          <td colspan="3" rowspan="3" valign="top" align="center" class="tdW">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" class="盤體">
        <tr>
          <td width="10" rowspan="2" align="center" valign="top" class="外緣 直"><span class="方位 塊 窄" style="margin-bottom:80px;">東南4</span><font color="#000000">辰</font></td>
          <td align="center" class="外緣 平"><span class="方位 置左">SE</span><font color="#000000" style="margin-left: -30px">巳</font></td>
          <td align="center" class="外緣 平"><span class="方位">S南9</span><font color="#000000">午</font></td>
          <td align="center" class="外緣 平"><font color="#000000" style="margin-left: 30px">未</font><span class="方位 置右">SW</span></td>
          <td rowspan="2" align="center" valign="top" class="外緣 直"><span class="方位 塊 窄" style="margin-bottom:80px;">西南2</span><font color="#000000">申</font></td>
        </tr>
        <tr>
          <td class="九宮" style="border-top-width:2px;border-left-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-木" style="padding-left:15px;">巽<sub>木</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-金">庚</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" ><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-金 折行">天心</div></td>
                <td><div class="八門"><font class="五行-土">死</font></div></td>
                <td><div class="折行">太陰</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td>宮迫</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td class="天干 五行-土">戊</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>９</span></td>
              </tr>
            </tbody>
          </table></td>
          <td class="九宮" style="border-top-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-火" style="padding-left:15px;">離<sub>火</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-火">丁</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" class="mark"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-水 折行">天蓬</div></td>
                <td><div class="八門"><font class="五行-金">驚</font></div></td>
                <td><div class="折行">六合</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td><span class="吉格">地詐</span></td>
                <td><span class="吉格">丁奇旺相</span></td>
                <td>朱雀投江</td>
                <td>宮迫</td>
                <td class="天干 五行-水">癸</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>５</span></td>
              </tr>
            </tbody>
          </table></td>
          <td class="九宮" style="border-top-width:2px;border-right-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-土" style="padding-left:15px;">坤<sub>土</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-水">壬</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" class="mark"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>申</td>
                        <td><div class="空">空</div><div class="空">馬</div></td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-土 折行">天任</div></td>
                <td><div class="八門"><font class="五行-金">開</font></div></td>
                <td><div class="折行">勾陳</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td><span class="吉格">人詐</span></td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td class="天干 五行-火">丙</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>７</span></td>
              </tr>
            </tbody>
          </table></td>
        </tr>
        <tr>
          <td align="center" valign="top" class="外緣 直"><span class="方位 塊 窄" style="margin-top:50px;">E東3</span><font color="#000000">卯</font></td>
          <td class="九宮" style="border-left-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-木" style="padding-left:15px;">震<sub>木</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-金">辛</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" ><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-金 折行">天柱</div></td>
                <td><div class="八門"><font class="五行-火">景</font></div></td>
                <td><div class="折行">螣蛇</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td>白虎猖狂</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td class="天干 五行-木">乙</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>８</span></td>
              </tr>
            </tbody>
          </table></td>
          <td class="九宮">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-土" style="padding-left:15px;">坤<sub>土</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-土">己</font></td>
                      <td width="30%"><div class="遁">遁</div></td>
                    </tr>
                  </table></td>
                <td width="33%" ><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-土 折行">天禽</div></td>
                <td><div class="八門">時</div></td>
                <td>　</td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td class="天干 五行-土">己</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>１</span></td>
              </tr>
            </tbody>
          </table></td>
          <td class="九宮" style="border-right-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-金" style="padding-left:15px;">兌<sub>金</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-木">乙</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" class="mark"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>酉</td>
                        <td><div class="空">空</div></td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-木 折行">天衝</div></td>
                <td><div class="八門"><font class="五行-水">休</font></div></td>
                <td><div class="折行">朱雀</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td><span class="吉格">人詐</span></td>
                <td><span class="吉格">雲遁</span></td>
                <td>青龍逃走</td>
                <td>　</td>
                <td class="天干 五行-金">辛</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>３</span></td>
              </tr>
            </tbody>
          </table></td>
          <td align="center" valign="top" class="外緣 直"><span class="方位 塊 窄" style="margin-top:50px;">W西7</span><font color="#000000">酉</font></td>
        </tr>
        <tr>
          <td rowspan="2" align="center" valign="bottom" class="外緣 直"><font color="#000000">寅</font><span class="方位 塊 窄" style="margin-top:80px;">東北8</span></td>
          <td class="九宮" style="border-bottom-width:2px;border-left-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-土" style="padding-left:15px;">艮<sub>土</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-火">丙</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" ><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-土 折行">天芮</div></td>
                <td><div class="八門"><font class="五行-木">杜</font></div></td>
                <td><div class="折行">直符</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td>悖格</td>
                <td>門迫</td>
                <td>　</td>
                <td>　</td>
                <td class="天干 五行-水">壬</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>４</span></td>
              </tr>
            </tbody>
          </table></td>
          <td class="九宮" style="border-bottom-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-水" style="padding-left:15px;">坎<sub>水</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-水">癸</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" ><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-火 折行">天英</div></td>
                <td><div class="八門"><font class="五行-木">傷</font></div></td>
                <td><div class="折行">九天</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td>螣蛇妖嬌</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td class="天干 五行-火">丁</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>６</span></td>
              </tr>
            </tbody>
          </table></td>
          <td class="九宮" style="border-bottom-width:2px;border-right-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-金" style="padding-left:15px;">乾<sub>金</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-土">戊</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" class="mark"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-木 折行">天輔</div></td>
                <td><div class="八門"><font class="五行-土">生</font></div></td>
                <td><div class="折行">九地</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td>戊入墓</td>
                <td><span class="吉格">天詐</span></td>
                <td>　</td>
                <td>　</td>
                <td class="天干 五行-金">庚</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>２</span></td>
              </tr>
            </tbody>
          </table></td>
          <td rowspan="2" align="center" valign="bottom" class="外緣 直"><font color="#000000">戌</font><span class="方位 塊 窄" style="margin-top:80px;">西北6</span></td>
        </tr>
        <tr>
          <td align="center" class="外緣 平"><span class="方位 置左">NE</span><font color="#000000" style="margin-left: -30px">丑</font></td>
          <td align="center" class="外緣 平"><span class="方位">N北1</span><font color="#000000">子</font></td>
          <td align="center" class="外緣 平"><span class="方位 置右">NW</span><font color="#000000" style="margin-left: 30px">亥</font></td>
        </tr>
      </table>
    </td>
          <td valign="top" align="center"><span class="平">大畜</span></td>
        </tr>
        <tr><!--middle center-->
          <td height="120">
            <table border="0" cellpadding="3" cellspacing="0" align="center">
              <tr>
                <td align="center" valign="middle"><span class="直">庚寅</span></td>
              </tr>
              <tr>
                <td class="卦64 革" valign="middle" align="center"></td>
              </tr>
              <tr>
                <td align="center" valign="middle"><span class="平">革</span></td>
              </tr>
            </table>
          </td>
          <td>
            <table border="0" cellpadding="3" cellspacing="0" align="center">
              <tr>
                <td align="center" valign="middle"><span class="直">丙申</span></td>
              </tr>
              <tr>
                <td class="卦64 解" valign="middle" align="center"></td>
              </tr>
              <tr>
                <td align="center" valign="middle"><span class="平">解</span></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><!--middle bottom-->
          <td valign="bottom" align="center" height="300"><span class="直">己未</span></td>
          <td valign="bottom" align="center"><span class="直">癸酉</span></td>
        </tr>
        <tr><!--bottom-->
          <td class="卦64 升" valign="middle" align="center"></td>
          <td align="left" valign="middle"><span class="平">升</span></td>
          <td align="center">
            <table border="0" cellpadding="3" cellspacing="0" align="center">
              <tr>
                <td valign="middle"><span class="直">乙丑</span></td>
                <td class="卦64 噬嗑" valign="middle" align="center"></td>
                <td valign="middle"><span class="平">噬嗑</span></td>
              </tr>
            </table>
          </td>
          <td align="right" valign="middle"><span class="平">漸</span></td>
          <td class="卦64 漸" valign="middle" align="center"></td>
        </tr>
      </table>
    </td>
  </tr>
</table></html></div>`;
const body2 = `
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><div style="width:auto;"><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Language" content="zh-tw">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style type="text/css">
<!--
@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css);
@import url(https://fonts.googleapis.com/earlyaccess/notosanssc.css);
body {font-family: "Noto Sans TC", "Noto Sans SC", "Microsoft JhengHei", "Microsoft YaHei", SimHei, Sans-Serif, Arial;color:#000;}
body {-webkit-print-color-adjust: exact;}
.tdW {background-color: #FFFFFF}
.tdB {background-color: #000000}
.td1 {background-color: #75794C; color: #FFFFFF;}
.td1C {background-color: #898953; color: #FFFFFF;}
.td2 {background-color: #B9B87D}
.td3 {background-color: #D1D175}
.td4 {background-color: #B2B281}
.td5 {background-color: #DBD7BC}

.logo{margin: 0 15px 8px 15px;}
.抬頭館號{font-size: 1.3em;font-weight:700;}
.抬頭館號E {font-size: 1.0em; line-height: 1.5em; font-weight:700; font-family: "Arial"}
.抬頭館號E span {font-size: 0.4em;}
.抬頭館號E2{line-height: 0.3em;font-size: 0.7em;font-weight:100;}
.四柱{font-size:3.5em;line-height:61px;font-weight: 700;color: #827B45;}
.五行 {font-size:0.7em;}
.五行-木{color:#079436;}
.五行-火{color:#E20A0D;}
.五行-土{color:#B07F46;}
.五行-金{color:#FAAE47;}
.五行-水{color:#2D9CDD;}
.盤體{background: linear-gradient(to bottom, rgba(255, 255, 255,0.7) 15%, rgba(255,255,255,0.7) 15%), url('https://www.ncc.com.tw/image/fengshui/wbg.png') no-repeat center center;background-size:cover}
.外緣{font-size:1.6em;color:#000;font-weight: 400;background:#827B45;letter-spacing:0px;line-height:1.1em;padding:1px;}
.平{height:35px;}
.直{width:35px;}
td span.直{width:15px;display:block;line-height:18px;}
td span.平{width:35px;display:block;word-break:keep-all;margin-bottom:-14px;}
.方位{color:#FFF;text-align:center;}
.窄{width: 35px;}
.塊{display:block;}
.置左{float:left;}
.置右{float:right;}
.九宮{border: 1px solid #000;width:230px;height:219px;overflow:hidden;}
.九宮>table{font-size:1.85em;font-weight:700;}
.九宮>table>tr>td {width:88px;height:88px;}
.九宮 font>sub{font-size:0.5em;font-weight:400;margin-bottom:3px;}
.折行{width:1.6em;line-height:1em}
.干支{font-size:0.5em;width:0.5em;display:inline-block;line-height:1em;}
.八門{font-size:1.7em;font-weight:900;border: 5px solid Gray;color:Gray;}
td.mark{background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAADFBMVEUAAAAAAAAAAAAAAAA16TeWAAAABHRSTlMAJidNXfvTgAAAAEhJREFUeNqNykEBADAIACF0/Tsvgscb807sfUISkpCEJCQhCUlIQhKSkIQkJCEJSUhCEpKQhCQkIQlJSEISkpCEJCQhCUlIQvqOpgc/ctoBmwAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:top right;}
.九宮-2 td{font-size:2em;font-weight:700;}
.九宮-3 td{height:67px; width:26px; overflow: hidden;text-align:center;font-size:1.2em;vertical-align:middle;}
.空 {border-radius:25px;padding:0px 3px;border:2px solid Gray;display: table;font-size:1em;font-weight:300;margin-bottom:3px;}
.遁 {padding:1px 5px;display:inline-block;font-size:0.5em;font-weight:300;background:#000;color:#FFF;border-radius:20px;margin:5px;}
.格局 td {width:10%;height:67px;font-size:0.5em;line-height:1em;vertical-align:middle;font-weight:400;}
.格局 td.天干{width:1em;font-size:1.0em;vertical-align:middle;font-weight:700;}
.格局 td.九數{font-size:1.5em;text-align:center;vertical-align:middle;font-weight:600;}
.格局 td.九數 span{margin-right: 7px;}
.卦64{width:45px;height:51px;background-repeat:no-repeat;background-position:left top;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtQAAADMCAMAAABk6cQdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDgtMTRUMDk6NDk6MzIrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA4LTE0VDEwOjU5OjU2KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA4LTE0VDEwOjU5OjU2KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRkZFMTMzQzlGNkUxMUU4QjAxM0RGMzlFMzUzRkQxRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRkZFMTMzRDlGNkUxMUU4QjAxM0RGMzlFMzUzRkQxRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFGRkUxMzNBOUY2RTExRThCMDEzREYzOUUzNTNGRDFFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFGRkUxMzNCOUY2RTExRThCMDEzREYzOUUzNTNGRDFFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+X5admwAAAAZQTFRFLS0t////deIVYwAAAAJ0Uk5T/wDltzBKAAAD7klEQVR42uzdMXLjMBBFQeL+l3biQIGtEgVy8AfsF25pWTK3g+EsLB1D2qzDLRDUUgPUx2f9/oW//vC/P//vxR+9+rv3ceOlL3/xqbdx45u+5o3k3GmooYYaaqihhhpqqKGGeh61ZKUnQS3tuqfuORbWj8lPvXktHxShhhpqqKGGGmqooYZ6U9SSlZ4EtbTrnnoUTFhjj7FwOPvx/ZWhhhpqqKGGGmqooYYa6nnUkpWeBLVkT500cda/6WVPDaHHW87eaaihhhpqqKGGGmqooYZ6HrVkpSdBLdlTXzaOdT2+MJb8ImHKY8O+D4pQQw011FBDDTXUUEPdBrVkpSdBLe26p+556ZCBM2amDnkgSXlQhBpqqKGGGmqooYYa6k1RS1Z6EtQS1BLUEtTaG3X90UJHTx09nb3ymxdDDTXUUEMNNdRQQw011P6bXLLSE9RS9z11wRg0Oo2FaQPn6s9BDnnGOPegCDXUUEMNNdRQQw011FDbU8tKT4JasqfOGgvN1K2Ot5x9MdRQQw011FBDDTXUUEM9j1qy0pOgltbuqVuOhaPgXWcO4GbqTx4UoYYaaqihhhpqqKGGGmp7alnpSVBL9tSNj5WYqSMfSFIeFKGGGmqooYYaaqihhnpT1JKVngS1tHZPvdUZg5Zf47LsJ9z3i4yghhpqqKGGGmqooYYaap9PLSs9CWoJaglqCWrpBbWVXt7pybHJRyQseTHUUEMNNdRQQw011FBD7b/JJSs9QS3ZUx/P/da0lJ8w7lRr5bldqKGGGmqooYYaaqihhnoetWSlJ0EtNdpTpxxfODeutx7Ah5n65gNNUEMNNdRQQw011FBDDbVkpSdBLe27p44ZC9PGZDfv0itDDTXUUEMNtX8XqKGG2s2bRy1Z6UlQS2v31AUzU6uJs36WfepMfdWLoYYaaqihhhpqqKGGGmp7aslKT1BL9tTHc3/NrvdPmPs1LmPyF2+hhhpqqKGGGmqooYYaap/7ISs9CWoJaglqCWrpBfXzVnqn3kf9m66+eRWXrrzTUEMNNdRQQw011FBDDfU8aslKT4JaWrunLpiZ6ias6NOTKUdPU87tXnVlqKGGGmqooYYaaqihhnoetWSlJ0EtNdpTxx3QyP2A2QZPDSN2TB6x36MINdRQQw011FBDDTXUm6KWrPQkqKVd99QLBt+u35o2cr+vL+TmvXkbUEMNNdRQQw011FBDDfU8aslKT4JaWrunvm9mihkLC45RLH5qSLn0kpsHNdRQQw011FBDDTXUUM+jlqz0JKiltXvq+lMUG/2OYv0MWX7pkFM2b64MNdRQQw011FBDDTXUUM+jlqz0JKilwn4EGAC8xz037ukXwgAAAABJRU5ErkJggg==');}
.天{background-position: 3px 0px;}.地{background-position: -42px 0px;}.屯{background-position: -87px 0px;}.蒙{background-position: -133px 0px;}.需{background-position: -178px 0px;}.訟{background-position: -224px 0px;}.師{background-position: -269px 0px;}.比{background-position: -314px 0px;}.小畜{background-position: -359px 0px;}.履{background-position: -404px 0px;}.泰{background-position: -450px 0px;}.否{background-position: -495px 0px;}.同人{background-position: -541px 0px;}.大有{background-position: -586px 0px;}.謙{background-position: -631px 0px;}.豫{background-position: -676px 0px;}.隨{background-position: 3px -51px;}.蠱{background-position: -42px -51px;}.臨{background-position: -87px -51px;}.觀{background-position: -133px -51px;}.噬嗑{background-position: -178px -51px;}.賁{background-position: -224px -51px;}.剝{background-position: -269px -51px;}.復{background-position: -314px -51px;}.旡妄{background-position: -359px -51px;}.大畜{background-position: -404px -51px;}.頤{background-position: -450px -51px;}.大過{background-position: -495px -51px;}.水{background-position: -541px -51px;}.火{background-position: -586px -51px;}.咸{background-position: -631px -51px;}.恆{background-position: -676px -51px;}
.遯{background-position: 3px -102px;}.大壯{background-position: -42px -102px;}.晉{background-position: -87px -102px;}.明夷{background-position: -133px -102px;}.家人{background-position: -178px -102px;}.睽{background-position: -224px -102px;}.蹇{background-position: -269px -102px;}.解{background-position: -314px -102px;}.損{background-position: -359px -102px;}.益{background-position: -404px -102px;}.夬{background-position: -450px -102px;}.姤{background-position: -495px -102px;}.萃{background-position: -541px -102px;}.升{background-position: -586px -102px;}.困{background-position: -631px -102px;}.井{background-position: -676px -102px;}
.革{background-position: 3px -153px;}.鼎{background-position: -42px -153px;}.雷{background-position: -87px -153px;}.山{background-position: -133px -153px;}.漸{background-position: -178px -153px;}.歸妹{background-position: -224px -153px;}.豐{background-position: -269px -153px;}.旅{background-position: -314px -153px;}.風{background-position: -359px -153px;}.澤{background-position: -404px -153px;}.渙{background-position: -450px -153px;}.節{background-position: -495px -153px;}.中孚{background-position: -541px -153px;}.小過{background-position: -586px -153px;}.既濟{background-position: -631px -153px;}.未濟{background-position: -676px -153px;}
small.天干{position:relative;top:-11px;left:3px;border-radius:20px;border: 1px solid black;padding: 0px 2px 2px 2px;color:black;font-size:0.8em;width:17px;display:grid;text-align:center}
.粗 {font-weight: 500;}
.吉格 {color: red;}
.黑細 {color: black;}
.黑粗 {color: black; font-weight: bold;}
.紅細 {color: red;}
.紅粗 {color: red; font-weight: bold;}
.藍細 {color: blue;}
.藍粗 {color: blue; font-weight: bold;}
.深藍細 {color: navy;}
.深藍粗 {color: navy; font-weight: bold;}
.綠細 {color: green;}
.綠粗 {color: green; font-weight: bold;}
.紫細 {color: purple;}
.紫粗 {color: purple; font-weight: bold;}
.咖細 {color: #800000;}
.咖粗 {color: #800000; font-weight: bold;}
.橘細 {color: #FF8040;}
.橘粗 {color: #FF8040; font-weight: bold;}
.桃細 {color: #FF64FF;}
.桃粗 {color: #FF64FF; font-weight: bold;}
.肝細 {color: #C80000;}
.肝粗 {color: #C80000; font-weight: bold;}
.土細 {color: #808000;}
.土粗 {color: #808000; font-weight: bold;}
.白{color: #FFF;}
@media print {
.hidden {display: none;}
}
//-->
</style>
<style type="text/css">
<!--
.格局 td.九數{padding-right:0.1rem}
//-->
</style>
<table width="870" cellpadding="2" cellspacing="1" align="center" class="">
  <tr class="td1">
    <td valign="top"><table width="100%" cellpadding="8" cellspacing="2" border="0">
        <tr class="td1">
          <td></td>
          <td width="1%" valign="middle" nowrap>
            <img src="https://www.ncc.com.tw/image/fengshui/logo.png" width="350" class="logo">
          </td>
        </tr>
      </table></td>
  </tr>
</table>
<table width="870" cellpadding="2" cellspacing="1" align="center" class="" style="margin-top:5px;">
  <tr class="tdW" width="55%">
    <td valign="top">

      <table width="100%" cellpadding="0" cellspacing="1" class="tdB">
        <tr>
          <th width="25%" class="td1">時 Hour</th>
          <th width="25%" class="td1">日 Day</th>
          <th width="25%" class="td1">月 Month</th>
          <th width="25%" class="td1">年 Year</th>
        </tr>
        <tr class="tdW">
          <td>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">丁</td>
                <td width="25%" class="五行-火 粗" valign="bottom">火</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Ding, Fire</td>
              </tr>
            </table>
          </td>
          <td>
            <table width="100%" cellpadding="0" cellspacing="02">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">庚</td>
                <td width="25%" class="五行-金 粗" valign="bottom">金</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Geng, Metal</td>
              </tr>
            </table>
          </td>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">辛</td>
                <td width="25%" class="五行-金 粗" valign="bottom">金</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Xin, Metal</td>
              </tr>
            </table>
          </td>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">庚</td>
                <td width="25%" class="五行-金 粗" valign="bottom">金</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Geng, Metal</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr class="tdW">
          <td>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">亥</td>
                <td width="25%" class="五行-水 粗" valign="bottom">水</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Pig, Water</td>
              </tr>
            </table>
          </td>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">戌</td>
                <td width="25%" class="五行-土 粗" valign="bottom">土</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Dog, Earth</td>
              </tr>
            </table>
          </td>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">巳</td>
                <td width="25%" class="五行-火 粗" valign="bottom">火</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Snake, Fire</td>
              </tr>
            </table>
          </td>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" class="四柱" align="center">子</td>
                <td width="25%" class="五行-水 粗" valign="bottom">水</td>
              </tr>
              <tr>
                <td align="center" colspan="3" class="五行">Rat, Water</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
    <td width="45%" valign="top">

      <table width="100%" cellpadding="2" cellspacing="1" class="tdB" style="line-height: 2.1em">
        <tr>
          <th width="12%" class="td2 白">陽曆</th>
          <td width="61%" class="tdW">07/05/2020</td>
          <th width="12%" class="td2 白">值使</th>
          <td width="15%" class="tdW">正南</td>
        </tr>
        <tr>
          <th class="td2 白">時間</th>
          <td class="tdW">9:59pm</td>
          <th class="td2 白">值符</th>
          <td class="tdW">天心</td>
        </tr>
        <tr>
          <th class="td2 白">農曆</th>
          <td class="tdW" nowrap>二○二○年四月十五日亥時</td>
          <th class="td2 白">符首</th>
          <td class="tdW">甲申</td>
        </tr>
        <tr>
          <th class="td2 白">局數</th>
          <td class="tdW">陽四局</td>
          <th class="td2 白">節氣</th>
          <td class="tdW">立夏</td>
        </tr>
        <tr>
          <th class="td2 白">格局</th>
          <td colspan="3" class="tdW">無</td>
        </tr>
      </table>
    </td>
  </tr>
</table>
<table width="870" cellpadding="2" cellspacing="1" align="center">
  <tr>
    <td valign="top">
      <table border="0" cellspacing="0" cellpadding="0" align="center" width="100%" height="100%" class="td5">
        <tr><!--top-->
          <td class="卦64 歸妹" valign="middle" align="center"></td>
          <td align="left" valign="middle"><span class="直">癸卯</span></td>
          <td align="center">
            <table border="0" cellpadding="3" cellspacing="0" align="center">
              <tr>
                <td><span class="直">丁巳</span></td>
                <td class="卦64 小畜" valign="middle" align="center"></td>
                <td valign="middle"><span class="平">小畜</span></td>
              </tr>
            </table>
          </td>
          <td align="right" valign="middle"><span class="直">甲申</span></td>
          <td class="卦64 未濟" valign="middle" align="center"></td>
        </tr>
        <tr><!--middle top-->
          <td valign="top" align="center" valign="middle" height="300"><span class="平">歸妹</span></td>
          <td colspan="3" rowspan="3" valign="top" align="center" class="tdW">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" class="盤體">
        <tr>
          <td width="10" rowspan="2" align="center" valign="top" class="外緣 直"><span class="方位 塊 窄" style="margin-bottom:80px;">東南4</span><font color="#000000">辰</font></td>
          <td align="center" class="外緣 平"><span class="方位 置左">SE</span><font color="#000000" style="margin-left: -30px">巳</font></td>
          <td align="center" class="外緣 平"><span class="方位">S南9</span><font color="#000000">午</font></td>
          <td align="center" class="外緣 平"><font color="#000000" style="margin-left: 30px">未</font><span class="方位 置右">SW</span></td>
          <td rowspan="2" align="center" valign="top" class="外緣 直"><span class="方位 塊 窄" style="margin-bottom:80px;">西南2</span><font color="#000000">申</font></td>
        </tr>
        <tr>
          <td class="九宮" style="border-top-width:2px;border-left-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-木" style="padding-left:15px;">巽<sub>木</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-木">乙</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" ><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>　</td>
                        <td><div class="空">馬</div></td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-木 折行">天衝</div></td>
                <td><div class="八門"><font class="五行-金">驚</font></div></td>
                <td><div class="折行">六合</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td><span class="吉格">地詐</span></td>
                <td><span class="吉格">乙奇旺相</span></td>
                <td>門迫</td>
                <td>　</td>
                <td class="天干 五行-土">戊</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>５</span></td>
              </tr>
            </tbody>
          </table></td>
          <td class="九宮" style="border-top-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-火" style="padding-left:15px;">離<sub>火</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-土">戊</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" class="mark"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>午</td>
                        <td><div class="空">空</div></td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-木 折行">天輔</div></td>
                <td><div class="八門"><font class="五行-金">開</font></div></td>
                <td><div class="折行">勾陳</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td>宮迫</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td class="天干 五行-水">癸</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>１</span></td>
              </tr>
            </tbody>
          </table></td>
          <td class="九宮" style="border-top-width:2px;border-right-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-土" style="padding-left:15px;">坤<sub>土</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-水">癸</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" class="mark"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>未</td>
                        <td><div class="空">空</div></td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-火 折行">天英</div></td>
                <td><div class="八門"><font class="五行-水">休</font></div></td>
                <td><div class="折行">朱雀</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td>癸入墓</td>
                <td><span class="吉格">人詐</span></td>
                <td>宮迫</td>
                <td>　</td>
                <td class="天干 五行-火">丙</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>３</span></td>
              </tr>
            </tbody>
          </table></td>
        </tr>
        <tr>
          <td align="center" valign="top" class="外緣 直"><span class="方位 塊 窄" style="margin-top:50px;">E東3</span><font color="#000000">卯</font></td>
          <td class="九宮" style="border-left-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-木" style="padding-left:15px;">震<sub>木</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-水">壬</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" ><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-土 折行">天任</div></td>
                <td><div class="八門"><font class="五行-土">死</font></div></td>
                <td><div class="折行">太陰</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td><span class="吉格">地詐</span></td>
                <td>宮迫</td>
                <td>　</td>
                <td>　</td>
                <td class="天干 五行-木">乙</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>４</span></td>
              </tr>
            </tbody>
          </table></td>
          <td class="九宮">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-土" style="padding-left:15px;">坤<sub>土</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-土">己</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" ><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-土 折行">天禽</div></td>
                <td><div class="八門">時</div></td>
                <td>　</td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td class="天干 五行-土">己</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>６</span></td>
              </tr>
            </tbody>
          </table></td>
          <td class="九宮" style="border-right-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-金" style="padding-left:15px;">兌<sub>金</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-火">丙</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" class="mark"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-土 折行">天芮</div></td>
                <td><div class="八門"><font class="五行-土">生</font></div></td>
                <td><div class="折行">九地</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td><span class="吉格">重詐</span></td>
                <td>悖格</td>
                <td>　</td>
                <td>　</td>
                <td class="天干 五行-金">辛</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>８</span></td>
              </tr>
            </tbody>
          </table></td>
          <td align="center" valign="top" class="外緣 直"><span class="方位 塊 窄" style="margin-top:50px;">W西7</span><font color="#000000">酉</font></td>
        </tr>
        <tr>
          <td rowspan="2" align="center" valign="bottom" class="外緣 直"><font color="#000000">寅</font><span class="方位 塊 窄" style="margin-top:80px;">東北8</span></td>
          <td class="九宮" style="border-bottom-width:2px;border-left-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-土" style="padding-left:15px;">艮<sub>土</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-火">丁</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" ><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-水 折行">天蓬</div></td>
                <td><div class="八門"><font class="五行-火">景</font></div></td>
                <td><div class="折行">螣蛇</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td>丁奇墓</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td class="天干 五行-水">壬</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>９</span></td>
              </tr>
            </tbody>
          </table></td>
          <td class="九宮" style="border-bottom-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-水" style="padding-left:15px;">坎<sub>水</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-金">庚</font></td>
                      <td width="30%"><div class="遁">遁</div></td>
                    </tr>
                  </table></td>
                <td width="33%" ><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-金 折行">天心</div></td>
                <td><div class="八門"><font class="五行-木">杜</font></div></td>
                <td><div class="折行">直符</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td><span class="吉格">相佐</span></td>
                <td>時格</td>
                <td>　</td>
                <td>　</td>
                <td class="天干 五行-火">丁</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>２</span></td>
              </tr>
            </tbody>
          </table></td>
          <td class="九宮" style="border-bottom-width:2px;border-right-width:2px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr align="center" valign="middle">
                <td width="33%"><font class="五行-金" style="padding-left:15px;">乾<sub>金</sub></font></td>
                <td width="34%">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-2">
                    <tr>
                      <td width="30%">　</td>
                      <td width="40%"><font class="五行-金">辛</font></td>
                      <td width="30%">　</td>
                    </tr>
                  </table></td>
                <td width="33%" class="mark"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="九宮-3">
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                    </table></td>
              </tr>
              <tr align="center" valign="middle">
                <td><div class="五行-金 折行">天柱</div></td>
                <td><div class="八門"><font class="五行-木">傷</font></div></td>
                <td><div class="折行">九天</div></td>
              </tr>
            </tbody>
          </table>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="格局">
            <tbody>
              <tr align="center" valign="middle">
                <td>宮迫</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td class="天干 五行-金">庚</td>
                <td>　</td>
                <td>　</td>
                <td class="九數"><span>７</span></td>
              </tr>
            </tbody>
          </table></td>
          <td rowspan="2" align="center" valign="bottom" class="外緣 直"><font color="#000000">戌</font><span class="方位 塊 窄" style="margin-top:80px;">西北6</span></td>
        </tr>
        <tr>
          <td align="center" class="外緣 平"><span class="方位 置左">NE</span><font color="#000000" style="margin-left: -30px">丑</font></td>
          <td align="center" class="外緣 平"><span class="方位">N北1</span><font color="#000000">子</font></td>
          <td align="center" class="外緣 平"><span class="方位 置右">NW</span><font color="#000000" style="margin-left: 30px">亥</font></td>
        </tr>
      </table>
    </td>
          <td valign="top" align="center"><span class="平">未濟</span></td>
        </tr>
        <tr><!--middle center-->
          <td height="120">
            <table border="0" cellpadding="3" cellspacing="0" align="center">
              <tr>
                <td align="center" valign="middle"><span class="直">癸亥</span></td>
              </tr>
              <tr>
                <td class="卦64 剝" valign="middle" align="center"></td>
              </tr>
              <tr>
                <td align="center" valign="middle"><span class="平">剝</span></td>
              </tr>
            </table>
          </td>
          <td>
            <table border="0" cellpadding="3" cellspacing="0" align="center">
              <tr>
                <td align="center" valign="middle"><span class="直">戊戌</span></td>
              </tr>
              <tr>
                <td class="卦64 謙" valign="middle" align="center"></td>
              </tr>
              <tr>
                <td align="center" valign="middle"><span class="平">謙</span></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><!--middle bottom-->
          <td valign="bottom" align="center" height="300"><span class="直">甲寅</span></td>
          <td valign="bottom" align="center"><span class="直">丁丑</span></td>
        </tr>
        <tr><!--bottom-->
          <td class="卦64 既濟" valign="middle" align="center"></td>
          <td align="left" valign="middle"><span class="平">既濟</span></td>
          <td align="center">
            <table border="0" cellpadding="3" cellspacing="0" align="center">
              <tr>
                <td valign="middle"><span class="直">甲午</span></td>
                <td class="卦64 姤" valign="middle" align="center"></td>
                <td valign="middle"><span class="平">姤</span></td>
              </tr>
            </table>
          </td>
          <td align="right" valign="middle"><span class="平">隨</span></td>
          <td class="卦64 隨" valign="middle" align="center"></td>
        </tr>
      </table>
    </td>
  </tr>
</table></html></div>`;

// console.time('parse');
// const x = parse('day', new Date(), body2);
// console.timeEnd('parse');

// console.log(x);

/**
 * @TODO Runner example - write a unit test
 *
 */
(async () => {
  console.time('app');

  const everything = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => () =>
    new Promise<number>((r, rr) => setTimeout(() => (i % 2 == 0 ? r(i) : rr('error')), i * 500)).catch((err) =>
      Promise.reject({
        message: err,
        originalValue: i,
      })
    )
  );

  for (
    let runner = createRunner(everything, 5), result = await runner.next();
    !(result.done ?? true);
    result = await runner.next()
  ) {
    console.log('done', result.done);
    result.value.map((val) => console.log(val));
    // await new Promise((r) => setTimeout(r, 10000));
  }

  console.timeEnd('app');
})();

/**
 * Another example
 */

// for (let gen = hehe(['a', 'b', 'c', 'd']), result = gen.next(); !result.done; result = gen.next()) {
//   console.log(result.value, result.done);
// }

// function* hehe(arr: string[]) {
//   for (let a of arr) {
//     yield a;
//   }
// }
