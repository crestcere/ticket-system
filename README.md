### Live
Projenin canlı sürümüne [bu adresten](https://singular-buttercream-abab52.netlify.app) ulaşabilirsiniz. 

### Kurulum
Projeyi kurmak için ```npm install``` komutuyla gerekli olan modüllerin kurulması gerekmektedir.  
Gerekli olan modüller kurulduktan sonra ```npm start``` komutuyla proje ayağa kaldırılır.

### Proje Detayı
* Backend olarak mockAPI kullanılarak tasarlanmıştır.
* Admin sayfalarında kullanıcının giriş yapıp yapmadığını kontrol edilmesi için useEffect hook'u ile localstorage kontrol edilmektedir.
    * localstorage'da logged=false durumunda admin sayfasından giriş sayfasına yönlendirilir.
* Authentication useContext api kullanılarak geliştirilmiştir. Admin sayfalarında sarmallandırılmıştır.
* Proje ayağa kaldırıldığında başvuru-oluştur sayfası varsayılan olarak gelmektedir. Sayfada oluşturulan başvuru ile basvuru-basarili sayfası gelmektedir.

### Ekran Görüntüsü
![Home Page](./screenshots/1%20-Home.png)