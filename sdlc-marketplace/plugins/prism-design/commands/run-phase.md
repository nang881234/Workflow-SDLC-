---
description: Chạy tuần tự phase Design từ bước hiện tại, dừng ở mỗi gate để chờ người duyệt.
---

Chạy phase Design cho tính năng: $ARGUMENTS

Nguyên tắc vận hành:

1. Đọc `docs/sdlc/state.yml` xác định bước bắt đầu.
2. Với mỗi bước, gọi skill tương ứng: design-intake, design-research, design-user-flow, design-lofi, design-ui, design-usability-test, design-handoff.
3. Sau khi hoàn thành một bước, chạy gate của bước đó rồi **dừng lại**. Trình bày deliverable và kết quả gate, hỏi Product Designer duyệt hay sửa.
4. Chỉ chạy tiếp khi người dùng xác nhận trong chat. Không tự nối bước.
5. Nếu người dùng yêu cầu sửa, sửa rồi chạy lại gate của chính bước đó, không nhảy tới.
6. Mỗi quyết định ghi một dòng vào `docs/sdlc/decisions.md`.

Lưu ý. Bước UI chỉ dừng ở bảng mapping. Việc dựng trên Figma là của người, chờ Designer dán link frame rồi mới tiếp.
