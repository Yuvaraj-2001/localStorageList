function refresh(){
    var  txt = "";
var capture = document.getElementById('result');
arr = JSON.parse(localStorage.getItem('value'));
// console.log(arr.length);
for(index = 0; index < arr.length; index++){
    console.log(arr[index].a);
    txt += "<tr>";
    txt += "<td>"+(index+1)+"</td>";
    txt += "<td>"+arr[index].a+"</td>";
    txt += "<td>"+arr[index].b+"</td>";
    txt += "<td>"+arr[index].c+"</td>";
    txt += "<td>"+arr[index].d+"</td>";
    txt += "</tr>";
        
}
capture.innerHTML += txt; 
}
refresh();

