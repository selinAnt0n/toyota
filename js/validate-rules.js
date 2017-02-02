$(document).ready(function(){

    $("#form").validate({
        
       rules:{ 
        
            name:{
                required: true,
                minlength: 4,
                maxlength: 16,
            },
            date:{
                required: true,
            },
            minutes:{
                required: true,
                min: 0,
                max: 60,
            },
            hour:{
                required: true,
                min: 0,
                max: 23,
            },
       },
       
       messages:{
        
            name:{
                required: "Это поле обязательно для заполнения",
                minlength: "Длина имени должна быть минимум 4 символа",
                maxlength: "Максимальное число символо имени - 16",
            },
            minutes:{
                min: "В минутах минимум 0",
                max: "В минутах максимум 60",
            },
            hour:{
                min: "В часах минимум 0",
                max: "В часах максимум 23",
            },
        
       }
        
    });


}); //end of ready