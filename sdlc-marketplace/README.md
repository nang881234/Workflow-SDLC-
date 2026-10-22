# sdlc-internal

Marketplace nội bộ chứa các plugin chuẩn hoá quy trình AI SDLC theo framework PRISM.
Mỗi plugin đóng gói một phase. Repo này không gắn với dự án cụ thể nào.

Plugin hiện có:

| Plugin | Phase | Nội dung |
|---|---|---|
| `prism-design` | Design | 7 bước từ intake PRD tới handoff, 7 product profile, gate human in the loop, script kiểm tự động |

## Cài vào một repo dự án

```bash
# một lần cho mỗi máy
claude plugin marketplace add <org>/sdlc-internal

# trong thư mục repo dự án
claude plugin install prism-design@sdlc-internal --scope project
```

Hoặc trong phiên Claude Code:

```
/plugin marketplace add <org>/sdlc-internal
/plugin install prism-design@sdlc-internal
```

Cài ở `--scope project` sẽ ghi vào `.claude/settings.json` của repo, commit file đó để cả team nhận cùng một phiên bản.

## Khởi tạo phase Design trong repo dự án

```
/prism-design:init
```

Lệnh này hỏi loại sản phẩm, tạo cây `docs/sdlc/`, copy gate và chuẩn đầu vào, chèn một mục vào `CLAUDE.md`.
Một dự án có thể chọn nhiều product profile, ví dụ super app gồm phần user facing và phần quản trị.

## Lệnh

| Lệnh | Việc |
|---|---|
| `/prism-design:init` | khởi tạo cấu trúc và chọn product profile |
| `/prism-design:status` | xem đang ở bước nào, cái gì chặn |
| `/prism-design:run-phase <tính năng>` | chạy tuần tự, dừng ở mỗi gate |
| `/prism-design:gate <bước>` | chạy checklist trước khi trình duyệt |
| `/prism-design:new-profile <loại>` | tạo profile cho loại sản phẩm mới |

## Dùng chung cho cả team

Plugin gắn với máy và quyền truy cập git, không gắn với tài khoản Claude.

Commit `.claude/settings.json` vào repo dự án, lấy mẫu ở
`plugins/prism-design/templates/project-settings.json`. Thành viên clone về, mở Claude Code,
bấm đồng ý ở hộp thoại tin cậy thư mục là plugin tự nạp, không phải chạy lệnh cài.

Chi tiết gồm scope, repo riêng không phải GitHub, managed settings cấp tổ chức và cách phát hành
phiên bản, xem `plugins/prism-design/templates/TEAM-SETUP.md`.

## Cập nhật

```bash
claude plugin marketplace update sdlc-internal
claude plugin update prism-design@sdlc-internal
```

Trong phiên đang mở, chạy `/reload-plugins` để nhận bản mới.

## Đóng góp

- Sửa nội dung một bước, sửa `plugins/prism-design/skills/<tên>/SKILL.md`.
- Thêm loại sản phẩm, thêm file vào `plugins/prism-design/profiles/` theo `_schema.md`, cập nhật README.
- Sửa luật gate, sửa `plugins/prism-design/templates/gates.md`.
- Mọi thay đổi tăng `version` trong `plugins/prism-design/.claude-plugin/plugin.json`.

## Nguyên tắc không thay đổi

1. AI soạn, máy kiểm, người duyệt. AI không bao giờ tự đóng một bước.
2. Design System là nguồn sự thật cho UI. Giá trị ngoài hệ thống phải được gọi tên, không hard-code tại dự án.
3. Figma chứa output hình ảnh. Repo chứa đặc tả, quyết định và liên kết.
4. Không có một quy trình chung cho mọi sản phẩm. Luật riêng nằm ở product profile.
