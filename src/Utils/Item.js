import {
  AiFillHeart,
  AiOutlineFieldTime,
  AiOutlineFileSearch,
  AiOutlineProfile,
} from "react-icons/ai";
import { BiBookAlt, BiCalculator } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { RxMagicWand } from "react-icons/rx";

export const iconMapping = {
  AiOutlineProfile: AiOutlineProfile,
  BsEmojiSmile: BsEmojiSmile,
  BiCalculator: BiCalculator,
  RxMagicWand: RxMagicWand,
  BiBookAlt: BiBookAlt,
  FaUserFriends: FaUserFriends,
  AiOutlineFieldTime: AiOutlineFieldTime,
  AiFillHeart: AiFillHeart,
  AiOutlineFileSearch: AiOutlineFileSearch,
};

export const HeaderItemsDropDown = [
  { id: 1, name: "Cơ hội việc làm", link: "/job" },
  { id: 2, name: "Công cụ", link: "/" },
  { id: 3, name: "Gói đăng tin miễn phí", link: "/" },
  { id: 4, name: "Nhà tuyển dụng", link: "/employer" },
];

export const HeaderItemsDropDownTools = [
  { name: "Trắc nghiệm tính cách", link: "/job", icon: "BsEmojiSmile" },
  { name: "Tính lương Gross sang Net", link: "/", icon: "BiCalculator" },
  { name: "Trang trí CV", link: "/", icon: "RxMagicWand" },
  { name: "Cẩm nang nghề nghiệp", link: "/employer", icon: "BiBookAlt" },
];
export const HeaderItemsDropDownRegion = [
  { name: "Miền Bắc", link: "/job" },
  { name: "Miền Nam", link: "/" },
];

export const HeaderItemsDropDownAuth = [
  { name: "Tài khoản", link: "/job" },
  { name: "Đăng xuất", link: "/" },
];
export const HeaderItemsDropDownProfile = [
  {
    content: "Quản lý tài khoản",
    title: [
      {
        icon: "FaUserFriends",
        name: "Tài khoản của bạn",
      },
    ],
  },
  {
    content: "Quản lý hồ sơ",
    title: [
      {
        icon: "AiOutlineProfile",
        name: "Hồ sơ của bạn",
      },
      {
        icon: "FaWandMagicSparkles",
        name: "Trang trí CV",
      },
    ],
  },
  {
    content: "Quản lý việc làm",
    title: [
      {
        icon: "AiOutlineFieldTime",
        name: "Việc làm đã ứng tuyển",
      },
      {
        icon: "AiFillHeart",
        name: "Việc làm đã lưu",
      },
      {
        icon: "AiOutlineFileSearch",
        name: "Thông báo việc làm",
      },
    ],
  },
  {
    content: "Nhà tuyển dụng bạn quan tâm",
    title: [
      {
        icon: "AiOutlineProfile",
        name: "Nhà tuyển dụng xem hồ sơ bạn",
      },
      {
        icon: "FaWandMagicSparkles",
        name: "Nhà tuyển dụng đang theo dõi",
      },
    ],
  },
  {
    content: "Hỗ trợ và thông báo",
    title: [
      { name: "Việc làm 24h thông báo", icon: "FaWandMagicSparkles" },
      {
        name: "Hướng dẫn sử dụng",
        icon: "FaWandMagicSparkles",
      },
      {
        name: "Cẩm nang nghề nghiệp",

        icon: "FaWandMagicSparkles",
      },
      {
        name: "Trắc nghiệm tính cách",

        icon: "FaWandMagicSparkles",
      },
    ],
  },
];

export const subHeaderItems = [
  {
    name: " Bán buôn - Bán lẻ - Quản lý cửa hàng",
    link: "/",
  },
  {
    name: "Kinh Doanh",
    link: "/",
  },
  {
    name: "Marketing",
    link: "/",
  },
  {
    name: "Khoa học - Kỹ thuật",
    link: "/",
  },
  {
    name: "Nghề nghiệp khác",
    link: "/",
  },
  {
    name: "Hành chính - Thư ký",
    link: "/",
  },
  {
    name: "Kế toán",
    link: "/",
  },
];

export const HandBookEmployer = [
  {
    uid: 1,
    content: "5 Bước để doanh nghiệp phát triển chiến lược nội dung nhân sự",
    url: "/",
  },
  {
    uid: 2,
    content: "5 Điều các doanh nghiệp thành công làm để giữ chân nhân tài",
    url: "/",
  },
  {
    uid: 3,
    content: "5 Kỹ năng cần có để trở thành một nhà quản lý thành công",
    url: "/",
  },
  {
    uid: 4,
    content:
      "Bạn đã biết cách phỏng vấn qua điện thoại để sàng lọc ứng viên hiệu quả?",
    url: "/",
  },
  {
    uid: 5,
    content: "8 Kỹ năng giúp nhà quản lý tuyển dụng đúng người tài",
    url: "/",
  },
];

export const HandBookService = [
  {
    uid: 1,
    title: "Tôi có thể dùng hình thức gì để thanh toán?",
    content:
      "Để thuận tiện sử dụng dịch vụ trong thời gian nhanh nhất, Quý khách vui lòng thanh toán cho Việc Làm 24h thông qua chuyển khoản ngân hàng.",
  },
  {
    uid: 2,
    title:
      "Tôi mua đơn hàng có giá trị lớn thì sẽ được nhận ưu đãi như thế nào?",
    content:
      "Đối với những đơn hàng có giá trị lớn, Việc Làm 24h đang áp dụng nhiều mức ưu đãi hấp dẫn cho Quý khách đăng ký dịch vụ. Để nhận được các thông tin chi tiết nhất, Quý khách vui lòng để lại thông tin liên hệ .",
  },
  {
    uid: 3,
    title: "Tôi đăng ký có được hỗ trợ sử dụng ngay không?",
    content:
      "Chúng tôi sẽ xử lý dịch vụ cho Quý khách trong thời gian chậm nhất 30 phút theo giờ hành chính. Trong trường hợp ngoài giờ hành chính, chúng tôi sẽ liên hệ lại với Quý khách vào sáng hôm sau.",
  },
  {
    uid: 4,
    title: "Hạn sử dụng các dịch vụ trên trong bao lâu?",
    content:
      "Tùy theo gói dịch vụ sẽ có các thời hạn tương ứng. Thời hạn của gói dịch vụ được thể hiện trên bảng giá online.",
  },
  {
    uid: 5,
    title: "Tôi cần tư vấn hoặc đăng ký dịch vụ thì liên hệ thông tin nào?",
    content:
      "Liên hệ trực tiếp hotline qua đầu số: Miền Nam: (028) 7108 2424 - Miền Bắc: (024) 7308 2424 để được tư vấn.",
  },
];

export const BrickSize = [
  { id: 1, name: "15x90" },
  { id: 2, name: "50x50" },
  { id: 3, name: "60x60" },
  { id: 4, name: "80x80" },
  { id: 5, name: "60x120" },
];

export const BrickType = [
  { id: 1, name: "GC" },
  { id: 2, name: "GK" },
  { id: 3, name: "Matt" },
  { id: 4, name: "Polished" },
];

export const Jobs = [
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
  {
    vacancies: " Supply Chain & General Services",
    company: " Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam",
    image:
      "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg",
    location: "TP.HCM",
    salary: "10 - 20",
  },
];
