import { getData } from "./app.js"; // app.js sayfasındaki getData fonksiyonu çektik.

const number = 1  // fonksiyonda bulunan number parametresine bir sayı atadık.
//atama yapmayıp direkt olarak getData(1)'de yazılabilirdi.
getData(number)

//ayrıca package.json dosyasına "type": "module", eklemeyi unutmamanız gerekiyor.