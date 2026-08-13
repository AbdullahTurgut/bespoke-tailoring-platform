# TERZİ MURAT — PROJECT STATUS

**Project:** Terzi Murat Premium Tailoring Platform
**Repository:** `AbdullahTurgut/bespoke-tailoring-platform`
**Status:** 🟢 Customer Review / Feature Freeze
**Last Updated:** 10 August 2026

---

## 1. Project Overview

Terzi Murat için geliştirilen premium kişiye özel terzilik platformudur.

Platform iki ana bölümden oluşmaktadır:

### Public Website

- Premium ana sayfa
- Damatlık koleksiyonu
- Nişan takımları
- Özel takım oluşturma
- Hakkımızda
- Atelier Gallery
- Randevu oluşturma
- Responsive / mobil uyumlu tasarım

### Admin Panel

- JWT tabanlı admin authentication
- Dashboard
- Randevu yönetimi
- Randevu filtreleme
- Randevu arama
- Randevu detayları
- Randevu status yönetimi
- Pagination
- Dashboard analytics

---

# 2. Public Website

## Home

Ana sayfa premium marka hissine göre tasarlandı.

Mevcut bölümler:

- Hero
- Damatlık Koleksiyonu
- Nişan Takımları
- Why Us / Ustalık Bölümü
- Atelier Gallery
- Footer

### Hero

- Premium takım elbise görseli
- Luxury typography
- Responsive iki kolon yapı
- CTA butonları
- Fade-in animasyonları
- Mobil uyumluluk

---

# 3. Collections

## Damatlık Koleksiyonu

Mevcut ürünler:

- Midnight Black
- Royal Navy

## Nişan Takımları

Mevcut ürünler:

- Executive Grey
- Royal Charcoal

Product Card özellikleri:

- Ürün görseli
- Kategori
- Kumaş
- Kalıp
- Başlangıç fiyatı
- Değerlendirme
- Favori butonu
- Hover interaction
- İncele butonu

Ürün görselleri Fash.ai kullanılarak oluşturuldu.

---

# 4. Custom Suit

Route:

`/create-your-suit`

Kullanıcıların kendi takım elbiselerini oluşturmalarına yönelik özel tasarım alanı bulunmaktadır.

---

# 5. Appointment System

Route:

`/appointment`

Kullanıcılar web sitesi üzerinden randevu oluşturabilmektedir.

Appointment status değerleri:

- `PENDING`
- `CONTACTED`
- `COMPLETED`
- `CANCELLED`

Backend API:

`/api/appointments`

Admin tarafından status değişiklikleri yapılabilmektedir.

---

# 6. Admin Authentication

Admin login sistemi JWT ile çalışmaktadır.

Mevcut yapı:

- Admin login
- JWT token storage
- Protected routes
- AuthContext
- Logout
- JWT expiration handling
- 401 auto logout
- Invalid token handling
- Refresh sonrası authentication kontrolü

### Test Edilen Senaryolar

- Yanlış password → hata
- Başarılı login → dashboard
- F5 sonrası authentication korunuyor
- Token silme → login ekranına dönüş
- Bozuk token → 401 → token silme → login
- JWT expiration → otomatik logout
- Admin logout → başarılı logout toast

Admin hesabı backend üzerinde tanımlıdır.

---

# 7. Admin Panel

Admin layout:

- Dashboard
- Randevular

## Dashboard

Dashboard içerisinde:

### Dashboard Stats

- Toplam Randevu
- Bekleyen
- İletişime Geçildi
- Tamamlandı
- İptal Edilen

### Dashboard Analytics

- Bugünkü Randevu
- Son 7 Gün
- Tamamlanma Oranı
- Aktif Süreç

### Charts

- Status Donut Chart
- Monthly Appointment Trend

Monthly chart:

- Aktif yıl bazlı çalışmaktadır.
- Sadece mevcut yıla ait verileri gösterir.
- Gelecek aylar gizlenir.
- Örneğin Ağustos ayında Ocak–Ağustos arası gösterilir.
- Başlık aktif yılı dinamik olarak gösterir.

Örnek:

`2026 Randevu İstatistiği`

---

# 8. Admin Appointments

Route:

`/admin/appointments`

Özellikler:

- Tüm randevuları görüntüleme
- Status filtreleme
- Müşteri adı ile arama
- Telefon numarası ile arama
- Randevu detay modalı
- Status değiştirme
- Toast bildirimleri
- Pagination

Pagination:

- Sayfa başına 10 randevu
- Dinamik toplam sayfa
- Sayfa değişiminde liste güncellenir

Örneğin:

`1 2 3 ...`

---

# 9. Appointment Search

Admin randevu ekranında:

- Müşteri adına göre arama
- Telefon numarasına göre arama

arama sistemi status filtreleriyle birlikte çalışmaktadır.

Arama veya filtre değiştiğinde pagination ilk sayfaya resetlenmektedir.

---

# 10. About / Hakkımızda

Hakkımızda ayrı bir sayfa olarak oluşturuldu.

