---
name: design-ui
description: Bước 5 của phase Design trong PRISM. Dùng khi cần map đặc tả lo-fi sang component và token của Design System trên Figma, và phát hiện giá trị hard-code hoặc component còn thiếu. Trigger khi người dùng nói UI design, map design system, token, dựng UI từ wireframe.
---

# Bước 5. UI design qua Design System

Mục tiêu. UI được lắp từ Design System. Mọi thứ nằm ngoài hệ thống phải được gọi tên và xử lý, không im lặng bỏ qua.

## Trình tự

1. Đọc đặc tả lo-fi đã duyệt và `ui_rules` trong product profile.
2. Đọc `design_system.figma_url` và nguồn token trong `state.yml`. Nếu có Figma MCP, dùng để tra component và variable thật, không đoán tên.
3. Với mỗi thành phần trong đặc tả, map sang một dòng trong bảng mapping.
4. Những gì không map được, phân loại thành ba nhóm: cần biến thể mới, cần component mới, cần token mới. Mỗi nhóm kèm đề xuất gửi về team Design System.
5. Ghi `docs/sdlc/04-ui/ui-mapping.md`.
6. Product Designer dựng UI trên Figma theo bảng này, bổ sung animation, graphic, illustration, icon. Những thứ này con người làm, AI không sinh.
7. Designer dán link frame Figma vào cột cuối của bảng rồi duyệt.

## Mẫu mapping

```markdown
# UI mapping — <tên tính năng>

| Màn | Thành phần | Component DS | Variant | Token dùng | Link Figma | Trạng thái |

## Khoảng trống của Design System
| Nhu cầu | Loại | Đề xuất | Người theo dõi |

## Phần người bổ sung
| Hạng mục | Màn | Mô tả | Người làm |
```

## Giới hạn

- Không đặt giá trị màu, khoảng cách, bo góc bằng số tuyệt đối. Nếu buộc phải, ghi vào mục khoảng trống.
- Không tạo component mới trực tiếp trong file dự án khi chưa có ý kiến team Design System.
- Animation, illustration, icon do người làm. AI chỉ mô tả yêu cầu.
