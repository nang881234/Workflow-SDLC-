---
name: design-intake
description: Bước 1 của phase Design trong PRISM. Dùng khi nhận một PRD mới và cần kiểm tra PRD có đủ điều kiện vào phase Design hay không, theo designer input standard. Trigger khi người dùng nói nhận PRD, kiểm tra PRD, intake, bắt đầu phase Design.
---

# Bước 1. Intake PRD

Mục tiêu. Chặn PRD thiếu thông tin ngay cửa vào, thay vì phát hiện ở bước wireframe.

## Trình tự

1. Đọc `docs/sdlc/state.yml`. Nếu chưa có, bảo người dùng chạy `/prism-design:init` trước.
2. Đọc chuẩn tại `${CLAUDE_PLUGIN_ROOT}/templates/designer-input-standard.md`.
3. Đọc profile tương ứng tại `${CLAUDE_PLUGIN_ROOT}/profiles/<id>.yml` cho từng profile trong `product_profiles`.
4. Đọc PRD mà người dùng chỉ định.
5. Chấm từng trường bắt buộc, trạng thái `đủ`, `thiếu`, hoặc `mơ hồ`. Mơ hồ tính là thiếu.
6. Với mỗi trường thiếu, viết một câu hỏi cụ thể gửi PO, không viết nhận xét chung chung.
7. Ghi `docs/sdlc/00-prd/intake-report.md` theo mẫu bên dưới.

## Mẫu báo cáo

```markdown
# Intake report — <tên tính năng>
Ngày: <yyyy-mm-dd> · Product profile: <id> · Điểm: <n>/10

## Bảng rà soát
| # | Trường | Trạng thái | Ghi chú |

## Câu hỏi gửi PO
1. ...

## Kết luận
Đạt / Chưa đạt. Nếu chưa đạt, nêu trường chặn.
```

## Giới hạn

- Không tự điền thông tin thiếu. Không suy đoán quy tắc nghiệp vụ.
- Không đổi trạng thái bước trong `state.yml`. Chỉ Product Designer làm việc đó.
- Nếu PRD chưa đạt, dừng lại, không chạy sang bước Research.
