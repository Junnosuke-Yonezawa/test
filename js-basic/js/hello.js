const func = () => {
    console.log(dt.getFullYear());
    console.log(dt.getMonth()+1);
    console.log(dt.getDate());
    dt.setDate(dt.getDate() - 1);
}

var dt = new Date();
dt.setFullYear(2021);

//月
//1月が0、12月が11。
dt.setMonth(7);

//日
//dt.setDate(29);
dt.setDate(27);

document.body.style.backgroundColor = "#ccffcc";
//曜日
//日曜が0、土曜日が6。
//dt.getDay(1)
//時
//dt.getHours(21);
//分
//dt.getMinutes(30);
//秒
//dt.getSeconds(15);

console.log(dt);