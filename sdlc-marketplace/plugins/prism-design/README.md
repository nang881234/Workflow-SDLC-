# prism-design

Phase Design của PRISM dưới dạng plugin dùng chung.

```
skills/     7 skill tương ứng 7 bước
commands/   init, status, gate, run-phase, new-profile
agents/     design-reviewer, soát deliverable trước khi trình duyệt
profiles/   7 loại sản phẩm, mỗi loại một bộ luật riêng
templates/  gates.md, state.yml, designer-input-standard.md
scripts/    check-flow.mjs, check-lofi.mjs
```

## Luồng 7 bước

| # | Bước | Skill | AI soạn | Máy kiểm | Người duyệt |
|---|---|---|---|---|---|
| 1 | Intake PRD | `design-intake` | bảng rà soát, câu hỏi gửi PO | đủ trường bắt buộc | PD và PO |
| 2 | Research | `design-research` | pattern có nguồn, đối chiếu DS | mọi pattern có nguồn | PD |
| 3 | User flow | `design-user-flow` | Mermaid đủ nhánh | `check-flow.mjs` | PD và PO |
| 4 | Lo-fi | `design-lofi` | đặc tả màn, state, UX writing | `check-lofi.mjs` | PD |
| 5 | UI | `design-ui` | mapping component và token | token coverage | PD dựng Figma rồi duyệt |
| 6 | Usability test | `design-usability-test` | khuyến nghị và kịch bản | ngưỡng theo profile | PD quyết định |
| 7 | Handoff | `design-handoff` | design spec | checklist theo profile | PD và Tech Lead |

Kết quả bước 6 quay về bước 3 hoặc bước 5, không quay về bước 1.

## 7 product profile

`ops-portal`, `dashboard`, `web-enterprise`, `web-landing`, `ecommerce-web`, `loyalty-app`, `enterprise-app`.

Mỗi profile quy định research focus, luật flow, luật wireframe, luật UI, ngưỡng usability test, mục handoff thêm, mức accessibility và điều kiện đóng phase.
