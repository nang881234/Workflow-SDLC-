---
description: Xem phase Design đang ở bước nào, cái gì đang chờ duyệt, cái gì đang chặn.
---

Đọc `docs/sdlc/state.yml`. Nếu không có, bảo người dùng chạy `/prism-design:init`.

In ra:

1. Tên project, danh sách product profile, link Design System.
2. Bảng 7 bước với trạng thái, người duyệt, ngày duyệt.
3. Bước hiện tại và việc tiếp theo cần làm, nêu tên skill tương ứng.
4. Danh sách deliverable còn thiếu so với bước đang ở. Kiểm sự tồn tại của file thật trong `docs/sdlc/`, không chỉ tin vào state.yml.
5. Cảnh báo nếu state.yml nói một bước đã approved nhưng deliverable của bước đó không tồn tại.

Ngắn gọn, dạng bảng. Không dài dòng.
