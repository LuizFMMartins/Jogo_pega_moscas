//botoes

function reiniciarJogo(){
    window.location.href = "index.html" 
    
  }
  
  function iniciarJogo(){
    let nivel = document.getElementById("nivel").value

    
    if (nivel == " "){
      alert("Selecione um nivel!")
    }else{
      console.log(nivel)
      window.location.href = "jogo.html?" + nivel
      
    }
    
  }