//Bài tập 1
var tinhLuong = document.getElementById("btn-bt1");
tinhLuong.onclick = function () {
  var luongMotNgay = document.getElementById("txt-luong").value * 1;
  var soNgayLam = document.getElementById("txt-ngayLam").value * 1;
  var luong = luongMotNgay * soNgayLam;
  document.getElementById(
    "KetQua1"
  ).innerHTML = ` <i class="fa-regular fa-hand-point-right"></i> ${luong}`;
};

//Bài tập 2
var tinhTrungBinh = document.getElementById("btn-bt2");
tinhTrungBinh.onclick = function () {
  var soThu1 = document.getElementById("txt-so1").value * 1;
  var soThu2 = document.getElementById("txt-so2").value * 1;
  var soThu3 = document.getElementById("txt-so3").value * 1;
  var soThu4 = document.getElementById("txt-so4").value * 1;
  var soThu5 = document.getElementById("txt-so5").value * 1;
  var trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  document.getElementById(
    "KetQua2"
  ).innerHTML = ` <i class="fa-regular fa-hand-point-right"></i> ${trungBinh}`;
};

//Bài tập 3
const GIA_USD = 23500;
new Intl.NumberFormat("vn-VN", { style: "currency", currency: "VND" }).format(
  GIA_USD
);
var quyDoiTien = document.getElementById("btn-bt3");
quyDoiTien.onclick = function () {
  var soTienUSB = document.getElementById("txt-tienUSD").value * 1;
  var soTien = soTienUSB * GIA_USD;
  var formatNumber = new Intl.NumberFormat("vn-VN", {
    style: "currency",
    currency: "VND",
  }).format(soTien);
  document.getElementById(
    "KetQua3"
  ).innerHTML = ` <i class="fa-regular fa-hand-point-right"></i> ${formatNumber}`;
};
//Bài tập 4
var tinh = document.getElementById("btn-bt4");
tinh.onclick = function () {
  var chieuDai = document.getElementById("txt-chieuDai").value * 1;
  var chieuRong = document.getElementById("txt-chieuRong").value * 1;
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;
  document.getElementById(
    "KetQua4"
  ).innerHTML = ` <i class="fa-regular fa-hand-point-right"></i> Diện tích: ${dienTich}; Chu vi:  ${chuVi}`;
};
//Bài tập 5
var tinhTong = document.getElementById("btn-bt5");
tinhTong.onclick = function () {
  var so = document.getElementById("txt-So2ChuSo").value * 1;
  var hangTruc = Math.floor(so % 10);
  console.log(hangTruc);
  var hangDonVi = Math.floor(so / 10);
  console.log(hangDonVi);

  var Tong = hangTruc + hangDonVi;
  document.getElementById(
    "KetQua5"
  ).innerHTML = ` <i class="fa-regular fa-hand-point-right"></i> ${Tong}`;
};
