const listProduct = [
  {
    _id: 0,
    name: "[PHIÊN BẢN V6 SIREN HOLIDAY] Son Kem Lì, Bền Màu, Lâu Trôi Merzy The First Velvet Tint 4.5g",
    img: "../img/ChiTietProducts/sp1_1024x1024.png",
    maSP: "MZ100001",
    giaBan: 299000,
    giaKhuyenMai: 159000,
    thuongHieu: "Merzy",
    loaiSP: "V6 SIREN HOLIDAY",
    barCode: "6902395841241",
    nhanHieu: "Merzy",
    xuatXu: "Hàn Quốc",
    noiSX: "Korea",
    dungTich: "4.5g",
    hsd: "3 năm kể từ ngày sản xuất/NSX xem trên bao bì (6 tháng sau khi mở nắp)",
    note: "***Màu sắc có thể khác nhau tùy thuộc vào ánh sáng, độ phân giải màn hình và sắc tố da.",
  },
  {
    _id: 1,
    name: " [NEW][COLOR GLOSS] Son Bóng Thuần Chay Cho Môi Căng Mọng, Mềm Mịn Romand Glasting Color Gloss 4g",
    img: "../img/ChiTietProducts/sp2_Romand_1024x1024.png",
    maSP: "RM100002",
    giaBan: 207000,
    giaKhuyenMai: 197000,
    thuongHieu: "Romand",
    loaiSP: "01 PEONY BALLET",
    barCode: "8809115029119",
    nhanHieu: "Romand",
    xuatXu: "Hàn Quốc",
    noiSX: "Korea",
    dungTich: "4g",
    hsd: "3 năm kể từ ngày sản xuất/NSX xem trên bao bì (12 tháng sau khi mở nắp)",
    note: "***Màu sắc có thể khác nhau tùy thuộc vào ánh sáng, độ phân giải màn hình và sắc tố da.",
  },
  {
    _id: 2,
    name: "[NEW][DEW4 - XANH DƯƠNG] Son Tint Bóng Dạng Thạch, Lâu Trôi Merzy The Watery Dew Tint 4g",
    img: "../img/ChiTietProducts/sp3_Merzy_1024x1024.png",
    maSP: "MZ100003",
    giaBan: 299000,
    giaKhuyenMai: 169000,
    thuongHieu: "Merzy",
    loaiSP: "WD23 ANTIQUE FLAME",
    barCode: "8809576261141",
    nhanHieu: "Merzy",
    xuatXu: "Hàn Quốc",
    noiSX: "Korea",
    dungTich: "4g",
    hsd: "36 tháng kể từ ngày sản xuất/NSX xem trên bao bì (12 tháng sau khi mở nắp)",
    note: "***Màu sắc có thể khác nhau tùy thuộc vào ánh sáng, độ phân giải màn hình và sắc tố da.",
  },
  {
    _id: 3,
    name: "Nước Tẩy Trang Làm Sạch Tươi Mát 3 In 1 Cho Da Dầu L'Oreal Micellar Water Refreshing Even For Sensitive Skin",
    img: "../img/ChiTietProducts/sp4_LoReal_1024x1024.png",
    maSP: "LR100004",
    giaBan: 79000,
    giaKhuyenMai: 69000,
    thuongHieu: "L'OReal",
    loaiSP: "[chai 35ml]",
    barCode: "8809576261234",
    nhanHieu: "L'OReal",
    xuatXu: "Pháp",
    noiSX: "China",
    dungTich: "35ml",
    hsd: "3 năm kể từ ngày sản xuất/NSX xem trên bao bì.",
    note: "***Da dầu, hỗn hợp dầu, lỗ chân lông to",
  },
  {
    _id: 4,
    name: "Tẩy Da Chết Body Chiết Xuất Cà Phê Dak Lak Cocoon Dak Lak Coffee Body Polish",
    img: "../img/ChiTietProducts/sp5_Cocoon_1024x1024.png",
    maSP: "CC100005",
    giaBan: 325000,
    giaKhuyenMai: 260000,
    thuongHieu: "Cocoon",
    loaiSP: "TÚI 600ML",
    barCode: "9029576261141",
    nhanHieu: "Cocoon",
    xuatXu: "Việt Nam",
    noiSX: "Việt Nam",
    dungTich: "600ml",
    hsd: "3 năm kể từ ngày sản xuất/NSX xem trên bao bì (12 tháng kể từ ngày mở nắp).",
    note: "***Tác dụng của sản phẩm sẽ khác nhau tùy vào cơ địa của mỗi người. Với làn da nhạy cảm bạn nên thử sản phẩm ở một vùng nhỏ trước khi sử dụng cho toàn khuôn mặt.",
  },
  {
    _id: 5,
    name: "Bút Kẻ Mắt Nước Siêu Mảnh, Chống Thấm Nước, Lâu Trôi Zeesea Black Lasting Eyeliner 0.5g",
    img: "../img/ChiTietProducts/sp6_Zeesea_1024x1024.png",
    maSP: "ZS100006",
    giaBan: 119000,
    giaKhuyenMai: 99000,
    thuongHieu: "Zeesea",
    loaiSP: "WD23 ANTIQUE FLAME",
    barCode: "78095734141",
    nhanHieu: "Zeesea",
    xuatXu: "Trung Quốc",
    noiSX: "China",
    dungTich: "0.5g",
    hsd: "3 năm kể từ ngày sản xuất/NSX xem trên bao bì.",
    note: "***Màu sắc có thể khác nhau tùy thuộc vào ánh sáng, độ phân giải màn hình và sắc tố da.",
  },
  {
    _id: 6,
    name: "[3 Items] Bộ Dưỡng Giảm Mụn Some By Mi Miracle Travel Kit",
    img: "../img/ChiTietProducts/sp7_SomeByMi.png",
    maSP: "SBM100007",
    giaBan: 408000,
    giaKhuyenMai: 286000,
    thuongHieu: "Some By Mi",
    loaiSP: "Travel Kit",
    barCode: "100576261141",
    nhanHieu: "Some By Mi",
    xuatXu: "Hàn Quốc",
    noiSX: "Korea",
    dungTich: "4g",
    hsd: "3 năm kể từ ngày sản xuất/NSX xem trên bao bì (12 tháng kể từ ngày mở nắp).",
    note: "***Màu sắc có thể khác nhau tùy thuộc vào ánh sáng, độ phân giải màn hình và sắc tố da.",
  },
  {
    _id: 7,
    name: "Viên Uống Hỗ Trợ Miễn Dịch, Tăng Cường Sức Đề Kháng, Cải Thiện Da Mụn, Bổ Sung Kẽm DHC Zinc",
    img: "../img/ChiTietProducts/sp8_DHC_1024x1024.png",
    maSP: "DHC100008",
    giaBan: 60000,
    giaKhuyenMai: 65000,
    thuongHieu: "DHC",
    loaiSP: "Gói 15 Viên /15 ngày",
    barCode: "12667261141",
    nhanHieu: "DHC",
    xuatXu: "Nhật Bản",
    noiSX: "Japan",
    dungTich: "15 Viên/15 Ngày",
    hsd: "3 năm kể từ ngày sản xuất. Sử dụng tốt nhất trước thời gian ghi trên bao bì.",
    note: "**Sản phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh",
  },
  {
    _id: 8,
    name: "[NEW][LIQUID GLITTER] Gel Nhũ Mắt Lấp Lánh, Bền Màu Romand The Universe Liquid Glitter 2g",
    img: "../img/ChiTietProducts/sp9_Liquid_1024x1024.png",
    maSP: "RM100009",
    giaBan: 179000,
    giaKhuyenMai: 290000,
    thuongHieu: "Romand",
    loaiSP: "07 MYSTIC MOON",
    barCode: "0176261141",
    nhanHieu: "Romand",
    xuatXu: "Hàn Quốc",
    noiSX: "Korea",
    dungTich: "2g",
    hsd: "3 năm kể từ ngày sản xuất/NSX xem trên bao bì (6 tháng kể ngày mở nắp)",
    note: "***Màu sắc có thể khác nhau tùy thuộc vào ánh sáng, độ phân giải màn hình và sắc tố da.",
  },
  {
    _id: 9,
    name: "Kem Lót Trang Điểm Kiềm Dầu Che Khuyết Điểm, Làm Mịn Da Zeesea Multi-Effect Makeup Primer",
    img: "../img/ChiTietProducts/sp10_KemLot_1024x1024.png",
    maSP: "ZS100010",
    giaBan: 49000,
    giaKhuyenMai: 69000,
    thuongHieu: "Zeesea",
    loaiSP: "A01 PURPLE - 10G",
    barCode: "880006261141",
    nhanHieu: "Zeesea",
    xuatXu: "Trung Quốc",
    noiSX: "China",
    dungTich: "10g",
    hsd: "3 năm kể từ ngày sản xuất/NSX xem trên bao bì.",
    note: "***Màu sắc có thể khác nhau tùy thuộc vào ánh sáng, độ phân giải màn hình và sắc tố da.",
  },
  {
    _id: 10,
    name: "Serum La Roche-Posay Tinh Chất Hỗ Trợ Phục Hồi Da, Cấp Ẩm Cho Da La Roche-Posay Hyalu B5 Serum 30ml",
    img: "../img/ChiTietProducts/sp11_Serum_1024x1024.png",
    maSP: "LRP100011",
    giaBan: 1200000,
    giaKhuyenMai: 1139000,
    thuongHieu: "La Roche-Posay",
    loaiSP: "Serum 30ml",
    barCode: "9006261141",
    nhanHieu: "La Roche-Posay",
    xuatXu: "Pháp",
    noiSX: "France",
    dungTich: "30ml",
    hsd: "3 năm kể từ ngày sản xuất/NSX xem trên bao bì.",
    note: "***Tác dụng của sản phẩm sẽ khác nhau tùy vào cơ địa của mỗi người. Với làn da nhạy cảm bạn nên thử sản phẩm ở một vùng nhỏ trước khi sử dụng cho toàn khuôn mặt",
  },
  {
    _id: 11,
    name: "Kem Chống Nắng Dạng Sữa La Roche-Posay Anthelios UVMune 400 Invisible Fluid SPF50+",
    img: "../img/ChiTietProducts/sp12_ChongNang_1024x1024.png",
    maSP: "LRC100012",
    giaBan: 560000,
    giaKhuyenMai: 449000,
    thuongHieu: "La Roche-Posay",
    loaiSP: "50ML TẶNG NƯỚC TẨY TRANG 50ML",
    barCode: "880006261141",
    nhanHieu: "La Roche-Posay",
    xuatXu: "Pháp",
    noiSX: "France",
    dungTich: "50ml",
    hsd: "3 năm kể từ ngày sản xuất/NSX xem trên bao bì.",
    note: "***Màu sắc có thể khác nhau tùy thuộc vào ánh sáng, độ phân giải màn hình và sắc tố da.",
  },
];

let stt = 1;
//Danh sách tài khoản
const listAccount = [
  {
    _id: 0,
    name: "Trần Công Minh",
    username: "admin",
    password: "admin",
    email: "tcminangiang@gmail.com",
    sdt: "0123456789",
  },
];

//Thêm dữ liệu từ tài khoản được thêm vào
function addAccount() {
  let account = {
    _id: stt++,
    name: localStorage.getItem("name"),
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
    email: localStorage.getItem("email"),
    sdt: localStorage.getItem("sdt"),
  };
  listAccount.push(account);
  localStorage.setItem("listAccount", JSON.stringify(listAccount));
}
addAccount();
