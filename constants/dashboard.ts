export const dashboardNav = [
  {
    name: "Dashboard",
    icon: "/dash/board.svg",
    route: "/dashboard",
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
