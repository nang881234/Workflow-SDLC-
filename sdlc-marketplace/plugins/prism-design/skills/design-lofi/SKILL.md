---
name: design-lofi
description: Bước 4 của phase Design trong PRISM. Dùng khi cần soạn đặc tả lo-fi wireframe cho từng màn, gồm cấu trúc, nội dung, trạng thái và UX writing, làm đầu vào để Designer dựng trên Figma. Trigger khi người dùng nói lo-fi, wireframe, đặc tả màn hình, khung màn hình.
---

# Bước 4. Lo-fi wireframe

Mục tiêu. Đặc tả đủ chi tiết để Designer dựng trên Figma mà không phải hỏi lại PO.

## Trình tự

1. Đọc flow đã duyệt và `wireframe_rules` trong product profile.
2. Lấy danh sách màn từ các node trong flow. Mỗi màn một file `docs/sdlc/03-lofi/screens/<slug>.md`.
3. Soạn theo mẫu bên dưới cho từng màn.
4. Kiểm bằng `node ${CLAUDE_PLUGIN_ROOT}/scripts/check-lofi.mjs docs/sdlc/03-lofi/screens`.
5. Tổng hợp `docs/sdlc/03-lofi/README.md` dạng bảng màn, mục đích, flow liên quan.

## Mẫu đặc tả màn

```markdown
# <Tên màn>
Flow: <slug> · Vai trò: <role> · Breakpoint: <danh sách>

## Mục đích
Một câu. Người dùng tới đây để làm gì.

## Cấu trúc
1. Vùng ... — nội dung, thứ tự ưu tiên
2. ...

## Nội dung và UX writing
| Thành phần | Nội dung | Ghi chú giọng điệu |

## Trạng thái bắt buộc
- Default
- Loading
- Empty
- Error
(thêm trạng thái riêng theo profile, ví dụ Offline, Chưa đăng nhập, Không đủ quyền)

## Quy tắc tương tác
- ...

## Câu hỏi còn mở
- ...
```

## Giới hạn

- Không chọn màu, font, hay kích thước cụ thể. Đó là việc của bước UI.
- Không bỏ qua trạng thái với lý do hiếm gặp. Thiếu trạng thái là lỗi chặn.
- UX writing viết bằng ngôn ngữ sản phẩm thật, không để lorem.
