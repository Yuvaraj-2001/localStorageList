function n(){
        
    arr = JSON.parse(localStorage.getItem('value'));
     if(arr == null){
         arr = []
     }else{
         arr = JSON.parse(localStorage.getItem('value'));
     }
     var name = document.getElementById('name').value;
     var age = document.getElementById('age').value;
     var phone = document.getElementById('phone').value;
     var email = document.getElementById('email').value;

     
     add = {a: name, b: age, c: phone, d: email};
     arr.push(add);
     console.log(arr);
     document.getElementById('name').value = "";
     document.getElementById('age').value = "";
     document.getElementById('phone').value = "";
     document.getElementById('email').value = "";
     localStorage.setItem('value', JSON.stringify(arr));
     
}

function view(){
 location.href = "view.html";

}



function submit(){

 JSON.parse(localStorage.getItem('value'));
 location.href = "result.html";

}