---
description: Chạy checklist gate cho một bước trước khi trình duyệt. Dùng dạng /prism-design:gate <bước>.
---

Bước cần kiểm: $ARGUMENTS
Giá trị hợp lệ: intake, research, user_flow, lofi, ui, validate, handoff. Nếu rỗng, lấy bước đang in_progress trong `docs/sdlc/state.yml`.

Các bước:

1. Đọc `docs/sdlc/gates.md` lấy định nghĩa gate của bước đó.
2. Đọc product profile trong `docs/sdlc/profiles/` lấy luật riêng áp dụng cho bước đó.
3. Chạy script kiểm tương ứng nếu có:
   - user_flow: `node ${CLAUDE_PLUGIN_ROOT}/scripts/check-flow.mjs docs/sdlc/02-flow`
   - lofi: `node ${CLAUDE_PLUGIN_ROOT}/scripts/check-lofi.mjs docs/sdlc/03-lofi/screens`
4. Dùng subagent `design-reviewer` để soát nội dung deliverable của bước.
5. In kết quả dạng bảng: hạng mục, Đạt hoặc Chưa đạt, việc cần sửa.
6. Kết luận một dòng: Sẵn sàng trình duyệt, hoặc Còn n hạng mục chặn.
7. Không tự ghi `approved` vào state.yml. Nhắc người dùng rằng việc duyệt là của Product Designer.
