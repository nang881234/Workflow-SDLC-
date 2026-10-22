---
name: design-handoff
description: Bước 7 của phase Design trong PRISM. Dùng khi cần sinh design spec bàn giao cho Dev từ Figma và các bước trước, và chạy checklist đóng phase Design. Trigger khi người dùng nói handoff, bàn giao cho dev, design spec, đóng phase design.
---

# Bước 7. Hoàn thiện và handoff

Mục tiêu. Dev mở một tài liệu là đủ bắt đầu, không phải đi hỏi từng người.

## Trình tự

1. Kiểm `state.yml`, các bước 1 tới 5 phải ở trạng thái `approved`. Bước 6 là `approved` hoặc `skipped` kèm lý do.
2. Đọc `handoff_extras` và `a11y_target` trong product profile.
3. Sinh `docs/sdlc/06-handoff/design-spec.md` theo mẫu.
4. Chạy `/prism-design:gate handoff` để kiểm checklist.
5. Product Designer và Tech Lead cùng duyệt, ghi vào `state.yml`.

## Mẫu design spec

```markdown
# Design spec — <tên tính năng>
Figma: <link> · Design System: <link> · Product profile: <id>

## 1. Phạm vi
Danh sách màn và flow bàn giao. Những gì không nằm trong đợt này.

## 2. Flow
Link tới các file `.mmd` và ảnh xuất.

## 3. Màn hình
Mỗi màn: link frame Figma, danh sách component DS kèm variant, token dùng, trạng thái đã dựng.

## 4. Quy tắc tương tác và chuyển màn

## 5. Nội dung
Bảng toàn bộ chuỗi hiển thị, gồm thông báo lỗi, kèm khoá nếu có đa ngôn ngữ.

## 6. Dữ liệu hiển thị
Trường, nguồn, định dạng, quy tắc rỗng và làm tròn.

## 7. Responsive và breakpoint

## 8. Accessibility
Mức mục tiêu, thứ tự focus, nhãn cho screen reader, tương phản.

## 9. Asset
Danh sách icon, illustration, animation, định dạng và mật độ.

## 10. Mục riêng theo product profile
<điền từ handoff_extras>

## 11. Câu hỏi còn mở và giả định
```

## Giới hạn

- Không đóng phase khi còn mục trong Câu hỏi còn mở chưa có người chịu trách nhiệm.
- Không dán ảnh thay cho đặc tả. Ảnh là bổ trợ, văn bản là nguồn.
