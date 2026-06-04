export const personalInfo = {
  name: "Vũ Phương Nam",
  title: "AI-Empowered Web Developer",
  email: "vunam13069@gmail.com",
  phone: "0867-077-565", // Placeholder
  github: "https://github.com/vunam1306", // Placeholder
  linkedin: "https://www.linkedin.com/in/nam-vu-a17070365/", // Placeholder
  toeic: 835,
  education: {
    degree: "Sinh viên Kỹ thuật Phần mềm",
    university: "Đại học CNTT & TT Việt - Hàn",
    period: "10/2021 - 02/2026",
  },
  bio: "Sở hữu tư duy phân tích của một Planner / Business Analyst kết hợp với năng lực triển khai thực tế của một Developer, tôi đam mê ứng dụng sức mạnh của các công cụ AI (Claude, Cursor, ChatGPT, Antigravity) để giải quyết các bài toán phát triển web phức tạp. Tôi tin vào sự nỗ lực không ngừng (hustle) và tính kỷ luật. Với nền tảng UI/UX vững chắc, tôi không chỉ viết code mà còn tối ưu hóa toàn bộ luồng giá trị của sản phẩm từ khâu ý tưởng đến vận hành.",
};

export const skills = [
  "Vue JS", "Node JS", "Python", "FastAPI", "TypeScript", 
  "Git/GitHub", "PostgreSQL", "Supabase", "UI/UX Design", "Planning",
  "Venv", "DaVinci Resolve"
];

export const experience = [
  {
    role: "Junior Developer",
    company: "Stellarpoint Technologies",
    period: "08/2025 - 05/2026",
    description: "Trực tiếp tham gia phát triển và tối ưu hóa các ứng dụng web. Vận dụng AI tools để tăng tốc độ phát triển và chất lượng mã nguồn.",
  },
  {
    role: "Intern (Business Analyst / Planning)",
    company: "Rocket Global",
    period: "05/2025 - 08/2025",
    description: "Phân tích nghiệp vụ, lập kế hoạch dự án các hệ thống CRM/ERP. Sử dụng Google AI Studio và ClickUp để tối ưu quy trình quản lý và lên ý tưởng.",
  }
];

export const projects = [
  {
    name: "AI CRM",
    role: "Fullstack Developer",
    tech: ["Vue JS", "FastAPI", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    shortDesc: "Hệ thống B2B Outreach & Quản lý Khách hàng Đa ngôn ngữ.",
    description: "Hệ thống CRM ứng dụng AI để quét thông tin doanh nghiệp, tự động tạo email bán hàng cá nhân hóa và quản lý lead scoring. Đặc biệt hỗ trợ đa ngôn ngữ đồng nhất từ (UI, Data đến Email Language).",
    aiUsage: [
      { tool: "Claude", desc: "Lên ý tưởng kiến trúc (Planning) cho hệ thống ngôn ngữ phức tạp và thiết kế logic đánh giá lead scoring." },
      { tool: "Cursor", desc: "Tăng tốc độ code UI/UX bằng Vue JS và thiết lập nhanh các API backend với FastAPI." },
      { tool: "ChatGPT", desc: "Sử dụng để xử lý các bài toán bóc tách và phân tích dữ liệu đa ngôn ngữ phức tạp." },
    ]
  },
  {
    name: "Golf24",
    role: "Frontend Developer",
    tech: ["Vue JS", "Node JS", "PostgreSQL", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
    shortDesc: "Web Application Đặt sân Golf trực tuyến.",
    description: "Xây dựng module đặt lịch, thiết kế và tối ưu hóa luồng người dùng (user flow) cho việc tìm kiếm và xác nhận lịch đặt. Phối hợp chặt chẽ với backend để tích hợp database realtime.",
    aiUsage: [
      { tool: "Claude Code", desc: "Bảo trì và refactor các đoạn code logic phức tạp liên quan đến tính toán thời gian và xung đột lịch." },
      { tool: "Cursor", desc: "Kết hợp với kiến thức UI/UX cá nhân để tinh chỉnh giao diện người dùng (Landing page & Booking page) sao cho trực quan nhất." },
      { tool: "Antigravity", desc: "Hỗ trợ thiết lập và tự động hóa các khâu test luồng đặt lịch, đảm bảo vận hành website trơn tru không lỗi." },
    ]
  },
  {
    name: "V-tube Creator Platform",
    role: "Web Developer",
    tech: ["Vue JS", "Node JS", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    shortDesc: "Nền tảng Quản lý & Tuyển dụng Creator chuyên nghiệp.",
    description: "Xây dựng hệ thống Gacha thu hút người dùng, luồng thanh toán và Admin Dashboard toàn diện để quản lý creator và phê duyệt nội dung. Cải thiện lại UI/UX giúp tăng hiệu suất tương tác.",
    aiUsage: [
      { tool: "ChatGPT", desc: "Phân tích logic xác suất cho hệ thống Gacha và hỗ trợ thiết kế cấu trúc cơ sở dữ liệu ban đầu." },
      { tool: "Cursor", desc: "Hỗ trợ triển khai (deploy) và sinh code nhanh cho các module component đồ thị, state management trong Admin Dashboard." },
    ]
  },
  {
    name: "AI Image Extractor",
    role: "Developer",
    tech: ["TypeScript", "OpenAI API", "Chrome Extension"],
    demoUrl: "#",
    githubUrl: "#",
    shortDesc: "Tiện ích mở rộng tự động hóa thu thập ảnh.",
    description: "Một Chrome Extension nhỏ gọn chứng minh khả năng tối ưu hóa quy trình làm việc cá nhân, giúp cào và phân loại hình ảnh tự động từ các trang web.",
    aiUsage: [
      { tool: "AI Tools", desc: "Sử dụng để bootstrap khung extension, kết nối API và thiết kế prompt phân loại ảnh." },
    ]
  }
];

export const workflow = [
  {
    step: "1. Planning & Design",
    title: "Tư duy hệ thống",
    desc: "Bắt đầu bằng việc thảo luận, lên ý tưởng kiến trúc với Claude. Phân tích nghiệp vụ và phác thảo luồng UI/UX tối ưu nhất trước khi viết dòng code đầu tiên.",
    icon: "plan"
  },
  {
    step: "2. Development",
    title: "Code tốc độ cao",
    desc: "Sử dụng Cursor và Claude Code làm trợ lý lập trình đắc lực. Chuyển đổi thiết kế thành các component Vue/React một cách nhanh chóng, đồng thời thiết lập backend API chuẩn xác.",
    icon: "code"
  },
  {
    step: "3. Deploy & Maintenance",
    title: "Vận hành & Tối ưu",
    desc: "Quản lý mã nguồn chặt chẽ với Git/GitHub. Tiếp tục dùng AI để phân tích log, debug các vấn đề phát sinh và bảo trì, mở rộng hệ thống bền vững.",
    icon: "deploy"
  }
];
