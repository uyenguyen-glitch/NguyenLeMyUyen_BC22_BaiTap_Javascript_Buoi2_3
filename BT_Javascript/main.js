/**
 * Bài tập 1: Tính tiền lương nhân viên
 ** Đầu vào: Nhập số ngày làm
 *
 ** Xử lí: lương cố định (100000) * số ngày làm
 *
 ** Đầu ra: Tiền lương của nhân viên
 */

document.getElementById("btnTinhLuong").onclick = function () {
  const LUONG = 100000;
  var soNgayLam = document.getElementById("txtSoNgayLam").value;

  var currentFormat = new Intl.NumberFormat("vn-VN");

  var kqTienLuong =
    "<div class='alert alert-success'> <p> Số tiền lương của nhân viên là: " +
    currentFormat.format(soNgayLam * LUONG) +
    " VND </p></div>";

  document.getElementById("footerTienLuong").innerHTML = kqTienLuong;
};

/**
 * Bài tập 2: Tính giá trị trung bình
 *
 ** Đầu vào: Nhập 5 số thực
 *
 ** Xử lí: (số thực thứ nhất + số thực thứ hai + số thực thứ ba + số thực thứ tư + số thực thứ năm)/5
 *
 ** Đầu ra: giá trị trung bình của 5 số thực được nhập vào
 */
document.getElementById("btnTinhGiaTriTB").onclick = function () {
  var sttnh = parseFloat(document.getElementById("soThucThuNhat").value);
  var stth = parseFloat(document.getElementById("soThucThuHai").value);
  var sttb = parseFloat(document.getElementById("soThucThuBa").value);
  var sttt = parseFloat(document.getElementById("soThucThuTu").value);
  var sttn = parseFloat(document.getElementById("soThucThuNam").value);

  var gttb = (sttnh + stth + sttb + sttt + sttn) / 5;

  var kqTB =
    "<div class='alert alert-success'> <p> Giá trị trung bình của năm số là: " +
    gttb +
    "</p></div>";

  document.getElementById("footerGiaTriTb").innerHTML = kqTB;
};

/**
 * Bài tập 3: Quy đổi tiền tề
 *
 ** Đầu vào: Số tiền USD cần quy đổi
 *
 ** Xử lí: số tiền USD * mệnh giá (235000)
 *
 ** Đầu ra: Số tiền VND
 */
document.getElementById("btnQuyDoi").onclick = function () {
  const giaUSD = 23500;
  var soTienCanDoi = document.getElementById("txtSoTien").value;

  var currentFormat = new Intl.NumberFormat("vn-VN");

  var kqQuyDoi =
    "<div class='alert alert-success'> <p> Số tiền được quy đổi là: " +
    currentFormat.format(giaUSD * soTienCanDoi) +
    " VND </p></div>";
  document.getElementById("footerQuyDoi").innerHTML = kqQuyDoi;
};

/**
 * Bài tập 4: Tính chu vi, diện tích hình chữ nhật
 *
 ** Đầu vào: Nhập chiều dài, chiều rộng hình chữ nhật
 *
 ** Xử lí: - Tính chu vi: (chiều dài + chiều rộng) * 2
 *         - Tính diện tích: chiều dài * chiều rộng
 *
 ** Đầu ra: Diện tích và chu vi hình chữ nhật
 */
document.getElementById("btnTinhCVDT").onclick = function () {
  var cd = document.getElementById("txtChieuDai").value * 1;
  var cr = document.getElementById("txtChieuRong").value * 1;

  var cv = (cd + cr) * 2;
  var dt = cd * cr;

  var kqCVDT =
    "<div class='alert alert-success'> <p> Chu vi là: " + cv + "</p>";
  kqCVDT += "<p> Diện tích là là: " + dt + "</p>";
  kqCVDT += "</div>";

  document.getElementById("footerCVDT").innerHTML = kqCVDT;
};

/**
 * Bài tập 5: Tính tổng 2 kí số
 *
 ** Đầu ra: Nhập số có 2 chữ số
 *
 ** Xử lí: Tách số 2 chữ số:
 *               - Số hàng chục: số / 10
 *              - Số hàng đơn vị: số % 10
 *
 ** Đầu ra: Tổng 2 kí số
 */
document.getElementById("btnTinhTongKS").onclick = function () {
  var so = parseInt(document.getElementById("txtSo").value);

  var soHangDV = parseInt(so % 10);
  var soHangChuc = parseInt(so / 10);

  var tong2KS = soHangChuc + soHangDV;

  var kqTinhTong2KS =
    "<div class='alert alert-success'> <p> Tổng hai kí số là: " +
    tong2KS +
    "</p></div>";
  document.getElementById("footerTinhTongKS").innerHTML = kqTinhTong2KS;
};
