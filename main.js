p1 = [];
function p1_get_output() {    
    for (i = 1; i <= 4; i++) {
      l1=document.getElementById("s"+i).value
      p1.push(l1);
    }
  
    document.getElementById("p1_output").innerHTML = p1.join(". ");
    document.getElementById("p1_title").innerHTML = "paragraph";
  }