Terzi Murat'ın gerçek işletme hikâyesi kullanıldı.

### İşletme Hikâyesi

1996 yılında Gebze'de tekstil konfeksiyonunda başlayan çalışma hayatı;

Pendik, Kartal, Kaynarca, İçmeler ve deri sanayisindeki kot firmasında devam etti.

2004 yılında Gebze Yeni Bağdat Caddesi'nde Terzi Murat adıyla kendi iş yerini açarak profesyonel işletme hayatına geçiş yapıldı.

Günümüzde işletme:

**Hacıhalil Mahallesi, 1218. Sk. 7-3, Gebze / Kocaeli**

adresinde faaliyet göstermektedir.

### Önemli Not

Site içerisinde kullanılan `15+ yıllık ustalık` gibi ifadeler yerine işletmenin gerçek hikâyesinde **2004'ten beri kendi işletmesi** bilgisi esas alınmaktadır.

---

# 11. Atelier Gallery

Instagram Gallery yerine:

**Atelier Gallery**

olarak konumlandırıldı.

Amaç:

Terzi Murat'ın;

- Atölye
- Kumaş
- Ölçü
- Dikim
- Usta işçilik
- Özel tasarım

süreçlerini görsel olarak göstermek.

Galeride Fash.ai ile oluşturulan görseller kullanılmaktadır.

---

# 12. Footer

Footer gerçek işletme bilgileriyle güncellendi.

### İşletme

**TERZİ MURAT**

2004'ten beri.

### Telefon

**0539 313 09 83**

### Adres

**Hacıhalil Mahallesi 1218. Sk. 7-3
Gebze / Kocaeli**

### Çalışma Saatleri

**Hafta içi & Cumartesi:**
10:00 – 19:00

**Pazar:**
12:00 – 16:00

### Instagram

Henüz işletmeye ait Instagram hesabı bulunmadığı için eklenmedi.

---

# 13. Navigation

Navbar:

- Damatlıklar
- Nişan Takımları
- Özel Tasarım
- Hakkımızda
- Takımını Oluştur

Mobil menü responsive olarak çalışmaktadır.

Hakkımızda artık ayrı route olarak kullanılmaktadır.

---

# 14. Responsive Design

Kontroller yapıldı.

Test edilen:

- Desktop
- Tablet
- Mobile

Hero, collection, product cards, gallery, navbar ve admin panel responsive yapıdadır.

Mobil görünümde taşma problemi bulunmamaktadır.

---

# 15. Security / Auth

Axios interceptor yapısı bulunmaktadır.

### Request Interceptor

JWT token:

`Authorization: Bearer <token>`

formatında request header'a eklenmektedir.

### Response Interceptor

401 durumunda:

1. Token silinir.
2. Kullanıcı logout edilir.
3. `/admin/login` ekranına yönlendirilir.

Bu yapı test edilmiştir.

---

# 16. Current Status

## 🟢 CUSTOMER REVIEW / FEATURE FREEZE

Proje müşteri görüşmesine hazır durumdadır.

Bu aşamada yeni büyük özellik geliştirilmesi planlanmamaktadır.

Müşteri görüşmesinde aşağıdaki konularda geri bildirim alınacaktır:

- Tasarım
- Renkler
- Görseller
- Metinler
- İşletme bilgileri
- Ürün bilgileri
- Fiyatlar
- Hakkımızda içeriği
- İletişim bilgileri
- Çalışma saatleri

---

# 17. Backlog — After Customer Review

Müşteri geri bildirimi sonrasında değerlendirilecek konular:

- [ ] Müşteri geri bildirimlerine göre UI revizyonları
- [ ] Gerçek ürün/görsel içeriklerinin son halinin eklenmesi
- [ ] Gerçek Instagram hesabının eklenmesi
- [ ] Gerçek işletme bilgilerinin son kontrolü
- [ ] SEO optimizasyonu
- [ ] Production deployment
- [ ] Domain / hosting
- [ ] Production environment variables
- [ ] Final security review
- [ ] Final responsive review

### Özellikle ertelenen özellikler

- Excel export
- PDF export
- Gelişmiş tarih filtreleme
- Admin bildirim sistemi
- Gelişmiş raporlama

Küçük işletme kullanım senaryosu nedeniyle şu an için gerekli görülmemektedir.

---

# 18. Technical Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hot Toast
- Lucide React

### Backend

- Java
- Spring Boot
- Spring Security
- JWT
- JPA / Hibernate
- MySQL

### Development

- Git
- GitHub
- Docker
- DBeaver
- VS Code / IntelliJ IDEA

---

# 19. Important Routes

### Public

`/`

`/create-your-suit`

`/appointment`

`/about`

### Admin

`/admin/login`

`/admin`

`/admin/appointments`

---

# 20. Freeze Note

**10 August 2026**

Proje müşteri görüşmesine kadar stabil bırakılmıştır.

Yeni özellik geliştirmek yerine müşteri geri bildirimi beklenecektir.

**Next milestone: Customer Review → Feedback → Final Revision**
