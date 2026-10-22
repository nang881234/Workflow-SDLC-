# Triển khai cho cả team

## Cách hoạt động

Plugin gắn với máy và quyền truy cập git, không gắn với tài khoản Claude.
Đăng nhập tài khoản cá nhân hay tài khoản công ty không ảnh hưởng tới plugin này.
Điều kiện duy nhất của một thành viên là có quyền đọc repo marketplace và đã lưu credential git trên máy.

## Cách một repo dự án tự bật plugin cho mọi người

Commit file `.claude/settings.json` vào repo dự án, nội dung lấy từ `project-settings.json`
trong thư mục này, thay `url` bằng địa chỉ repo marketplace thật.

Hai khoá quan trọng:

| Khoá | Việc |
|---|---|
| `extraKnownMarketplaces` | đăng ký marketplace, tên khoá phải trùng `name` trong `marketplace.json` |
| `enabledPlugins` | bật plugin, dạng `<tên plugin>@<tên marketplace>` |

Thêm `"autoUpdate": true` để team luôn nhận bản mới. Mặc định của marketplace riêng là tắt.

## Trải nghiệm của thành viên

1. Clone repo dự án, mở Claude Code.
2. Claude Code hỏi có tin thư mục này không. Phải bấm đồng ý. Chưa đồng ý thì marketplace không được đăng ký và không có thông báo gì.
3. Plugin nạp ngay ở phiên đó. Không phải chạy lệnh cài.

Lý do không phải cài thủ công, plugin trong marketplace này dùng `source` dạng đường dẫn tương đối
`./plugins/prism-design`, nên nó nằm sẵn trong bản checkout của marketplace.
Nếu sau này tách plugin ra repo riêng, thành viên sẽ phải chạy thêm
`claude plugin install prism-design@sdlc-internal --scope project` một lần.

## Cách sinh file settings thay vì gõ tay

```bash
claude plugin marketplace add <url-repo-marketplace> --scope project
claude plugin install prism-design@sdlc-internal --scope project
git add .claude/settings.json && git commit
```

## Phân biệt scope

| Scope | Ghi vào | Dùng khi |
|---|---|---|
| user, mặc định | `~/.claude/settings.json` | chỉ mình bạn, mọi dự án |
| `--scope project` | `<repo>/.claude/settings.json` | cả team, commit file này |
| `--scope local` | `<repo>/.claude/settings.local.json` | chỉ mình bạn, repo này, không vào git |

Thứ tự ưu tiên khi trùng, managed, rồi project local, rồi project, rồi user.

## Repo riêng không phải GitHub

Dùng `source` dạng `git` với `url` đầy đủ. Dạng rút gọn `owner/repo` chỉ áp dụng cho GitHub.

```json
{ "source": "git", "url": "git@gitlab.example.com:<group>/sdlc-marketplace.git", "ref": "main" }
```

Claude Code gọi `git` của máy với chế độ không hỏi, nên SSH key phải nằm trong ssh-agent
và host phải có trong known_hosts, hoặc credential HTTPS phải được lưu sẵn.
Thiếu credential thì clone thất bại, và auto update cũng thất bại im lặng.

Ai không có tài khoản trên git host thì không cài được theo đường này.
Phương án thay thế là đóng gói zip và dùng source dạng `archive` ghim `sha256`.

## Áp đặt ở cấp tổ chức

Nếu muốn mọi máy nhận plugin mà không cần ai làm gì, dùng managed settings với đúng hai khoá trên.

| Hệ | Đường dẫn |
|---|---|
| macOS | `/Library/Application Support/ClaudeCode/managed-settings.json` |
| Linux và WSL | `/etc/claude-code/managed-settings.json` |
| Windows | `C:\Program Files\ClaudeCode\managed-settings.json` |

Cũng làm được qua MDM, hoặc qua console claude.ai ở mục Organization settings, Claude Code, Managed settings,
cần quyền Owner. Managed đặt `true` thì người dùng không tắt được.

Lưu ý, mặc định chỉ một nguồn managed có hiệu lực trên mỗi máy, thứ tự server, MDM, rồi file.
Muốn gộp nhiều nguồn thì đặt `managedSourcesBehavior` thành `merge`.
Managed settings không cấp quyền git, thành viên vẫn phải có quyền đọc repo.

## Phát hành phiên bản mới

Tăng `version` trong `plugins/prism-design/.claude-plugin/plugin.json` rồi push.
Nếu bỏ trống `version` ở cả plugin.json và entry marketplace thì commit SHA đóng vai trò version,
nghĩa là team bám theo từng commit.

Máy đã bật autoUpdate sẽ cập nhật sau tin nhắn đầu tiên của phiên, trễ ngẫu nhiên tối đa 10 phút,
và hiện nhắc chạy `/reload-plugins` để áp dụng. Phiên đang chạy vẫn dùng code cũ cho tới khi reload.

Cập nhật thủ công:

```bash
claude plugin marketplace update sdlc-internal
claude plugin update prism-design@sdlc-internal
```

## Kiểm tra đã chạy đúng

```bash
claude plugin list                 # plugin có trong danh sách và đang bật
claude -p --output-format stream-json --verbose   # sự kiện init liệt kê plugin đã nạp
```

Trong phiên, gõ `/plugin` để xem marketplace và plugin.
