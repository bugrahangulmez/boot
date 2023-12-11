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
} = require("./data")

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
}

const { CourtReservation } = require("./functions")

const bgratc = "45856276834"
const bugrapass = "71936582"

const yusuftc = "18821832878"
const yusufpass = "Artisboy67"

const beyzatc = "51421817920"
const beyzapass = "Beyza1996"

const tc = beyzatc
const password = beyzapass

// !!! RANDEVU ALACAĞIN GÜNÜ KONTROL ETMEYİ UNUTMA !!!

const seans = persembe1.btn11
const kort = CORTS.KAPALI_5

// !!! RANDEVU ALACAĞIN SAATİ KONTROL ET !!!

// DAKİKA VE SANİYE "O" OLARAK KALSIN

const hourInputVar = 21
const minuteInputVar = 0
const secondInputVar = 0

// !!! GÜNÜN YANINDAKİ "btn" KISMINDA DOĞRU btn'yi SEÇTİĞİNDEN EMİN OL !!!

// DAHA SONRA "npm run dev" KOMUTU İLE BOTU ÇALIŞTIRABİLİRSİN

CourtReservation(
  tc,
  password,
  seans,
  kort,
  hourInputVar,
  minuteInputVar,
  secondInputVar
)

// Fonksiyona parametre olarak verilecek değişkenlerin sırası;
// 1 - Tc kimlik no (Kullanıcı adı) = tc
// 2 - şifre = password
// 3 - Seans = seans
// 4 - Kort = kort
// 5 - Saat = hourInputVar
// 6 - Dakika (Dakika hep 0 olarak kalsın!) = minuteInputVar
// 7 - Saniye (Saniye hep 0 olarak kalsın!) = secondInputVar

// module.exports = { CourtReservation, CORTS, SEANS };
