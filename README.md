# Weather App - Angular 21

Ứng dụng tra cứu thời tiết đơn giản được xây dựng bằng Angular 21, sử dụng OpenWeatherMap API để hiển thị thông tin thời tiết theo thành phố.

## 📋 Tính năng

- ✅ Tìm kiếm thời tiết theo tên thành phố
- ✅ Hiển thị nhiệt độ (Celsius)
- ✅ Hiển thị độ ẩm
- ✅ Hiển thị mô tả thời tiết
- ✅ Icon emoji theo điều kiện thời tiết
- ✅ Giao diện responsive và thân thiện
- ✅ Xử lý lỗi khi không tìm thấy thành phố

## 🛠️ Công nghệ sử dụng

- **Angular 21** - Framework chính
- **TypeScript** - Ngôn ngữ lập trình
- **RxJS** - Xử lý bất đồng bộ
- **OpenWeatherMap API** - API dữ liệu thời tiết
- **Standalone Components** - Kiến trúc mới của Angular
- **Zone.js** - Change detection

## 📦 Cài đặt

### Yêu cầu hệ thống

- Node.js >= 18.x
- npm >= 9.x
- Angular CLI 21.x

### Các bước cài đặt

1. **Clone repository**
```bash
git clone <repository-url>
cd weather-app
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Cấu hình API Key**

Mở file `src/app/services/weather.service.ts` và thay thế API key của bạn:

```typescript
private apiKey = 'YOUR_API_KEY_HERE';
```

Để lấy API key miễn phí:
- Truy cập [OpenWeatherMap](https://openweathermap.org/api)
- Đăng ký tài khoản
- Tạo API key mới

4. **Chạy ứng dụng**
```bash
ng serve
```

Truy cập `http://localhost:4200` trên trình duyệt.

## 📁 Cấu trúc thư mục

```
weather-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── weather/
│   │   │       ├── weather.component.ts
│   │   │       ├── weather.component.html
│   │   │       └── weather.component.css
│   │   ├── services/
│   │   │   └── weather.service.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── main.ts
│   ├── styles.css
│   └── index.html
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Giao diện

Ứng dụng có giao diện gradient đẹp mắt với:
- Màu nền gradient từ xanh dương đến vàng
- Form nhập liệu với input và button lớn
- Card hiển thị thông tin thời tiết
- Emoji động theo điều kiện thời tiết
- Responsive trên mọi thiết bị

## 🔧 Cấu hình Angular 21

### Standalone Components

Ứng dụng sử dụng kiến trúc standalone components (không cần NgModule):

```typescript
@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
```

### Providers Configuration

File `app.config.ts` cấu hình providers:

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

## 📖 Cách sử dụng

1. Nhập tên thành phố vào ô input (ví dụ: "Hanoi", "Ho Chi Minh City")
2. Click nút "Get Weather"
3. Xem thông tin thời tiết hiển thị:
   - Tên thành phố
   - Nhiệt độ hiện tại (°C)
   - Độ ẩm (%)
   - Mô tả thời tiết
   - Emoji biểu tượng thời tiết

## 🌦️ Weather Icons

Ứng dụng hiển thị emoji tương ứng với mã thời tiết:

- ⛈ - Thunderstorm (200-299)
- 🌧 - Drizzle/Rain (300-599)
- ❄ - Snow (600-699)
- 🌫 - Mist/Fog (700-799)
- ☀ - Clear sky (800)
- ☁ - Clouds (801-809)

## 🚀 Build Production

Build ứng dụng cho môi trường production:

```bash
ng build
```

Hoặc build với optimization:

```bash
ng build --configuration production
```

Files build sẽ được tạo trong thư mục `dist/`.

## 🧪 Testing

Chạy unit tests:

```bash
ng test
```

Chạy end-to-end tests:

```bash
ng e2e
```

## 🐛 Xử lý lỗi thường gặp

### Lỗi Zone.js

Nếu gặp lỗi `NG0908: In this configuration Angular requires Zone.js`:

**Giải pháp:** Thêm zone.js vào `main.ts`:

```typescript
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
```

### Lỗi API Key

Nếu không lấy được dữ liệu:
- Kiểm tra API key có hợp lệ không
- Đảm bảo API key đã được kích hoạt (có thể mất vài phút)
- Kiểm tra kết nối internet

### Lỗi CORS

OpenWeatherMap API hỗ trợ CORS, nhưng nếu gặp lỗi:
- Kiểm tra API endpoint
- Thử dùng proxy configuration trong Angular

## 📝 License

MIT License - Tự do sử dụng cho mục đích học tập và thương mại.

## 👨‍💻 Tác giả

Phát triển bởi [Your Name]

## 🤝 Đóng góp

Contributions, issues và feature requests luôn được chào đón!

## 📞 Liên hệ

- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Cảm ơn

- [OpenWeatherMap](https://openweathermap.org/) - API dữ liệu thời tiết
- [Angular](https://angular.dev/) - Framework
- Cộng đồng Angular Việt Nam

---

⭐ Nếu project này hữu ích, đừng quên cho một star nhé!