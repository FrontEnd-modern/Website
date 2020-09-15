let login = prompt("Введите Логин");

if(login == ''){
    alert("Не хочешь говорить - не надо");
}
  else if(login == Nan){
    alert("Отменено");
  }
    else if(login =='Админ'){
      
      
      let password = prompt('ВВедите пароль');
       if(password == ''){
         alert("Не хочешь говорить - не надо");
}
           else if(password == Nan){
              alert("Отменено");
            } 
               else if(password == 'Я админ'){
                   alert('здравствуйте!')
               }
                else{
                  alert('неверный пароль')
                }
      
      
    }
      else {
        alert('Я вас не знаю');
      }
