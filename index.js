var duan = duan || {};

duan.showsanpham = function () {
    $('#show').empty();
    if($('#nhasx').val()=="All"){
        $.ajax({
            url: " https://databasedth.herokuapp.com/phone",
            method: "GET",
            dataType: "json",
            success: function (data) {
                $.each(data, function (i, v) {
                    $('#show').append(
                        "<div class='col-lg-4 col-md-6 mb-5 '>" +
                        "<div class='card h-100'>" +
                        "<img class='card-img-top' src='" + v.anhsp + "' alt=''>" +
                        "<div class='card-body'>" +
                        "<p class='card-text'><span id='diachi'>" + v.tensp + "</span>" +
                        "</div>" +
                        "<div class='card-footer'>" +
                        "<a href='javascript:;' class='btn btn-primary col-4 mr-5' onclick='duan.showchitiet(" + v.id + ")'>Chi tiết </a>" +
                        "<a href='#' class='btn btn-primary col-6' onclick='duan.muasp(" + v.id + ")'> " + v.gia + " vnđ </a>" +
                        "</div>" +
                        "</div>" +
                        "</div>"
                    );
                })
            }
        });
    } else if($('#nhasx').val()=="Iphone"){
        $.ajax({
            url: " https://databasedth.herokuapp.com/phone",
            method: "GET",
            dataType: "json",
            success: function (data) {
                $.each(data, function (i, v) {
                    if (v.nsx=="Iphone"){
                    $('#show').append(
                        "<div class='col-lg-4 col-md-6 mb-5 '>" +
                        "<div class='card h-100'>" +
                        "<img class='card-img-top' src='" + v.anhsp + "' alt=''>" +
                        "<div class='card-body'>" +
                        "<p class='card-text'><span id='diachi'>" + v.tensp + "</span>" +
                        "</div>" +
                        "<div class='card-footer'>" +
                        "<a href='javascript:;' class='btn btn-primary col-4 mr-5' onclick='duan.showchitiet(" + v.id + ")'>Chi tiết </a>" +
                        "<a href='#' class='btn btn-primary col-6' onclick='duan.muasp(" + v.id + ")'> " + v.gia + " vnđ </a>" +
                        "</div>" +
                        "</div>" +
                        "</div>"
                    );
                    }
                })
            }
        });
    } if($('#nhasx').val()=="Samsum"){
        $.ajax({
            url: " https://databasedth.herokuapp.com/phone",
            method: "GET",
            dataType: "json",
            success: function (data) {
                $.each(data, function (i, v) {
                    if (v.nsx=="Samsum"){
                        $('#show').append(
                            "<div class='col-lg-4 col-md-6 mb-5 '>" +
                            "<div class='card h-100'>" +
                            "<img class='card-img-top' src='" + v.anhsp + "' alt=''>" +
                            "<div class='card-body'>" +
                            "<p class='card-text'><span id='diachi'>" + v.tensp + "</span>" +
                            "</div>" +
                            "<div class='card-footer'>" +
                            "<a href='javascript:;' class='btn btn-primary col-4 mr-5' onclick='duan.showchitiet(" + v.id + ")'>Chi tiết </a>" +
                            "<a href='#' class='btn btn-primary col-6' onclick='duan.muasp(" + v.id + ")'> " + v.gia + " vnđ </a>" +
                            "</div>" +
                            "</div>" +
                            "</div>"
                        );
                    }
                })
            }
        });
    } if($('#nhasx').val()=="Oppo"){
        $.ajax({
            url: " https://databasedth.herokuapp.com/phone",
            method: "GET",
            dataType: "json",
            success: function (data) {
                $.each(data, function (i, v) {
                    if (v.nsx=="Oppo"){
                    $('#show').append(
                        "<div class='col-lg-4 col-md-6 mb-5 '>" +
                        "<div class='card h-100'>" +
                        "<img class='card-img-top' src='" + v.anhsp + "' alt=''>" +
                        "<div class='card-body'>" +
                        "<p class='card-text'><span id='diachi'>" + v.tensp + "</span>" +
                        "</div>" +
                        "<div class='card-footer'>" +
                        "<a href='javascript:;' class='btn btn-primary col-4 mr-5' onclick='duan.showchitiet(" + v.id + ")'>Chi tiết </a>" +
                        "<a href='#' class='btn btn-primary col-6' onclick='duan.muasp(" + v.id + ")'> " + v.gia + " vnđ </a>" +
                        "</div>" +
                        "</div>" +
                        "</div>"
                    );
                    }
                })
            }
        });
    }
   
}

