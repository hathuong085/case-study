var login = login || { };
login.check = function(){
    let tendn = $('#tendn').val();
    let mk = $('#matkhau').val();
    let isLogged = false;
    $.ajax({
        url:"https://databasedth.herokuapp.com/tuvanvien",
        method: "GET",
        dataType: "json",
        success: function(data){
            $.each(data, function(i, v){
                if(v.tendangnhap == tendn && v.matkhau == mk){
                    isLogged = true;
                    var quantri={};
                    quantri.ten=v.ten;
                    quantri.avatar=v.avatar;
                    quantri.id="1";
                    $.ajax({
                        "url": "https://databasedth.herokuapp.com/quantri/1",
                        method: "PUT",
                        dataType: "json",
                        contentType: "application/json",
                        data: JSON.stringify(quantri),
                        success: function (data) {
                        window.location.href = "admin.html";
                        }
                    })
                }
            })
            if(!isLogged){
                $('#danhnhapsai').removeClass('d-none');
            }
        }
    });
}

$(document).ready(function(){

});