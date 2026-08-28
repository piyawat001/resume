export type Lang = 'th' | 'en';

export type Project = {
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

export type Resume = {
  localeName: string;
  name: string;
  headline: string;
  contact: {
    phone: string;
    email: string;
    github: string;
    gitlab: string;
    age: string;
  };
  labels: {
    summary: string;
    skills: string;
    experience: string;
    freelance: string;
    freelanceNote: string;
    projects: string;
    projectsNote: string;
    academic: string;
    academicNote: string;
    personal: string;
    personalNote: string;
    education: string;
    tech: string;
    print: string;
    language: string;
  };
  summary: string;
  skills: { label: string; items: string[] }[];
  experience: { role: string; company: string; period: string; bullets: string[] }[];
  freelanceProjects: Project[];
  projects: Project[];
  academicProjects: Project[];
  personalProjects: { title: string; summary: string; url: string }[];
  education: { degree: string; school: string; detail: string; year: string };
};

const personalProjectsTh = [
  {
    title: 'Translate AI',
    summary: 'เว็บแปลภาษา ต่อกับบริการ AI ผ่าน API',
    url: 'https://translate-ai-mu.vercel.app',
  },
  {
    title: 'EV Map',
    summary: 'แผนที่สำหรับหาสถานีชาร์จรถ EV ใกล้ตัว',
    url: 'https://ev-map-chi.vercel.app',
  },
  {
    title: 'EV Calculator',
    summary: 'เครื่องคำนวณค่าชาร์จและค่าใช้จ่ายในการใช้รถ EV',
    url: 'https://ev-calculator-ruddy.vercel.app',
  },
];

const personalProjectsEn = [
  {
    title: 'Translate AI',
    summary: 'A translation tool on the web, wired up to an AI service through its API',
    url: 'https://translate-ai-mu.vercel.app',
  },
  {
    title: 'EV Map',
    summary: 'A map for finding EV charging stations nearby',
    url: 'https://ev-map-chi.vercel.app',
  },
  {
    title: 'EV Calculator',
    summary: 'A calculator for EV charging costs and day-to-day running expenses',
    url: 'https://ev-calculator-ruddy.vercel.app',
  },
];

export const resume: Record<Lang, Resume> = {
  th: {
    localeName: 'TH',
    name: 'ปิยวัตร พิมพ์ศรี',
    headline: 'Backend Developer · Software Developer · Full Stack Developer',
    contact: {
      phone: '061 121 6405',
      email: 'piyawatmot@gmail.com',
      github: 'github.com/piyawat001',
      gitlab: 'gitlab.com/piyawat001',
      age: 'อายุ 28 ปี',
    },
    labels: {
      summary: 'สรุปโดยย่อ',
      skills: 'ทักษะทางเทคนิค',
      experience: 'ประสบการณ์ทำงาน',
      freelance: 'งานนอก / ก่อนเข้า INET',
      freelanceNote: 'AI dental project',
      projects: 'ผลงานที่เลือกนำเสนอ',
      projectsNote: 'โปรเจกต์ภายในองค์กร ไม่เปิดเผยลิงก์',
      academic: 'โปรเจกต์จบ',
      academicNote: 'Senior project',
      personal: 'โปรเจกต์ส่วนตัว',
      personalNote: 'ทำเองและ deploy บน Vercel',
      education: 'การศึกษา',
      tech: 'เทคโนโลยี',
      print: 'พิมพ์ / บันทึก PDF',
      language: 'สลับภาษา',
    },
    summary:
      'Software Developer ที่บริษัท อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน) (INET) พัฒนาระบบงานองค์กรทั้งฝั่ง Backend และ Frontend ถนัดงาน Backend เป็นหลัก: ออกแบบและพัฒนา REST API ด้วย Go และ Node.js/Express ร่วมกับ PostgreSQL และ MongoDB มีประสบการณ์ตรงด้านระบบรายงานและการสร้างเอกสารอัตโนมัติ (PDF, DOCX, PPTX, Excel) การรวมข้อมูลสำหรับ Dashboard Server-side pagination/filtering และ Workflow การประเมิน-อนุมัติ พร้อมทำงานฝั่ง Frontend ได้ทั้ง React, Angular และ Vue.js',
    skills: [
      {
        label: 'Backend',
        items: ['Go', 'Node.js', 'Express.js', 'PHP', 'Python (script สร้างเอกสาร)', 'REST API', 'Authentication/Login', 'Role & Permission Logic', 'JWT', 'WordPress/WooCommerce Plugin', 'Report Generation', 'Export PDF/DOCX/PPTX/Excel'],
      },
      {
        label: 'Frontend',
        items: ['React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'API Integration', 'Pagination', 'Filtering', 'PDF Preview/Download UI'],
      },
      {
        label: 'AI & Computer Vision',
        items: ['YOLOv8', 'OpenCV', 'Image Processing', 'Classification Model Training', 'Inception', 'VGG', 'ResNet', 'RegNet', 'Model Comparison', 'ROC/Confusion Matrix'],
      },
      {
        label: 'Database & Data',
        items: ['PostgreSQL', 'MongoDB', 'Repository/Service pattern', 'Data Aggregation', 'Data Migration', 'Server-side Filtering', 'Server-side Pagination'],
      },
      {
        label: 'DevOps & Tools',
        items: ['Docker', 'Docker Compose', 'GitLab CI/CD', 'Nginx', 'Git', 'GitLab', 'Postman/Bruno', 'Swagger/API Documentation'],
      },
    ],
    experience: [
      {
        role: 'Software Developer',
        company: 'บริษัท อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน) (INET)',
        period: 'พ.ค. 2024 - ปัจจุบัน',
        bullets: [
          'พัฒนาและดูแล REST API สำหรับระบบรายงาน ข้อมูล Dashboard การจัดการองค์กร/สมาชิก แบบประเมิน สถานะคะแนน Workflow อนุมัติ-ปฏิเสธ และการส่งออกไฟล์',
          'พัฒนาระบบสร้างเอกสารและรายงานอัตโนมัติในรูปแบบ PDF, DOCX, PPTX และ Excel ด้วย Go, Node.js และ Python script รวมถึงการแทนค่า placeholder การฝังรูปภาพ และการจัดรูปแบบตาราง/หัวท้ายเอกสาร',
          'ปรับปรุง Logic การประมวลผลข้อมูลฝั่ง Backend ได้แก่ Dynamic filter, การรวมค่าการปล่อยก๊าซตาม facility/scope/activity group, การเปลี่ยนสถานะคะแนนประเมิน และการจัดรูปแบบวันที่แบบไทย',
          'พัฒนา Server-side pagination และ Filtering สำหรับรายการผลิตภัณฑ์ พื้นที่ สมาชิก และรายงาน พร้อมจัดทำ Postman collection เพื่อทดสอบ',
          'พัฒนา Logic ด้าน Authentication, Role และ Permission รวมถึงสิทธิ์ผู้ดูแลระดับองค์กร การมองเห็นข้อมูลตามบทบาท (SQA / non-SQA) และการเชื่อมต่อ OneID',
          'พัฒนาหน้าจอ Frontend และการเชื่อมต่อ API ด้วย React, Angular และ Vue.js สำหรับระบบแจ้งเตือน Dashboard รายการรายงาน การ Preview/Download เอกสาร และการตั้งค่าสิทธิ์',
          'ช่วงเริ่มงานปี 2024 พัฒนา WordPress/WooCommerce payment gateway plugin สำหรับเชื่อมต่อระบบชำระเงิน New Cashier ด้วย PHP และ JWT',
        ],
      },
    ],
    freelanceProjects: [
      {
        title: 'AI Dental Diagnosis Platform — Freelance / Pre-INET Project',
        period: 'ก่อน พ.ค. 2024',
        summary: 'เว็บแอปพลิเคชัน AI ทันตกรรมสำหรับคณะทันตแพทยศาสตร์ มหาวิทยาลัยขอนแก่น รองรับการอัปโหลดภาพรังสี Panoramic Radiographs (OPG), ประมวลผลด้วย AI service, แสดงผลวินิจฉัย/คะแนนความเชื่อมั่น และให้ผู้ใช้ดูประวัติผลลัพธ์ย้อนหลัง',
        bullets: [
          'สร้างและทดลองโมเดล classification เอง โดยเปรียบเทียบสถาปัตยกรรม YOLO, Inception, VGG, ResNet และ RegNet เพื่อเลือกแนวทางที่เหมาะกับการจำแนกภาพทางทันตกรรม',
          'ใช้ YOLOv8 สำหรับงาน detection/segmentation เพื่อจับบริเวณรอยโรคตามขอบ lesion บนภาพ OPG และส่งผลลัพธ์ให้ระบบเว็บแสดงเปรียบเทียบกับภาพต้นฉบับ',
          'พัฒนา AI workflow แบบแยก web server และ AI service API server เพื่อแยก business logic ออกจากงานประมวลผล AI ที่ใช้ทรัพยากรสูง',
          'พัฒนาหน้าผู้ใช้สำหรับ upload/preview ภาพ, consent flow, single/split result view, confidence score, ROC/Confusion Matrix และประวัติการประมวลผล',
          'พัฒนาฟีเจอร์จัดการระบบ เช่น user approval, package/usage limit, knowledge/FAQ content, expert consultation และ admin dashboard',
        ],
        tech: ['YOLOv8', 'OpenCV', 'Python', 'Inception', 'VGG', 'ResNet', 'RegNet', 'Image Classification', 'Detection/Segmentation', 'Vue.js', 'Go', 'REST API'],
      },
    ],
    projects: [
      {
        title: 'Carbon Footprint of Products (CFP) — Backend & Frontend',
        period: 'มิ.ย. 2026 - ส.ค. 2026',
        summary: 'ระบบจัดการคาร์บอนฟุตพริ้นท์ของผลิตภัณฑ์ ใช้บันทึกข้อมูลผลิตภัณฑ์ องค์กร ข้อมูลรอบชีวิตผลิตภัณฑ์ นำเข้าข้อมูลปีฐาน คำนวณและจัดทำรายงาน CFP พร้อม preview/download เอกสาร',
        bullets: [
          'พัฒนา API จัดการผลิตภัณฑ์และรายงาน รวมถึง product filter ฝั่งเซิร์ฟเวอร์ การเปลี่ยน scope ของรายงาน/ผลิตภัณฑ์ soft delete รายงาน สิทธิ์ผู้ดูแลระดับองค์กร และโควตาจำนวนผลิตภัณฑ์ต่อองค์กร',
          'พัฒนาระบบออกรายงานเป็นไฟล์ Excel, Word, PDF และ PowerPoint โดยดึงข้อมูลผลิตภัณฑ์จริงและใส่รูปภาพให้อัตโนมัติ พร้อมหน้าดูตัวอย่างก่อนดาวน์โหลดผลิตภัณฑ์',
          'ทำ Server-side pagination สำหรับรายการผลิตภัณฑ์ พื้นที่ และสมาชิก และปรับปรุงการนำเข้าข้อมูลปีฐานจาก Excel ให้รองรับไฟล์ `.xls`',
          'พัฒนาหน้าจอ Angular สำหรับรายการรายงาน/ผลิตภัณฑ์แบบแบ่งหน้า การ preview/download รายงาน การตั้งค่าสิทธิ์ผลิตภัณฑ์ และแก้ปัญหา PDF.js worker',
        ],
        tech: ['Go', 'Python', 'Angular', 'TypeScript', 'PostgreSQL', 'REST API', 'Excel/PDF/PPTX Generation', 'Postman', 'Docker', 'Nginx', 'GitLab CI'],
      },
      {
        title: 'Carbon Footprint for Organization (CFO) — Backend & Frontend',
        period: 'ม.ค. 2026 - ก.ค. 2026',
        summary: 'ระบบจัดการคาร์บอนฟุตพริ้นท์ระดับองค์กร ใช้บันทึกและจัดการข้อมูลการปล่อยก๊าซเรือนกระจกของ องค์กร/โรงงาน แยกตาม facility, emission source, scope และ activity group พร้อม Dashboard และรายงานมาตรฐาน ISO/TGO',
        bullets: [
          'พัฒนาระบบแจ้งเตือนการปิดปรับปรุงระบบทั้ง Backend และ Frontend ได้แก่ API แจ้งเตือนล่าสุด การจัดการสถานะปิด การตรวจสอบประกาศย้อนหลัง การแจ้งเตือนแบบเรียลไทม์ Notification panel, Login modal และหน้าจอผู้ดูแล',
          'พัฒนาและปรับประสิทธิภาพ API ของ Partner dashboard รองรับการรายงานหลายพาร์ทเนอร์ Filter ตาม activity group และ source การรวมค่าการปล่อยก๊าซตาม facility และการแสดงค่าทศนิยมละเอียด',
          'พัฒนาระบบออกรายงาน ISO/TGO เป็น DOCX/PDF/PPTX รวมถึงการแทนค่า placeholder การจัดการรูปภาพ การจัดรูปแบบตาราง หัว-ท้ายเอกสาร และข้อความรายงานภาษาไทย',
          'ปรับปรุง API ด้านองค์กรและสมาชิก ได้แก่ pagination สมาชิกภาคอุตสาหกรรม การกรองสมาชิก การ refresh ข้อมูลสมาชิกจาก OneID การระบุ role และ response ของ OAuth',
        ],
        tech: ['Go', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'REST API', 'DOCX/PDF/PPTX Generation', 'OAuth', 'OneID', 'Docker', 'GitLab CI'],
      },
      {
        title: 'CSAT 2.0 — Survey Backend & Report Service',
        period: 'พ.ย. 2025 - ม.ค. 2026',
        summary: 'ระบบสำรวจความพึงพอใจของลูกค้า ใช้สร้างและจัดการแบบประเมิน เก็บคะแนน รองรับ workflow การขอปรับสถานะโดย SQA และส่งออกผลประเมินเป็นรายงาน Excel',
        bullets: [
          'พัฒนา API คะแนนประเมินครบวงจร ทั้งรายการ รายละเอียด รายละเอียดแบบกลุ่ม การแก้ไขรายตัวและแบบกลุ่ม การยกเลิก และ workflow อนุมัติ-ปฏิเสธโดย SQA',
          'ออกแบบฟิลด์และขั้นตอนของคำขอปรับปรุงผลประเมิน ได้แก่ SQA remark เวลาที่ขอ/อนุมัติ การบันทึกบัญชีผู้ดูแล/SQA ขั้นของการปรับปรุง และสถานะการประเมิน',
          'ปรับปรุง Logic ข้อมูลคะแนน ได้แก่ การ migrate คะแนนรวม การแสดงคะแนนทศนิยม 2 ตำแหน่ง การค้นหาแบบ dynamic regex และการรองรับ request แบบ batch',
          'พัฒนา Report Service ส่งออก Excel ได้แก่ คอลัมน์ข้อมูลประชากรแบบไดนามิก การ map ชื่อบริการ ชีท definition เส้นขอบตาราง และการจัดรูปแบบวันที่-เวลาแบบพุทธศักราช',
        ],
        tech: ['Go', 'Vue.js', 'TypeScript', 'MongoDB', 'REST API', 'Excel Export', 'Role/Permission Logic', 'Report Service Integration'],
      },
      {
        title: 'Intern Evaluation Platform — Backend',
        period: 'ก.พ. 2025 - ต.ค. 2025',
        summary: 'ระบบประเมินแพทย์เพิ่มพูนทักษะ/นักศึกษาแพทย์ ใช้จัดการตารางฝึกงาน แบบประเมินหลายประเภท การมอบหมายผู้ประเมิน การส่งคำร้อง การอนุมัติ/ปฏิเสธ การคำนวณผล และการสร้างเอกสาร PDF ของแบบฟอร์มประเมิน',
        bullets: [
          'พัฒนา API สำหรับ workflow การประเมิน ได้แก่ Dashboard และรายการของอาจารย์ รายละเอียดตารางฝึกงาน การคำนวณเปอร์เซ็นต์การลา และการส่ง-อนุมัติ-ปฏิเสธคำร้องของนักศึกษา',
          'พัฒนา Logic การสร้างและตอบแบบประเมินหลายรูปแบบ ได้แก่ EPA, DOPS, MFS, DHPR, Basic Evaluation, Summary Evaluation, Final Summary และแบบประเมินโรงพยาบาลชุมชน',
          'พัฒนาระบบสร้างและดาวน์โหลด PDF จากเทมเพลต HTML ทั้งไฟล์เปล่าและไฟล์ที่กรอกข้อมูลแล้ว การดาวน์โหลดไฟล์เดี่ยว การจัดตำแหน่งลายเซ็น และการเชื่อมต่ออัปโหลด/ดาวน์โหลดกับ One Box',
          'เพิ่มการนำเข้า/ส่งออกและการตรวจสอบข้อมูล ได้แก่ การตรวจสอบไฟล์ Excel ที่นำเข้า การนำเข้าข้อมูลนักศึกษา/อาจารย์ การตรวจชนิดไฟล์ PNG/JPG/JPEG/PDF และการส่งออก Excel',
        ],
        tech: ['Node.js', 'Express.js', 'JavaScript', 'HTML Template', 'PDF Generation', 'Excel Import/Export', 'MongoDB/Mongoose', 'One Box Integration', 'Docker', 'GitLab CI'],
      },
      {
        title: 'New Cashier Payment Gateway — WordPress/WooCommerce Plugin (Early Work)',
        period: 'ช่วงเริ่มงาน 2024',
        summary: 'ปลั๊กอินชำระเงินสำหรับ WordPress/WooCommerce ใช้เชื่อมต่อระบบ New Cashier เพื่อส่งผู้ใช้จากหน้า checkout ไปยังระบบชำระเงินและรับผล callback กลับมาอัปเดตคำสั่งซื้อ',
        bullets: [
          'พัฒนา WooCommerce payment gateway plugin ด้วย PHP พร้อมหน้าตั้งค่า enable/disable, test mode, debug mode, title, description และ merchant key',
          'สร้าง JWT payload จากข้อมูลคำสั่งซื้อและข้อมูลลูกค้า แล้ว redirect ผู้ใช้ไปยัง New Cashier checkout ตามโหมดทดสอบหรือใช้งานจริง',
          'พัฒนา callback endpoint สำหรับรับผลการชำระเงิน ตรวจข้อมูล response และอัปเดตสถานะ order เป็นสำเร็จ ล้มเหลว หรือรอตรวจสอบตาม response code',
          'เพิ่ม debug logging ผ่าน WooCommerce logger และไฟล์ log รายวันสำหรับช่วยตรวจสอบ payment flow',
        ],
        tech: ['PHP', 'WordPress', 'WooCommerce', 'Payment Gateway Plugin', 'JWT', 'Callback API', 'Composer'],
      },
    ],
    academicProjects: [
      {
        title: 'Intelligent Sidewalk Surveillance & Motorcycle License Plate Spotter',
        period: 'Senior Project',
        summary: 'ระบบเฝ้าระวังการขับขี่รถจักรยานยนต์บนทางเท้าและตรวจจับป้ายทะเบียน ใช้ประมวลผลภาพเพื่อตรวจจับรถจักรยานยนต์ พื้นที่ทางเท้า และข้อมูลป้ายทะเบียนสำหรับงานควบคุมและบังคับใช้กฎจราจร',
        bullets: [
          'พัฒนาระบบตรวจจับด้วย YOLOv8 และ OpenCV สำหรับวิเคราะห์ภาพและตรวจจับเหตุการณ์รถจักรยานยนต์ที่ขับขี่บนทางเท้า',
          'สร้าง workflow สำหรับตรวจจับป้ายทะเบียนและจัดเก็บข้อมูลประวัติ เช่น วันที่ สถานที่ รูปภาพ และตัวอักษรป้ายทะเบียน',
          'พัฒนาเว็บแอปสำหรับเรียกดูข้อมูลย้อนหลังและตรวจสอบหลักฐานจากภาพที่ระบบบันทึกไว้',
          'พัฒนาโปรแกรมกำหนดพื้นที่ตรวจจับ เพื่อให้ผู้ใช้ระบุบริเวณที่ต้องการเฝ้าระวังได้ตามพื้นที่จริง',
        ],
        tech: ['YOLOv8', 'OpenCV', 'Python', 'Image Processing', 'License Plate Detection', 'SQLite', 'Web Application'],
      },
    ],
    personalProjects: personalProjectsTh,
    education: {
      degree: 'วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์)',
      school: 'วิทยาลัยการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น',
      detail: 'สำเร็จการศึกษา พ.ศ. 2567 (พฤษภาคม 2024) · GPAX 2.90 · ผ่านการทดสอบ KKU English Proficiency Test (2022)',
      year: '2024',
    },
  },
  en: {
    localeName: 'EN',
    name: 'Piyawat Phimsri',
    headline: 'Software Developer · Backend Developer · Full Stack Developer',
    contact: {
      phone: '061 121 6405',
      email: 'piyawatmot@gmail.com',
      github: 'github.com/piyawat001',
      gitlab: 'gitlab.com/piyawat001',
      age: 'Age 28',
    },
    labels: {
      summary: 'Professional Summary',
      skills: 'Technical Skills',
      experience: 'Work Experience',
      freelance: 'Freelance / Pre-INET Project',
      freelanceNote: 'AI dental project',
      projects: 'Selected Projects',
      projectsNote: 'Internal company projects - URLs not disclosed.',
      academic: 'Graduation Project',
      academicNote: 'Senior project',
      personal: 'Personal Projects',
      personalNote: 'Side projects built and deployed on Vercel',
      education: 'Education',
      tech: 'Technologies',
      print: 'Print / Save PDF',
      language: 'Switch language',
    },
    summary:
      'Software Developer at Internet Thailand Public Company Limited (INET), building enterprise systems across backend and frontend. Backend-focused: design and development of REST APIs in Go and Node.js/Express with PostgreSQL and MongoDB. Hands-on experience in reporting and automated document generation (PDF, DOCX, PPTX, Excel), dashboard data aggregation, server-side pagination and filtering, and evaluation/approval workflow logic, with working frontend delivery in React, Angular, and Vue.js.',
    skills: [
      {
        label: 'Backend',
        items: ['Go', 'Node.js', 'Express.js', 'PHP', 'Python (document scripts)', 'REST API', 'Authentication/Login', 'Role & Permission Logic', 'JWT', 'WordPress/WooCommerce Plugin', 'Report Generation', 'PDF/DOCX/PPTX/Excel Export'],
      },
      {
        label: 'Frontend',
        items: ['React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'API Integration', 'Pagination', 'Filtering', 'PDF Preview/Download UI'],
      },
      {
        label: 'AI & Computer Vision',
        items: ['YOLOv8', 'OpenCV', 'Image Processing', 'Classification Model Training', 'Inception', 'VGG', 'ResNet', 'RegNet', 'Model Comparison', 'ROC/Confusion Matrix'],
      },
      {
        label: 'Database & Data',
        items: ['PostgreSQL', 'MongoDB', 'Repository/Service pattern', 'Data Aggregation', 'Data Migration', 'Server-side Filtering', 'Server-side Pagination'],
      },
      {
        label: 'DevOps & Tools',
        items: ['Docker', 'Docker Compose', 'GitLab CI/CD', 'Nginx', 'Git', 'GitLab', 'Postman/Bruno', 'Swagger/API Documentation'],
      },
    ],
    experience: [
      {
        role: 'Software Developer',
        company: 'Internet Thailand Public Company Limited (INET)',
        period: 'May 2024 - Present',
        bullets: [
          'Built and maintained REST APIs for reporting, dashboard data, organization and member management, evaluation forms, score state workflows, approval/rejection flows, and file export features.',
          'Developed automated document and report generation in PDF, DOCX, PPTX, and Excel using Go, Node.js, and Python scripts, including placeholder replacement, image embedding, and table/header-footer formatting.',
          'Improved backend data logic, including dynamic filters, grouped emission aggregation by facility/scope/activity group, evaluation score state transitions, and Thai date formatting.',
          'Implemented server-side pagination and filtering for product, area, member, and report lists, with Postman collections for verification.',
          'Developed authentication, role, and permission logic, including organization-level admin rights, SQA / non-SQA data visibility rules, and OneID integration.',
          'Delivered frontend screens and API integrations in React, Angular, and Vue.js for notifications, dashboards, report lists, report preview/download, and permission settings.',
          'In early 2024, developed a WordPress/WooCommerce payment gateway plugin for New Cashier integration using PHP and JWT.',
        ],
      },
    ],
    freelanceProjects: [
      {
        title: 'AI Dental Diagnosis Platform — Freelance / Pre-INET Project',
        period: 'Before May 2024',
        summary: 'An AI dental web application for the Faculty of Dentistry, Khon Kaen University, supporting Panoramic Radiographs (OPG) upload, AI service processing, diagnosis result display, confidence scores, and historical result review.',
        bullets: [
          'Built and experimented with custom classification models, comparing YOLO, Inception, VGG, ResNet, and RegNet architectures for dental image classification.',
          'Used YOLOv8 for detection/segmentation to identify lesion regions around disease boundaries on OPG images and return processed outputs for web-based comparison.',
          'Designed an AI workflow with separated web server and AI service API server responsibilities to isolate business logic from resource-heavy AI processing.',
          'Developed user workflows for image upload/preview, consent, single/split result views, confidence scores, ROC/Confusion Matrix display, and processing history.',
          'Built system management features including user approval, package/usage limits, knowledge/FAQ content, expert consultation, and admin dashboard screens.',
        ],
        tech: ['YOLOv8', 'OpenCV', 'Python', 'Inception', 'VGG', 'ResNet', 'RegNet', 'Image Classification', 'Detection/Segmentation', 'Vue.js', 'Go', 'REST API'],
      },
    ],
    projects: [
      {
        title: 'Carbon Footprint of Products (CFP) — Backend & Frontend',
        period: 'Jun 2026 - Aug 2026',
        summary: 'A product carbon footprint management system for recording product and organization data, product lifecycle data, base-year data import, CFP calculation and report generation, and report preview/download.',
        bullets: [
          'Developed product and report management APIs, including server-side product filters, report/product scope changes, report soft delete, organization-based admin permission logic, and per-organization product quotas.',
          'Built CFP report generation: Excel reports, PDF preview, Word/PDF report templates, and PowerPoint reports populated with real product data and embedded product images.',
          'Implemented server-side pagination for product, area, and member lists, and improved the base-year Excel import workflow with `.xls` support.',
          'Developed Angular screens for paginated report/product lists, report preview/download, product permission settings, and fixed the PDF.js worker issue.',
        ],
        tech: ['Go', 'Python', 'Angular', 'TypeScript', 'PostgreSQL', 'REST API', 'Excel/PDF/PPTX generation', 'Postman', 'Docker', 'Nginx', 'GitLab CI'],
      },
      {
        title: 'Carbon Footprint for Organization (CFO) — Backend & Frontend',
        period: 'Jan 2026 - Jul 2026',
        summary: 'An organization-level carbon footprint system for recording and managing greenhouse gas emissions across facilities, emission sources, scopes, and activity groups, with dashboards and ISO/TGO standard reports.',
        bullets: [
          'Developed maintenance notification features across backend and frontend: latest-notification API, close-status handling, backdated notice validation, real-time notification behavior, notification panel, login modal, and admin UI.',
          'Built and optimized partner dashboard APIs supporting multi-partner reporting, activity group and source filters, grouped facility emissions, and small-emission precision display.',
          'Developed ISO/TGO report export in DOCX/PDF/PPTX, including placeholder replacement, image handling, table formatting, header/footer layout, and Thai report text formatting.',
          'Improved organization and member APIs, including industrial member pagination, member filtering, OneID business member refresh, role resolution, and OAuth response fields.',
        ],
        tech: ['Go', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'REST API', 'DOCX/PDF/PPTX generation', 'OAuth', 'OneID', 'Docker', 'GitLab CI'],
      },
      {
        title: 'CSAT 2.0 — Survey Backend & Report Service',
        period: 'Nov 2025 - Jan 2026',
        summary: 'A customer satisfaction survey system for creating and managing assessments, storing evaluation scores, supporting SQA status-adjustment workflows, and exporting results as Excel reports.',
        bullets: [
          'Developed evaluation score APIs for list, detail, batch detail, single and batch updates, cancellation, and SQA approval/rejection workflows.',
          'Designed improvement-request workflow fields, including SQA remark, request/approve timestamps, admin and SQA account tracking, improvement stage, and evaluation status.',
          'Improved score data logic: total score migration, two-decimal score formatting, dynamic search regex, and batch request body support.',
          'Built Excel export formatting in the report service: dynamic demographic columns, service name mapping, definition sheet, table borders, and Thai Buddhist-era date/time formatting.',
        ],
        tech: ['Go', 'Vue.js', 'TypeScript', 'MongoDB', 'REST API', 'Excel export', 'role/permission logic', 'report service integration'],
      },
      {
        title: 'Intern Evaluation Platform — Backend',
        period: 'Feb 2025 - Oct 2025',
        summary: 'A medical internship evaluation platform managing internship schedules, multiple evaluation form types, evaluator assignment, request submission, approval/rejection, result calculation, and PDF document generation for evaluation forms.',
        bullets: [
          'Developed backend APIs for internship evaluation workflows, including professor dashboard and list APIs, intern schedule details, leave percentage calculation, and intern request approval/rejection flows.',
          'Built evaluation form creation and response logic for EPA, DOPS, MFS, DHPR, Basic Evaluation, Summary Evaluation, Final Summary, and community hospital forms.',
          'Implemented PDF generation and download from HTML templates, including blank and filled PDFs, single-file download, signature positioning, and One Box upload/download integration.',
          'Added import/export and validation improvements: Excel import validation, intern/professor import handling, PNG/JPG/JPEG/PDF file type validation, and Excel export.',
        ],
        tech: ['Node.js', 'Express.js', 'JavaScript', 'HTML templates', 'PDF generation', 'Excel import/export', 'MongoDB/Mongoose', 'One Box integration', 'Docker', 'GitLab CI'],
      },
      {
        title: 'New Cashier Payment Gateway — WordPress/WooCommerce Plugin (Early Work)',
        period: 'Early 2024',
        summary: 'A WordPress/WooCommerce payment gateway plugin for integrating New Cashier checkout, redirecting customers to payment, receiving callbacks, and updating WooCommerce order status.',
        bullets: [
          'Developed a WooCommerce payment gateway plugin in PHP with admin settings for enable/disable, test mode, debug mode, title, description, and merchant key.',
          'Created JWT payloads from order and customer data, then redirected users to New Cashier checkout based on sandbox or production mode.',
          'Built a callback endpoint to receive payment responses, validate response data, and update orders as paid, failed, or on-hold based on response code.',
          'Added debug logging through WooCommerce logger and daily log files to support payment flow troubleshooting.',
        ],
        tech: ['PHP', 'WordPress', 'WooCommerce', 'Payment Gateway Plugin', 'JWT', 'Callback API', 'Composer'],
      },
    ],
    academicProjects: [
      {
        title: 'Intelligent Sidewalk Surveillance & Motorcycle License Plate Spotter',
        period: 'Senior Project',
        summary: 'An intelligent sidewalk surveillance system for monitoring motorcycles riding on sidewalks and spotting motorcycle license plates for traffic control and enforcement workflows.',
        bullets: [
          'Built image-processing and detection workflows with YOLOv8 and OpenCV to identify motorcycles and sidewalk-riding events.',
          'Implemented license plate detection and historical data storage for date, location, evidence image, and license plate characters.',
          'Developed a web application for users to review recorded historical detection data and supporting images.',
          'Built an area configuration program that lets users define detection zones for the surveillance workflow.',
        ],
        tech: ['YOLOv8', 'OpenCV', 'Python', 'Image Processing', 'License Plate Detection', 'SQLite', 'Web Application'],
      },
    ],
    personalProjects: personalProjectsEn,
    education: {
      degree: 'Bachelor of Science (Computer Science)',
      school: 'College of Computing, Khon Kaen University',
      detail: 'Graduated May 2024 · GPAX 2.90 · KKU English Proficiency Test (completed 2022)',
      year: '2024',
    },
  },
};
