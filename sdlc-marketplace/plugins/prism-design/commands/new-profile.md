---
description: Tạo một product profile mới cho loại sản phẩm chưa có trong bộ 7 loại chuẩn.
---

Loại sản phẩm cần thêm: $ARGUMENTS

1. Đọc `${CLAUDE_PLUGIN_ROOT}/profiles/_schema.md` lấy danh sách khoá bắt buộc.
2. Đọc 2 profile gần giống nhất làm tham chiếu về độ chi tiết và giọng văn.
3. Hỏi người dùng những thông tin không suy ra được: người dùng chính, nền tảng, ngưỡng bắt buộc usability test.
4. Sinh file yml vào `docs/sdlc/profiles/<id>.yml` cho dự án hiện tại.
5. Nhắc người dùng rằng nếu loại này dùng lại cho dự án khác, nên gửi file về repo marketplace để thêm vào plugin, thay vì giữ riêng ở dự án.
