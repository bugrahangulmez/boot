const {
  pazartesi1,
  pazartesi2,
  sali1,
  sali2,
  carsamba1,
  carsamba2,
  persembe1,
  persembe2,
  cuma1,
  cuma2,
  cumartesi1,
  cumartesi2,
  pazar1,
  pazar2,
  CORTS,
} = require("./data");

const SEANS = {
  pazartesi1,
  pazartesi2,
  sali1,
  sali2,
  carsamba1,
  carsamba2,
  persembe1,
  persembe2,
  cuma1,
  cuma2,
  cumartesi1,
  cumartesi2,
  pazar1,
  pazar2,
};

const { CourtReservation } = require("./functions");

const tc = "45856276834";
const password = "71936582";

const seans = sali2.btn1;
const kort = CORTS.KAPALI_5;

const hourInputVar = 20;
const minuteInputVar = 0;
const secondInputVar = 0;

CourtReservation(
  tc,
  password,
  seans,
  kort,
  hourInputVar,
  minuteInputVar,
  secondInputVar
);

// Fonksiyona parametre olarak verilecek değişkenlerin sırası;
// 1 - Tc kimlik no (Kullanıcı adı) = tc
// 2 - şifre = password
// 3 - Seans = seans
// 4 - Kort = kort
// 5 - Saat = hourInputVar
// 6 - Dakika (Dakika hep 0 olarak kalsın!) = minuteInputVar
// 7 - Saniye (Saniye hep 0 olarak kalsın!) = secondInputVar

// module.exports = { CourtReservation, CORTS, SEANS };
