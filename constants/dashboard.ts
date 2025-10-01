// ---------------------------------- individual -------------------------- //

export const individualNav = [
  {
    name: "Dashboard",
    icon: "/dash/board.svg",
    route: "/dashboard/business",
  },
  {
    name: "Cloud Library",
    icon: "/dash/cloud.svg",
    route: "/settings",
  },
  {
    name: "Talk to Agent",
    icon: "/dash/phone.svg",
    route: "",
  },
  {
    name: "My Orders",
    icon: "/dash/orders.svg",
    route: "/orders",
    options: [
      { name: "Order a Service", bgColor: "bg-[#00A0D4]" },
      { name: "Track My Orders", bgColor: "bg-[#A2FF9F]" },
      ,
      { name: "Order History", bgColor: "bg-[#9FEAFF]" },
    ],
  },
  {
    name: "Wallet/Payments",
    icon: "/dash/wallet.svg",
    route: "",
  },
  {
    name: "Self-Service Tools",
    icon: "/dash/service.svg",
    route: "",
  },
  {
    name: "Settings",
    icon: "/dash/settings.svg",
    route: "",
  },
  {
    name: "Log out",
    icon: "/dash/logout.svg",
    route: "",
  },
];

export const businessNav = [
  {
    name: "Dashboard",
    icon: "/dash/board.svg",
    route: "/dashboard/business",
  },
  {
    name: "Business Tools",
    icon: "/dash/service.svg",
    route: "/settings",
  },
  {
    name: "Support",
    icon: "/dash/phone.svg",
    route: "",
  },
  {
    name: "Cloud Library",
    icon: "/dash/cloud.svg",
    route: "/orders",
  },
  {
    name: "Request a Service",
    icon: "/dash/request.svg",
    route: "",
  },
  {
    name: "Team Members",
    icon: "/dash/recent/users.svg",
    route: "",
  },
  {
    name: "Billing & Subscription",
    icon: "/dash/wallet.svg",
    route: "",
  },

  {
    name: "Company Settings",
    icon: "/dash/settings.svg",
    route: "",
  },
  {
    name: "Log out",
    icon: "/dash/logout.svg",
    route: "",
  },
];

export const studentNav = [
  {
    name: "Dashboard",
    icon: "/dash/board.svg",
    route: "/dashboard/business",
  },
  {
    name: "Cloud Library",
    icon: "/dash/cloud.svg",
    route: "/settings",
  },
  {
    name: "Talk to Agent",
    icon: "/dash/phone.svg",
    route: "",
  },
  {
    name: "Order services",
    icon: "/dash/orders.svg",
    route: "/orders",
  },

  {
    name: "Self-Service Tools",
    icon: "/dash/service.svg",
    route: "",
  },
  {
    name: "Settings",
    icon: "/dash/settings.svg",
    route: "",
  },
  {
    name: "Log out",
    icon: "/dash/logout.svg",
    route: "",
  },
];

export const quickActions = [
  {
    icon: "/dash/order-white.svg",
    title: "Order a Service",
    subTittle: "Request expert help fast",
    bgColor: "bg-[#2FC22B]",
    textColor: "text-white",
  },
  {
    icon: "/dash/orders-white.svg",
    title: "Track My Orders",
    subTittle: "See progress in real time",
    bgColor: "bg-[#A2FF9F]",
    textColor: "text-[#137110]",
  },
  {
    icon: "/dash/service-white.svg",
    title: "Use Self-Service Tools",
    subTittle: "Do it yourself online",
    bgColor: "bg-[#00A0D4]",
    textColor: "text-white",
  },
  {
    icon: "/dash/talk.svg",
    title: "Talk to an Agent",
    subTittle: "Get instant support",
    bgColor: "bg-[#9FEAFF]",
    textColor: "text-[#037BA2]",
  },
];

export const services = [
  {
    name: "typesetting",
    description: "Perfectly typed documents, ready to use.",
    status: "pending",
    icon: "/dash/typesetting.svg",
    msg: "1 task in progress ",
  },

  {
    name: "printing",
    description: "High-quality prints delivered or picked up.",
    status: "pending",
    icon: "/dash/printing.svg",
    msg: "2 active orders ",
  },

  {
    name: "scanning",
    description: "Convert papers to secure digital files.",
    status: "null",
    icon: "/dash/scanning.svg",
    msg: "No scans in progress",
  },
  {
    name: "graphic design",
    description: "Custom visuals for work, study, or business.",
    status: "pending",
    icon: "/dash/graphic.svg",
    msg: "3 designs in progress  ",
  },
  {
    name: "file conversion",
    description: "Easily change file formats in seconds.",
    status: "failed",
    icon: "/dash/file.svg",
    msg: "1 conversion failed",
  },
];

