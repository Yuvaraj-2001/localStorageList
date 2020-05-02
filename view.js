function view(){
    
    arr = JSON.parse(localStorage.getItem('value'));
    // console.log(item);
    
    var  txt = "";
    var capture = document.getElementById('viewer');
    
    // console.log(arr.length);
    for(index = 0; index < arr.length; index++){
        console.log(arr[index].a);
        txt += "<tr>";
        txt += "<td>"+(index+1)+"</td>";
        txt += "<td>"+arr[index].a+"</td>";
        txt += "<td>"+arr[index].b+"</td>";
        txt += "<td>"+arr[index].c+"</td>";
        txt += "<td>"+arr[index].d+"</td>";
        txt += "<td><button class='btn btn-dark' onclick='get("+index+");'>edit</button></td>";
        txt += "</tr>";
       
    }
    capture.innerHTML += txt; 
}
function get(vr){
    document.getElementById('edit').style.display = 'block';
    document.getElementById('see').style.display = 'none';

    var ext;
    console.log(vr);   
    console.log(arr);
    var ename = document.getElementById("ename");
    var eage = document.getElementById("eage");
    var ephone = document.getElementById("ephone");
    var eemail = document.getElementById("eemail");

    ename.value = arr[vr].a;
    eage.value = arr[vr].b;
    ephone.value = arr[vr].c;
    eemail.value = arr[vr].d;
    sr = vr;
}
view();
function set(){
    document.getElementById('edit').style.display = 'none';
    document.getElementById('see').style.display = 'block';
    var ename = document.getElementById("ename").value;
    var eage = document.getElementById("eage").value;
    var ephone = document.getElementById("ephone").value;
    var eemail = document.getElementById("eemail").value;
    
    arr[sr].a = ename;
    arr[sr].b = eage;
    arr[sr].c = ephone;
    arr[sr].d = eemail;
    document.getElementById("ename").value = "";
    document.getElementById("eage").value = "";
    document.getElementById("ephone").value = "";
    document.getElementById("eemail").value = "";
    console.log(arr);
    localStorage.setItem('value', JSON.stringify(arr));
   
}
function confirm(){
    console.log(arr);
    localStorage.setItem('value', JSON.stringify(arr));
    location.href = "index.html";
}