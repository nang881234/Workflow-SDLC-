---
description: Khởi tạo cấu trúc phase Design của PRISM trong repo hiện tại và chọn product profile.
---

Khởi tạo phase Design cho repo này.

Tham số người dùng truyền vào (có thể rỗng): $ARGUMENTS

Các bước:

1. Nếu `docs/sdlc/state.yml` đã tồn tại, dừng lại và báo. Không ghi đè.
2. Liệt kê 7 product profile từ `${CLAUDE_PLUGIN_ROOT}/profiles/`, kèm một dòng mô tả mỗi loại. Hỏi người dùng chọn một hoặc nhiều, trừ khi $ARGUMENTS đã nêu rõ.
3. Tạo cây thư mục:
   ```
   docs/sdlc/00-prd  01-research  02-flow  03-lofi/screens  04-ui  05-validate  06-handoff
   ```
4. Copy `${CLAUDE_PLUGIN_ROOT}/templates/state.yml` vào `docs/sdlc/state.yml`, điền tên project lấy từ thư mục repo và danh sách profile đã chọn. Để trống các trường người.
5. Copy `${CLAUDE_PLUGIN_ROOT}/templates/gates.md` và `designer-input-standard.md` vào `docs/sdlc/`.
6. Với mỗi profile đã chọn, copy file yml tương ứng vào `docs/sdlc/profiles/`.
7. Tạo `docs/sdlc/decisions.md` rỗng với tiêu đề và mô tả định dạng một dòng cho mỗi quyết định.
8. Nếu repo chưa có `CLAUDE.md`, tạo mới. Nếu đã có, chèn thêm một mục. Nội dung mục:
   ```
   ## Quy trình Design (PRISM)
   Repo này dùng plugin prism-design. Trạng thái phase ở `docs/sdlc/state.yml`,
   gate ở `docs/sdlc/gates.md`. Không tự đổi trạng thái bước, chỉ Product Designer đổi.
   Chạy `/prism-design:status` để xem đang ở đâu.
   ```
9. In ra tóm tắt những gì đã tạo và bước tiếp theo là gì, kèm nhắc điền ba trường người trong `state.yml`.
