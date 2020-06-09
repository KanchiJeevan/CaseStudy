function list(){
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){
    
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            console.log(response);
            var Jtodolist = response.todolist;
            console.log(Jtodolist); 
            var output ="";
            
            for(var i=0;i<Jtodolist.length;i++){
                output += "<tr>";
                output += "<td>"+ Jtodolist[i].userId +"</td>";
                output += "<td>"+ Jtodolist[i].id +"</td>";
                output += "<td>"+ Jtodolist[i].title +"</td>";
                output += "<td>"+ '<input type="checkbox" class="checkbox" value="' + Jtodolist[i].id + '"' + (Jtodolist[i].completed ? 'checked' : '') + '>' + "</td";
                output += "</tr>";
            }
        }
        document.getElementById("todo_list").innerHTML=output;
    }
    xhttp.open("GET","list.json",true);
    xhttp.send();
    }


// var completedTasks = 0;
// let promise = Promise(function(resolve,reject){
//     if(completedTasks ==5){
//         resolve("Congrats. 5 Tasks have been Successfully Completed ");
//     }
//     else{
//         reject();
//     }
// });

// .then((e) => alert(e)).catch((e) => console.log(e));
// });


// var completedTasks = $('input[type="checkbox"]:checked').length;
// if(length==5){
//     completedTasks++;
//     alert("Congrats. 5 Tasks have been Successfully Completed ")
// }


