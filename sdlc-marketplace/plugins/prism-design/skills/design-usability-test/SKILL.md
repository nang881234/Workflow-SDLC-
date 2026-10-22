---
name: design-usability-test
description: Bước 6 tuỳ chọn của phase Design trong PRISM. Dùng khi cần quyết định có chạy usability test hay không, chọn loại test giả lập hay test thật, soạn kịch bản và tổng hợp kết quả. Trigger khi người dùng nói usability test, kiểm thử khả dụng, test với người dùng, validate design.
---

# Bước 6. Usability test, tuỳ chọn

Mục tiêu. Chạy test khi nó đổi được quyết định, không chạy cho có.

## Trình tự

1. Đọc `usability_test.required_when` trong product profile và đặc điểm tính năng.
2. Đưa ra khuyến nghị gồm ba phần: nên chạy hay không, loại test, lý do. Khuyến nghị không phải quyết định. Product Designer chốt.
3. Nếu bỏ qua, ghi lý do vào `state.yml` ở mục `validate.reason` và dừng.
4. Nếu chạy, soạn `docs/sdlc/05-validate/plan.md`:
   - Câu hỏi cần trả lời, tối đa 3
   - Nhiệm vụ giao cho người tham gia
   - Tiêu chí thành công đo được, ví dụ tỉ lệ hoàn thành, số lần lạc đường
   - Người tham gia, số lượng, cách tuyển
5. Loại test:
   - Giả lập, dùng persona do PO định nghĩa. Nhanh, rẻ, chỉ bắt được vấn đề về cấu trúc và nội dung.
   - Test thật, với người dùng thật. Bắt được vấn đề về hành vi và kỳ vọng.
6. Tổng hợp kết quả vào `docs/sdlc/05-validate/findings.md`, mỗi phát hiện ghi mức độ nghiêm trọng và bước quay về.

## Định tuyến kết quả

- Vấn đề về cấu trúc, thứ tự bước, mô hình nghiệp vụ, quay về bước 3 User flow.
- Vấn đề về bố cục, nhãn, khả năng đọc, quay về bước 5 UI.
- Không quay về bước 1. Nếu phát hiện sai đề bài, đó là việc của PO, ghi lại và báo.

## Giới hạn

- Kết quả test giả lập không được trình bày như dữ liệu người dùng thật.
- Không kết luận từ dưới 5 người tham gia mà không nêu giới hạn mẫu.
