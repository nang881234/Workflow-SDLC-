# Product profile

Mỗi file trong thư mục này mô tả một loại sản phẩm trong phạm vi PRISM Design.
Khi khởi tạo repo, `/prism:init` copy đúng profile đã chọn vào `docs/sdlc/product-profile.yml`.
Một dự án có thể ghép nhiều profile, ví dụ super app gồm phần user facing và phần quản trị.

Các khoá bắt buộc:

| Khoá | Ý nghĩa |
|---|---|
| `id` | mã profile, kebab-case |
| `name` | tên hiển thị |
| `primary_users` | nhóm người dùng chính |
| `density` | mức độ dày đặc thông tin, `low` `medium` `high` |
| `platforms` | nền tảng và breakpoint cần phủ |
| `research_focus` | trọng tâm bước Research |
| `flow_rules` | luật riêng cho bước User flow |
| `wireframe_rules` | luật riêng cho bước Lo-fi |
| `ui_rules` | luật riêng cho bước UI |
| `usability_test` | ngưỡng bắt buộc chạy usability test |
| `handoff_extras` | hạng mục handoff thêm ngoài chuẩn chung |
| `a11y_target` | mức accessibility tối thiểu |
| `done_criteria` | điều kiện đóng phase Design |
