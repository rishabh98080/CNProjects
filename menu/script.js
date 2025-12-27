const day = document.getElementById('day');
const date = document.getElementById('date');
const bfast = document.getElementById('bfast');
const lunch = document.getElementById('lunch');
const snack = document.getElementById('snack');
const dinner = document.getElementById('dinner');
const table = document.getElementById('table-menu');

async function readData(){
    try{
        const response = await fetch("./mess_menu.json");
        const data = await response.json();
        console.log(data);
        showData(data);
    }
    catch(err){
        console.log("Caught some error : \n" + err);
    }
}
function showData(data){
    const now = new Date();
    // const tday = now.toDateString().slice(0,4);
    const tday = "Sun";
    const tdate = now.toDateString().slice(4);
    console.log(tday+ " " + tdate);
    for(let key in data){
        if(key.trim().slice(0,3).toLowerCase() == tday.trim().toLowerCase()){
            day.textContent = key;
            date.textContent = tdate;
            bfast.textContent = data[key.trim()]["Breakfast".trim()];
            if(tday.trim().toLowerCase() == "sun"){
                lunch.textContent = data[key.trim()]["Lunch".trim()];
                snack.textContent = data[key.trim()]["Snack".trim()];
                dinner.textContent = data[key.trim()]["Dinner".trim()];
                const newRow = document.createElement('tr');
                newRow.setAttribute['id'] = "se_row";
                for(let i = 0 ;i < 6 ; i++){
                    const clmn = document.createElement('td');
                    day.textContent = "Sunday";
                    
                }     
            }
            else{
                lunch.textContent = data[key.trim()]["Lunch".trim()];
                snack.textContent = data[key.trim()]["Snack".trim()];
                dinner.textContent = data[key.trim()]["Dinner".trim()];
            }
        }
    }
}
readData();