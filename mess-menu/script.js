const day = document.getElementById('day');
const date = document.getElementById('date');
const bfast = document.getElementById('bfast');
const lunch = document.getElementById('lunch');
const snack = document.getElementById('snack');
const dinner = document.getElementById('dinner');
const table = document.getElementById('table-menu');
let sundays = 1;


{
const day1 = document.getElementById('day1');
const date1 = document.getElementById('date1');
const bfast1 = document.getElementById('bfast1');
const lunch1 = document.getElementById('lunch1');
const snack1 = document.getElementById('snack1');
const dinner1 = document.getElementById('dinner1');
}
async function readData(){
    try{
        const response = await fetch("./mess_menu.json");
        const data = await response.json();
        console.log(data);
        showData(data);
        console.log(sundays);
    }
    catch(err){
        console.log("Caught some error : \n" + err);
    }
}
function showData(data){
    const now = new Date();
    const tday = now.toDateString().trim().slice(0,4);
    const tdate = now.toDateString().slice(4);
    console.log(tday+ " => " + tdate);

    date.textContent = tdate;
    for(let key in data){
        console.log(key.slice(0,3).trim().toLowerCase());
        
        if(tday.trim().toLowerCase() == "sun".trim() && tday.trim().toLowerCase() == key.slice(0,3).trim().toLowerCase()){
            const overflows = document.getElementById('menu-container');
            overflows.style.overflowY = "scroll";
            const bfst_time = document.getElementById('time-pill-bfast');
            bfst_time.textContent = "8:00 AM - 9:00 AM";
            const row2 = document.getElementById('row2');
            row2.style.visibility = "visible";
            console.log(key.trim().toLowerCase());
            if(key.trim().toLowerCase() == "sunday_odd".trim()){
                day1.textContent = "Sunday";
                date1.textContent = tdate;
                bfast1.textContent = data[key.trim()]["Breakfast".trim()];
                lunch1.textContent = data[key.trim()]["Lunch".trim()];
                snack1.textContent = data[key.trim()]["Snack".trim()];
                dinner1.textContent = data[key.trim()]["Dinner".trim()];
            }
            if(key.trim().toLowerCase() == "sunday_even".trim()){
                day.textContent = "Sunday";
                bfast.textContent = data[key.trim()]["Breakfast".trim()];
                lunch.textContent = data[key.trim()]["Lunch".trim()];
                snack.textContent = data[key.trim()]["Snack".trim()];
                dinner.textContent = data[key.trim()]["Dinner".trim()];
            }
        }
        else if(tday.trim().toLowerCase() != "sun".trim() && tday.trim().toLowerCase() == key.slice(0,3).trim().toLowerCase()){
            day.textContent = tday;
            console.log(key);
            bfast.textContent = data[key.trim()]["Breakfast".trim()];
            lunch.textContent = data[key.trim()]["Lunch".trim()];
            snack.textContent = data[key.trim()]["Snack".trim()];
            dinner.textContent = data[key.trim()]["Dinner".trim()];
        }
    }
}
readData();