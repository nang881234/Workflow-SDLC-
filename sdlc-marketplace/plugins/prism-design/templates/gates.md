# Gate của phase Design

Nguyên tắc chung, mọi bước đều có ba lớp. AI soạn, máy kiểm, người duyệt.
Không bước nào được đóng khi thiếu chữ ký của Product Designer.

| Bước | AI soạn | Máy kiểm | Người duyệt | Deliverable |
|---|---|---|---|---|
| 1. Intake PRD | Bảng rà soát PRD theo designer input standard, danh sách thiếu | Script kiểm đủ trường bắt buộc | Product Designer và PO | `docs/sdlc/00-prd/intake-report.md` |
| 2. Research | Tổng hợp UX pattern, benchmark, trích Design System hiện có | Kiểm mọi pattern có nguồn, không có nguồn thì loại | Product Designer | `docs/sdlc/01-research/research-brief.md` |
| 3. User flow | Flow dạng Mermaid, đủ happy path và error path | Lint cú pháp Mermaid, kiểm mọi node có lối ra | Product Designer và PO | `docs/sdlc/02-flow/*.mmd` |
| 4. Lo-fi wireframe | Đặc tả từng màn, cấu trúc, nội dung, state, UX writing | Kiểm đủ 4 state bắt buộc, kiểm thuật ngữ theo glossary | Product Designer | `docs/sdlc/03-lofi/screens/*.md` |
| 5. UI design | Map đặc tả sang component và token của Design System | Kiểm token coverage, báo mọi giá trị hard-code | Product Designer dựng trên Figma rồi duyệt | File Figma, `docs/sdlc/04-ui/ui-mapping.md` |
| 6. Usability test | Đề xuất có chạy hay không, soạn kịch bản và persona | Kiểm ngưỡng bắt buộc theo product profile | Product Designer quyết định cuối | `docs/sdlc/05-validate/` |
| 7. Handoff | Sinh design spec từ Figma và các bước trước | Kiểm đủ mục handoff theo profile | Product Designer và Tech Lead | `docs/sdlc/06-handoff/design-spec.md` |

## Luật bất biến

1. AI không bao giờ tự đóng một bước. Trạng thái bước chỉ đổi khi người ghi vào `docs/sdlc/state.yml`.
2. Design System là nguồn sự thật duy nhất cho UI. Giá trị không có trong token phải được đề xuất bổ sung vào Design System, không hard-code tại dự án.
3. Figma là nơi chứa output hình ảnh. Repo chứa đặc tả dạng văn bản, quyết định và liên kết tới Figma.
4. Kết quả usability test quay về bước 3 hoặc bước 5, không quay về bước 1.
5. Mọi bước ghi lại quyết định vào `docs/sdlc/decisions.md` theo định dạng một dòng, ngày, người quyết định, nội dung.
