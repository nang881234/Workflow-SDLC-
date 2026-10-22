---
name: design-user-flow
description: Bước 3 của phase Design trong PRISM. Dùng khi cần dựng user flow dạng Mermaid cho một tính năng, gồm happy path, error path, phân nhánh theo role và trạng thái. Trigger khi người dùng nói vẽ user flow, dựng flow, flow diagram, luồng người dùng.
---

# Bước 3. User flow

Mục tiêu. Một sơ đồ mà PO, Designer và Dev đọc ra cùng một thứ.

## Trình tự

1. Đọc `research-brief.md` và `flow_rules` trong product profile.
2. Liệt kê các flow cần vẽ. Một user story lớn có thể tách nhiều flow.
3. Với mỗi flow, dựng file Mermaid `docs/sdlc/02-flow/<slug>.mmd`:
   - Node bắt đầu là điểm vào thật, ví dụ thông báo đẩy, deeplink, menu, không phải chữ Start chung chung.
   - Mọi node quyết định có đủ nhánh, không để nhánh treo.
   - Mọi flow có ít nhất một nhánh lỗi và một nhánh huỷ.
   - Ghi role được phép ở node cần phân quyền.
4. Kiểm bằng `node ${CLAUDE_PLUGIN_ROOT}/scripts/check-flow.mjs docs/sdlc/02-flow`.
5. Viết `docs/sdlc/02-flow/README.md` liệt kê các flow, điểm vào, điểm kết thúc.

## Quy ước Mermaid

```mermaid
flowchart TD
  entry([Điểm vào: màn Trang chủ]) --> a[Chọn phần thưởng]
  a --> q{Đủ điểm?}
  q -- Có --> b[Xác nhận đổi]
  q -- Không --> e1[/Thông báo thiếu điểm/]
  b --> ok([Đổi thành công])
  b --> e2[/Lỗi mạng, cho thử lại/]
```

Hình chữ nhật là màn hoặc thao tác. Hình thoi là quyết định. Hình bình hành là thông báo hoặc lỗi. Hình bo tròn là điểm vào hoặc kết thúc.

## Giới hạn

- Không nhảy sang wireframe khi flow chưa được duyệt.
- Không gộp nhiều tính năng vào một sơ đồ khổng lồ, tách theo mục tiêu người dùng.