export const recentActivities = [
  {
    name: "Document Printing",
    progress: "/dash/recent/pro1.svg",
    icon: "/dash/recent/print.svg",
    percent: "95%",
  },

  {
    name: "Brochure Design",
    description: "High-quality prints delivered or picked up.",
    progress: "/dash/recent/pro2.svg",
    icon: "/dash/recent/bro.svg",
    percent: "70% ",
  },

  {
    name: "File Scanning",
    description: "Convert papers to secure digital files.",
    progress: "/dash/recent/pro3.svg",
    icon: "/dash/recent/file.svg",
    percent: "66%",
  },
  {
    name: "Payment Verification",
    description: "Custom visuals for work, study, or business.",
    progress: "/dash/recent/pro4.svg",
    icon: "/dash/recent/payment.svg",
    percent: "100%",
  },
  {
    name: "Order Delivery",
    description: "Easily change file formats in seconds.",
    progress: "/dash/recent/pro5.svg",
    icon: "/dash/recent/order.svg",
    percent: "20%",
  },
];

export const cloud = [
  {
    name: "Videos",
    bgColor: "bg-[#A2FF9F]",
    percent: "18%",
  },

  {
    name: "Photos",
    bgColor: "bg-[#00A0D4]",
    percent: "22% ",
  },

  {
    name: "Documents",
    bgColor: "bg-[#2FC22B]",
    percent: "36%",
  },
];

// ---------------------------------- BUSINESS ------------------------------- //
export const stats = [
  {
    title: "Active Requests",
    value: "6 Total",
    subtitle: "4 Pending, 2 In Progress",
    icon: "/dash/student/chat-bubble.svg",
  },
  {
    title: "Monthly Quota",
    value: "12/20",
    icon: "/dash/business/pie-chart.svg",
    subtitle: "Orders Used",
  },
  {
    title: "Cloud Storage",
    value: "4.5GB / 20GB",
    icon: "/dash/student/cloud-file.svg",
    subtitle: "Storage Consumed",
  },
  {
    title: "Assigned Agent",
    value: "Chizzy",
    icon: "/dash/business/headset.svg",
    subtitle: "Admin Support",
  },
  {
    title: "Billing Status",
    value: "Active",
    icon: "/dash/business/cash-flow.svg",
    subtitle: "Subscription Renews July 3rd",
  },
];

export const aiSuggestions = [
  {
    icon: "/dash/business/paper.svg",
    text: "Convert these 3 files into a branded report?",
    bgColor: "bg-[#2FC22B]",
    textColor: "text-white",
    btnColor: "bg-[#A2FF9F]",
    btnText: "Convert Now",
    btnTextColor: "text-[#24BA20]",
  },
  {
    icon: "/dash/business/bar-chart.svg",
    text: "Want us to format your March report?",
    bgColor: "bg-[#A2FF9F]",
    btnColor: "bg-[#008C0E]",
    btnText: "Apply Suggestion",
    textColor: "text-[#1EB51A]",
  },
  {
    icon: "/dash/business/export.svg",
    text: "Move these 7 files into a folder for easy access?",
    bgColor: "bg-[#00A0D4]",
    btnColor: "bg-[#9FEAFF]",
    btnText: "Move Files",
    textColor: "text-white",
    btnTextColor: "text-[#00A0D4]",
  },
];

export const currentTask = [
  {
    icon: "/dash/recent/print.svg",
    title: "Create Invoice Template",
    subtitle: "Task assigned to Finance team",
    status: "In Progress",
    progress: 65,
    progressBar: "/dash/recent/pro1.svg",
  },
  {
    icon: "/dash/recent/bro.svg",
    title: "Design Proposal Cover",
    subtitle: "Task assigned to Marketing team",
    status: "Assigned",
    progress: 23,
    progressBar: "/dash/recent/pro2.svg",
  },
  {
    icon: "/dash/business/update.svg",
    title: "Update Onboarding Form",
    subtitle: "New request added by HR",
    status: "New Task",
    progress: 0,
    progressBar: "/dash/recent/pro3.svg",
  },
  {
    icon: "/dash/business/bar-chart-blue.svg",
    title: "Annual Report Formatting",
    subtitle: "Delivered to Admin team",
    status: "Delivered",
    progress: 100,
    progressBar: "/dash/recent/pro4.svg",
  },
  {
    icon: "/dash/business/sm-flyer.svg",
    title: "Social Media Flyer",
    subtitle: "Reopened by Marketing team",
    status: "In Progress",
    progress: 45,
    progressBar: "/dash/recent/pro5.svg",
  },
];

