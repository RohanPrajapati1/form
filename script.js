const btn = document.getElementById("btn");
const fname = document.getElementById('Sname');
const lastname = document.getElementById('Slastname');
const sgender = document.getElementById('Sgender');
const scatagory = document.getElementById('Scatagory');
const main_container = document.getElementById('container');
const sec_container = document.getElementById('sec-container')
const back_btn = document.getElementById('back');
const reset_btn = document.getElementById('reset')


btn.addEventListener('click' , ()=> {
    let Fname = document.getElementById("name").value;
    fname.innerHTML = Fname;
    // console.log(Fname);
    let Lname = document.getElementById("last_name").value;
    lastname.innerHTML = Lname;
    // console.log(Lname);
    let genders = document.getElementsByName("gender");
    let gender;
    for(i = 0; i < genders.length; i++){
        if(genders[i].checked){
           gender = genders[i].value;
        }
    }
    sgender.innerHTML = gender;
    // console.log(gender);
    let catagories = document.getElementById('catagory');
    let catagory;
    for(i = 0; i < catagories.length; i++){
        if(catagories[i].selected){
            catagory = catagories[i].value;
        }
    } 
    scatagory.innerHTML = catagory;
    // console.log(catagory);  
    if(Fname !== "" && Lname !== "" && gender.checked !== false){
        changeClass();
    }
        
});



function changeClass() {
    main_container.classList.toggle('container')
    main_container.classList.toggle('hide');
    sec_container.classList.toggle('hide');
    sec_container.classList.toggle('sec-container');
}


back_btn.addEventListener('click' , ()=> {
    main_container.classList.toggle('container')
    main_container.classList.toggle('hide');
    sec_container.classList.toggle('hide');
    sec_container.classList.toggle('sec-container');


    // document.getElementById("name").value = "";
    // document.getElementById("last_name").value = "";
    // let genders = document.getElementsByName("gender");
    // for(i = 0; i < genders.length; i++){
    //     if(genders[i].checked){
    //        genders[i].checked = false;
    //     }
    // }
    // let catagories = document.getElementById('catagory');
    // for(i = 0; i < catagories.length; i++){
    //     if(catagories[i].selected){
    //         catagories[i].selected = false;
    //     }
    // } 


});



reset_btn.addEventListener('click' , () => {
    document.getElementById("name").value = "";
    document.getElementById("last_name").value = "";
    let genders = document.getElementsByName("gender");
    for(i = 0; i < genders.length; i++){
        if(genders[i].checked){
           genders[i].checked = false;
        }
    }
    let catagories = document.getElementById('catagory');
    for(i = 0; i < catagories.length; i++){
        if(catagories[i].selected){
            catagories[i].selected = false;
        }
    } 
});