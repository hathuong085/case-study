var duan = {} || duan;
duan.quantri=function(){
    $.ajax({
        "url": "https://databasedth.herokuapp.com/quantri/1",
        method: "GET",
        dataType: "json",
        success: function (data) {
            anh='anhtuvanvien/'+data.avatar;
            document.getElementById("avartar").setAttribute('src', anh);
            $('#content').find('#ten').text(data.ten);
        }
    })
}
duan.drawtable = function () {
    $.ajax({
        url: " https://databasedth.herokuapp.com/phone",
        method: "GET",
        dataType: "json",
        success: function (data) {
            $('#dssp').empty();
            id=0;
            if ($('#nhasx').val() == 'All') {
                $.each(data, function (i, v) {
                    id++;
                    $('#dssp').append(
                        "<tr>" +
                        "<td>" + id + "</td>" +
                        "<td>" + v.tensp + "</td>" +
                        "<td>" + v.nsx + "</td>" +
                        "<td><img src='" + v.anhsp + "' width='100px' heigth='100px'></td>" +
                        "<td>" + v.HDH + "</td>" +
                        "<td>" + v.manhinh + "</td>" +
                        "<td>" + v.camtr + "</td>" +
                        "<td>" + v.camsau + "</td>" +
                        "<td>" + v.CPU + "</td>" +
                        "<td>" + v.RAM + "</td>" +
                        "<td>" + v.ROM + "</td>" +
                        "<td>" + v.sim + "</td>" +
                        "<td>" + v.dungluongpin + "</td>" +
                        "<td>" + v.gia + "</td>" +
                        "<td>" + v.sale + "</td>" +
                        "<td>" +
                        "<a href='javascrip:;'><i class='fas fa-edit mr-3' onclick='duan.sua(" + v.id + ")'>Sửa</i></a>" +
                        "<a href='javascrip:;'><i class='fas fa-trash' onclick='duan.xoa(" + v.id + ")'>Xóa</i></a>" +
                        "</td>" +
                        "</tr>"
                    );
                })
            }
            else if ($('#nhasx').val() == 'Iphone') {
                $.each(data, function (i, v) {
                    if (v.nsx == "Iphone") {
                        id++;
                        $('#dssp').append(
                            "<tr>" +
                            "<td>" + id + "</td>" +
                            "<td>" + v.tensp + "</td>" +
                            "<td>" + v.nsx + "</td>" +
                            "<td><img src='" + v.anhsp + "' width='100px' heigth='100px'></td>" +
                            "<td>" + v.HDH + "</td>" +
                            "<td>" + v.manhinh + "</td>" +
                            "<td>" + v.camtr + "</td>" +
                            "<td>" + v.camsau + "</td>" +
                            "<td>" + v.CPU + "</td>" +
                            "<td>" + v.RAM + "</td>" +
                            "<td>" + v.ROM + "</td>" +
                            "<td>" + v.sim + "</td>" +
                            "<td>" + v.dungluongpin + "</td>" +
                            "<td>" + v.gia + "</td>" +
                            "<td>" + v.sale + "</td>" +
                            "<td>" +
                            "<a href='javascrip:;'><i class='fas fa-edit mr-3' onclick='duan.sua(" + v.id + ")'>Sửa</i></a>" +
                            "<a href='javascrip:;'><i class='fas fa-trash' onclick='duan.xoa(" + v.id + ")'>Xóa</i></a>" +
                            "</td>" +
                            "</tr>"
                        );
                    }
                })
            } else if ($('#nhasx').val() == 'Samsum') {
                $.each(data, function (i, v) {
                    if (v.nsx == "Samsum") {
                        id++;
                        $('#dssp').append(
                            "<tr>" +
                            "<td>" + id + "</td>" +
                            "<td>" + v.tensp + "</td>" +
                            "<td>" + v.nsx + "</td>" +
                            "<td><img src='" + v.anhsp + "' width='100px' heigth='100px'></td>" +
                            "<td>" + v.HDH + "</td>" +
                            "<td>" + v.manhinh + "</td>" +
                            "<td>" + v.camtr + "</td>" +
                            "<td>" + v.camsau + "</td>" +
                            "<td>" + v.CPU + "</td>" +
                            "<td>" + v.RAM + "</td>" +
                            "<td>" + v.ROM + "</td>" +
                            "<td>" + v.sim + "</td>" +
                            "<td>" + v.dungluongpin + "</td>" +
                            "<td>" + v.gia + "</td>" +
                            "<td>" + v.sale + "</td>" +
                            "<td>" +
                            "<a href='javascrip:;'><i class='fas fa-edit mr-3' onclick='duan.sua(" + v.id + ")'>Sửa</i></a>" +
                            "<a href='javascrip:;'><i class='fas fa-trash' onclick='duan.xoa(" + v.id + ")'>Xóa</i></a>" +
                            "</td>" +
                            "</tr>"
                        );
                    }
                })
            } else if ($('#nhasx').val() == 'Oppo') {
                $.each(data, function (i, v) {
                    if (v.nsx == "Oppo") {
                        id++;
                        $('#dssp').append(
                            "<tr>" +
                            "<td>" + id + "</td>" +
                            "<td>" + v.tensp + "</td>" +
                            "<td>" + v.nsx + "</td>" +
                            "<td><img src='" + v.anhsp + "' width='100px' heigth='100px'></td>" +
                            "<td>" + v.HDH + "</td>" +
                            "<td>" + v.manhinh + "</td>" +
                            "<td>" + v.camtr + "</td>" +
                            "<td>" + v.camsau + "</td>" +
                            "<td>" + v.CPU + "</td>" +
                            "<td>" + v.RAM + "</td>" +
                            "<td>" + v.ROM + "</td>" +
                            "<td>" + v.sim + "</td>" +
                            "<td>" + v.dungluongpin + "</td>" +
                            "<td>" + v.gia + "</td>" +
                            "<td>" + v.sale + "</td>" +
                            "<td>" +
                            "<a href='javascrip:;'><i class='fas fa-edit mr-3' onclick='duan.sua(" + v.id + ")'>Sửa</i></a>" +
                            "<a href='javascrip:;'><i class='fas fa-trash' onclick='duan.xoa(" + v.id + ")'>Xóa</i></a>" +
                            "</td>" +
                            "</tr>"
                        );
                    }
                })
            }
        }
    });
};
duan.themsp = function () {
    if ($('#formthemsua').valid()) {
        if ($('#id').val() == 0) {
            var duanmoi = {};
            duanmoi.tensp = $('#tensp').val()
            duanmoi.nsx = $('#nsx').val()
            duanmoi.anhsp = $('#anh').val()
            duanmoi.HDH = $('#hdh').val()
            duanmoi.manhinh = $('#manhinh').val()
            duanmoi.camtr = $('#camtr').val()
            duanmoi.camsau = $('#camsa').val()
            duanmoi.CPU = $('#cpu').val()
            duanmoi.RAM = $('#ram').val()
            duanmoi.ROM = $('#rom').val()
            duanmoi.sim = $('#sim').val()
            duanmoi.dungluongpin = $('#dlp').val()
            duanmoi.gia = $('#gia').val()
            duanmoi.sale = $('#sale').val()

            $.ajax({
                "url": " https://databasedth.herokuapp.com/phone",
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(duanmoi),
                success: function (data) {
                    $('#themsua').modal('hide');
                    duan.drawtable();

                }
            })
        }
        else {
            var suasp= {};
            suasp.tensp = $('#tensp').val()
            suasp.nsx = $('#nsx').val()
            suasp.anhsp = $('#anh').val()
            suasp.HDH = $('#hdh').val()
            suasp.manhinh = $('#manhinh').val()
            suasp.camtr = $('#camtr').val()
            suasp.camsau = $('#camsa').val()
            suasp.CPU = $('#cpu').val()
            suasp.RAM = $('#ram').val()
            suasp.ROM = $('#rom').val()
            suasp.sim = $('#sim').val()
            suasp.dungluongpin = $('#dlp').val()
            suasp.gia = $('#gia').val()
            suasp.sale = $('#sale').val()

            suasp.id = $('#id').val()
            $.ajax({
                "url": " https://databasedth.herokuapp.com/phone/" + suasp.id,
                method: "PUT",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(suasp),
                success: function (data) {
                    $('#themsua').modal('hide');
                    duan.drawtable();

                }
            })
        }
    }
}
duan.sua = function (id) {
    $.ajax({
        "url": " https://databasedth.herokuapp.com/phone/" + id,
        method: "GET",
        dataType: "json",
        success: function (suasp) {
            $('#tensp').val(suasp.tensp)
            $('#nsx').val(suasp.nsx)
            $('#anh').val(suasp.anhsp)
            $('#hdh').val(suasp.HDH)
            $('#manhinh').val(suasp.manhinh)
            $('#camtr').val(suasp.camtr)
            $('#camsa').val(suasp.camsau)
            $('#cpu').val(suasp.CPU)
            $('#ram').val(suasp.RAM)
            $('#rom').val(suasp.ROM)
            $('#sim').val(suasp.sim)
            $('#dlp').val(suasp.dungluongpin)
            $('#gia').val(suasp.gia)
            $('#sale').val(suasp.sale)
            $('#id').val(suasp.id);
            $('#themsua').modal('show');
        }

    })
}
duan.xoa = function (id) {
    bootbox.confirm({
        message: "Bạn có chắc chắn xóa không?",
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
                    method: "DELETE",
                    dataType: "json",
                    success: function (data) {
                        duan.drawtable();
                    }
                })
            }
        }
    });
};
duan.resetmodal = function () {
    $('#tensp').val('')
    $('#nsx').val('Iphone')
    $('#anh').val('')
    $('#hdh').val('')
    $('#manhinh').val('')
    $('#camtr').val('')
    $('#camsa').val('')
    $('#cpu').val('')
    $('#ram').val('')
    $('#rom').val('')
    $('#sim').val('')
    $('#dlp').val('')
    $('#gia').val('')
    $('#sale').val('')
    $('#id').val('');
    $('#id').val('0');
}
duan.openmodal = function () {
    duan.resetmodal();
    $('#themsua').modal('show');
}
duan.init = function () {
    duan.quantri();
    duan.drawtable();
};
$(document).ready(function () {
    duan.init();
})