duan.showtuvanvien = function () {
    $.ajax({
        url: " https://databasedth.herokuapp.com/tuvanvien",
        method: "GET",
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, v) {
                $('#showtuvanvien').append(
                    "<div class='col-lg-3 col-md-6 >" +
                    "<div class='single_trip'>" +
                    "<div class='thumb'>" +
                    "<img id='anhtuvanvien' src='anhtuvanvien/" + v.avatar + "' width='250px' heigth='350px'>" +
                    "</div>" +
                    "<div class='info'>" +
                    "<div class='date'>" +
                    "<span id='tennv'>" + v.ten + "</span>" +
                    "</div>" +
                    "<p id='pp'>Phone:  <span id='span'>" + v.phone + "</span></p>" +
                    "<p id='pp'>Khu vực công tác:  " + v.kvct + "</p>" +
                    "</div>" +
                    "</div>" +
                    "</div>"
                );
            })
        }
    });
}
duan.showchitiet = function (id) {
    $.ajax({
        "url": " https://databasedth.herokuapp.com/phone/" + id,
        method: "GET",
        dataType: "json",
        success: function (data) {
            document.getElementById("anh").setAttribute('src', data.anhsp);
            $('#chitiet').find('#tensp').text(data.tensp);
            $('#chitiet').find('#nsx').text(data.nsx);
            $('#chitiet').find('#hdh').text(data.HDH);
            $('#chitiet').find('#manhinh').text(data.manhinh);
            $('#chitiet').find('#camtr').text(data.camtr);
            $('#chitiet').find('#camsa').text(data.camsau);
            $('#chitiet').find('#cpu').text(data.CPU);
            $('#chitiet').find('#ram').text(data.RAM);
            $('#chitiet').find('#rom').text(data.ROM);
            $('#chitiet').find('#sim').text(data.sim);
            $('#chitiet').find('#dlp').text(data.dungluongpin);
            $('#chitiet').find('#gia').text(data.gia);
            $('#chitiet').find('#sale').text(data.sale);
            $('#chitiet').modal('show');
        }

    })
}
duan.muasp = function (id) {
    if ($('#idsp').val() == 0) {
        $("#dangnhap").modal('show');
    }
    else {
        bootbox.confirm({
            message: "Bạn muốn thêm sản phẩm vào giỏ hàng của mình?",
            buttons: {
                confirm: {
                    label: 'Có',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'Không',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if (result) {
                    $.ajax({
                        "url": " https://databasedth.herokuapp.com/phone/" + id,
                        success: function (data) {

                            tendonhang = data.tensp;
                            anhsanpham = data.anhsp,
                                gia = data.gia;
                            donhangmoi = [tendonhang, anhsanpham, gia];
                            console.log(donhangmoi);
                            idkh = $('#idsp').val();;
                            $.ajax({
                                "url": " https://databasedth.herokuapp.com/khachhang/" + idkh,
                                method: "GET",
                                dataType: "json",
                                success: function (data1) {
                                    msp = 'MSPkh' + idkh + 'sp' + id,
                                        donhangmoi.push(msp)
                                    console.log(data1.donhang)
                                    donhg = data1.donhang;
                                    donhg.push(donhangmoi);
                                    console.log(donhg)  
                                    var kh = {};
                                    kh.tenkh = data1.tenkh;
                                    kh.tendn = data1.tendn;
                                    kh.pass = data1.pass;
                                    kh.diachi = data1.diachi;
                                    kh.donhang = donhg;
                                    kh.sdt = data1.sdt;
                                    kh.id = data1.id;
                                    $.ajax({
                                        "url": " https://databasedth.herokuapp.com/khachhang/" + idkh,
                                        method: "PUT",
                                        dataType: "json",
                                        contentType: "application/json",
                                        data: JSON.stringify(kh),
                                    })
                                }
                            })
                        }
                    })
                    stt = $('#tongdonhang').val();
                    stt++;
                    $('#tongdonhang').val(stt);
                    $('#sodonhang').find('#tongdonhang').text(stt);
                }
            }
        });
    }
}
duan.taotk = function () {
    duan.resetformttk();
    $("#dangnhap").modal('hide');
    $('#taotk').modal('show');

}
duan.resetformttk = function () {
    $('#hoten').val('');
    $('#taotendnkh').val('');
    $('#taopass').val('');
    $('#dckh').val('');
    $('#sdtkh').val('');
    document.getElementById("sai").classList.add("d-none");
    document.getElementById("dung").classList.add("d-none");
}
duan.taotaikhoan = function () {
    if (iskt == false) {
        $('#tendasudung').removeClass('d-none');
    }
    if ($('#formtaotk').valid() && iskt == true) {
        var donhg = Array();
        var kh = {};
        kh.tenkh = $('#hoten').val()
        kh.tendn = $('#taotendnkh').val()
        kh.pass = $('#taopass').val()
        kh.diachi = $('#dckh').val()
        kh.donhang = donhg;
        kh.sdt = $('#sdtkh').val();

        $.ajax({
            "url": " https://databasedth.herokuapp.com/khachhang",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(kh),
            success: function (data) {
                $('#taotk').modal('hide');
                $("#dangnhap").modal('show');
            }
        })

    }
}
duan.check = function () {
    let tendangnhap = $('#tendnkh').val();
    let pass = $('#pass').val();
    let isLogged = false;
    $.ajax({
        url: " https://databasedth.herokuapp.com/khachhang",
        method: "GET",
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, v) {
                if (v.tendn == tendangnhap && v.pass == pass) {
                    isLogged = true;
                    $("#dangnhap").modal('hide');
                    $('#giohang').find('#khachhang').text(v.tenkh);
                    $("#giohang").modal('show');
                    $('#idsp').val(v.id);
                    duan.showgiohang(v.id);
                    console.log(v.id)
                }
            })
            if (!isLogged) {
                $('#danhnhapsai').removeClass('d-none');
            }
        }
    });
}
duan.ktten = function () {
    tendn = $('#taotendnkh').val();
    if (tendn != '') {
        iskt = true;
        $.ajax({
            "url": " https://databasedth.herokuapp.com/khachhang",
            method: "GET",
            dataType: "json",
            success: function (data) {
                $.each(data, function (i, v) {
                    if (v.tendn == tendn) {
                        iskt = false;
                    }
                })
                if (iskt) {

                    $('#dung').removeClass('d-none');
                    document.getElementById("sai").classList.add("d-none");
                }
                else {
                    $('#sai').removeClass('d-none');
                    document.getElementById("dung").classList.add("d-none");
                }
            }
        })
    }
    else {
        document.getElementById("sai").classList.add("d-none");
        document.getElementById("dung").classList.add("d-none");
    }
}
duan.dangxuat = function () {

    $('#idsp').val('0');
    $('#sodonhang').find('#tongdonhang').text('0');
    $("#giohang").modal('hide');
    $('#tendnkh').val('');
    $('#pass').val('');
}
duan.showgiohang = function (id) {
    $.ajax({
        "url": " https://databasedth.herokuapp.com/khachhang/" + id,
        method: "GET",
        dataType: "json",
        success: function (data) {
            donhg = data.donhang;
            console.log(donhg.length)
            $('#dsspgh').empty();
            stt = 0;
            for (let i = 0; i < donhg.length; i++) {
                stt++;
                $('#dsspgh').append(
                    "<tr>" +
                    "<td>" + stt + "</td>" +
                    "<td>" + donhg[i][3] + "</td>" +
                    "<td>" + donhg[i][0] + "</td>" +
                    "<td>" + "<img src='" + donhg[i][1] + "' width='60px' heidth='100px'>" + "</td>" +
                    "<td>" + donhg[i][2] + "</td>" +
                    "<td>" + "<a href='javascrip:;'><i class='fa fa-window-close' onclick='duan.huydonhang(" + i + ")'> Hủy</i></a>" + "</td>" +
                    "</tr>"
                )
            }
            $('#tongdonhang').val(stt)
            $('#sodonhang').find('#tongdonhang').text(stt);
        }
    })
}
duan.huydonhang = function (stt) {
    id = $('#idsp').val();
    bootbox.confirm({
        message: "Bạn muốn hủy đơn hàng này?",
        buttons: {
            confirm: {
                label: 'Có',
                className: 'btn-success'
            },
            cancel: {
                label: 'Không',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result)
                $.ajax({
                    "url": "https://databasedth.herokuapp.com/khachhang/" + id,
                    method: "GET",
                    dataType: "json",
                    success: function (data) {
                        donhg = data.donhang;
                        console.log(donhg, stt)
                        for (let i = stt; i < donhg.length - 1; i++) {
                            donhg[i] = donhg[i + 1];
                        }
                        xoa = donhg.pop();
                        console.log(donhg)
                        var kh = {};
                        kh.tenkh = data.tenkh;
                        kh.tendn = data.tendn;
                        kh.pass = data.pass;
                        kh.diachi = data.diachi;
                        kh.donhang = donhg;
                        kh.sdt = data.sdt;
                        kh.id = data.id;
                        $.ajax({
                            "url": "https://databasedth.herokuapp.com/khachhang/" + id,
                            method: "PUT",
                            dataType: "json",
                            contentType: "application/json",
                            data: JSON.stringify(kh),
                        })
                        $("#giohang").modal('hide');
                        duan.showgiohang(id);
                        $("#giohang").modal('show');
                    }
                })

        }
    })

}
duan.giohang = function () {
    if ($('#idsp').val() == 0) {
        $("#dangnhap").modal('show');
    }
    else {
        id = $('#idsp').val()
        duan.showgiohang(id);
        $("#giohang").modal('show');
    }

}
duan.init = function () {
    duan.showsanpham();
    duan.showtuvanvien();
}

$(document).ready(function () {
    duan.init();
});