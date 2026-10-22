---
name: design-research
description: Bước 2 của phase Design trong PRISM. Dùng khi cần nghiên cứu UX pattern, best practice và đối chiếu Design System hiện có trước khi vẽ flow. Trigger khi người dùng nói research UX pattern, benchmark, tìm best practice cho tính năng, chuẩn bị cho design.
---

# Bước 2. Research và Design System

Mục tiêu. Mọi quyết định thiết kế ở bước sau đều truy ngược được về một pattern có nguồn.

## Trình tự

1. Đọc `docs/sdlc/00-prd/intake-report.md`. Nếu kết luận là Chưa đạt, dừng lại.
2. Đọc `research_focus` trong product profile. Đây là trọng tâm, không nghiên cứu lan man.
3. Với mỗi trọng tâm, thu thập tối thiểu 2 nguồn độc lập. Ưu tiên theo thứ tự: tài liệu nền tảng chính thức, nghiên cứu đã công bố, sản phẩm thực tế đang vận hành.
4. Đối chiếu Design System hiện có. Liệt kê component đã có dùng lại được, component cần biến thể mới, component chưa có.
5. Ghi `docs/sdlc/01-research/research-brief.md`.

## Mẫu

```markdown
# Research brief — <tên tính năng>

## Pattern áp dụng
| Pattern | Áp dụng vào | Nguồn | Lý do chọn |

## Đối chiếu Design System
| Nhu cầu | Component đã có | Cần biến thể | Thiếu, cần bổ sung |

## Khuyến nghị cho bước User flow
- ...

## Rủi ro
- ...
```

## Giới hạn

- Pattern không có nguồn thì loại, không giữ lại với ghi chú kinh nghiệm cá nhân.
- Component thiếu thì đề xuất bổ sung vào Design System, không thiết kế rời tại dự án.
- Không vẽ giao diện ở bước này.