export const businessTools = [
  {
    icon: "/dash/business/tools/1.svg",
    text: "Company Cloud  Storage",
  },
  {
    icon: "/dash/business/tools/2.svg",
    text: "Templates Vault",
  },
  {
    icon: "/dash/business/tools/3.svg",
    text: "Virtual Reception",
    arrow: "/dash/business/arrow-blue.svg",
  },
  {
    icon: "/dash/business/tools/4.svg",
    text: "Booking Tools",
    arrow: "/dash/business/arrow-blue.svg",
  },
  {
    icon: "/dash/business/tools/5.svg",
    text: "CRETEMEET",
    subtitle: "(coming Soon)",
  },
  {
    icon: "/dash/business/tools/6.svg",
    text: "Remote Print  Request",
  },
  {
    icon: "/dash/business/tools/7.svg",
    text: "Team Access",
    arrow: "/dash/business/arrow-blue.svg",
  },
  {
    icon: "/dash/business/tools/8.svg",
    text: "CRETECAD Live  Support",
    arrow: "/dash/business/arrow-blue.svg",
  },
];

export const studentStats = [
  {
    title: "Active Tasks",
    value: "10 Total",
    subtitle: "3 In Progress, 1 Delivered",
    icon: "/dash/student/chat-bubble.svg",
  },
  {
    title: "School",
    value: "Unilag",
    icon: "/dash/student/school.svg",
    subtitle: "University of Lagos",
  },
  {
    title: "Cloud Library",
    value: "1GB / 2GB",
    icon: "/dash/student/cloud-file.svg",
    subtitle: "12 Books, 4 Templates",
  },
  {
    title: "Agent Chat",
    value: "Dominic",
    icon: "/dash/student/chat-bubble.svg",
    subtitle: "CRETECAD Agent Assigned",
  },
  {
    title: "Self-Services Used",
    value: "4",
    icon: "/dash/student/self-service.svg",
    subtitle: "4 this week",
  },
];

export const usage = [
  {
    icon: "/dash/business/task-complete.svg",
    text: "Tasks Completed",
    value: "1,200",
  },
  {
    icon: "/dash/business/files-upload.svg",
    text: "Files Uploaded",
    value: "1,370",
  },
  {
    icon: "/dash/business/agent.svg",
    text: "Hours of Agent Collaboration",
    value: "72 hours",
  },
];

// ------------------------------------- STUDENT ------------------------------------ //

export const taskFeed = [
  {
    icon: "/dash/recent/print.svg",
    title: "Assignment orders",
    subtitle: "Due in 2d 5h",
    status: "In Progress",
    progress: 65,
    progressBar: "/dash/recent/pro1.svg",
  },
  {
    icon: "/dash/recent/bro.svg",
    title: "Design jobs",
    subtitle: "Due in 6d 2h",
    status: "Assigned",
    progress: 23,
    progressBar: "/dash/recent/pro2.svg",
  },
  {
    icon: "/dash/business/update.svg",
    title: "Library Work",
    subtitle: "Delivered 2h ago",
    status: "New Task",
    progress: 0,
    progressBar: "/dash/recent/pro3.svg",
  },
  {
    icon: "/dash/business/bar-chart-blue.svg",
    title: "Edit requests",
    subtitle: "Due in 1w 2d",
    status: "Delivered",
    progress: 100,
    progressBar: "/dash/recent/pro4.svg",
  },
  {
    icon: "/dash/business/sm-flyer.svg",
    title: "File Conversions",
    subtitle: "Due in 3d 2h",
    status: "In Progress",
    progress: 45,
    progressBar: "/dash/recent/pro5.svg",
  },
];

export const selfServiceTools = [
  {
    icon: "/dash/student/tools/typing.svg",
    title: "Typing Tool",
    subtitle: "Paste text: convert to print-ready format",
  },
  {
    icon: "/dash/student/tools/file.svg",
    title: "File Conversion",
    subtitle: "PDF Word, Image to PDF",
  },
  {
    icon: "/dash/student/tools/printing.svg",
    title: "Remote Printing",
    subtitle: "Upload a file to print (school, hostel).",
  },
  {
    icon: "/dash/student/tools/graphic.svg",
    title: "Basic Graphic Design",
    subtitle: "Create simple posters, flyers, etc",
  },
  {
    icon: "/dash/student/tools/scan.svg",
    title: "Scan and Extract",
    subtitle: "Upload a photo/scan; extract text or edit",
  },
  {
    icon: "/dash/student/tools/format.svg",
    title: "Auto Format Tool",
    subtitle: "APA, MLA, Harvard citation formatting",
  },
];
