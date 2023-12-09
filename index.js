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

const tc = bgratc
const password = bugrapass

// !!! RANDEVU ALACAĞIN GÜNÜ KONTROL ETMEYİ UNUTMA !!!

const seans = sali2.btn1
const kort = CORTS.TOPRAK_2

// !!! RANDEVU ALACAĞIN SAATİ KONTROL ET !!!

// DAKİKA VE SANİYE "O" OLARAK KALSIN

const hourInputVar = 20
const minuteInputVar = 0
const secondInputVar = 0

// NORMAL KİRALAMA İÇİN "hiring" EĞİTMEN KİRALAMA İÇİN "coach" SEÇİLECEK

const hiringTypes = {
  coach: "Dışarıdan Eğitmen",
  hiring: "Kort Kiralama",
}

const type = hiringTypes.coach

const personCount = 2

// !!! GÜNÜN YANINDAKİ "btn" KISMINDA DOĞRU btn'yi SEÇTİĞİNDEN EMİN OL !!!

// DAHA SONRA "npm run dev" KOMUTU İLE BOTU ÇALIŞTIRABİLİRSİN

CourtReservation({
  tc,
  password,
  kort,
  seans,
  hourInput: hourInputVar,
  minuteInput: minuteInputVar,
  secondInput: secondInputVar,
  personCount,
  type,
})

// Fonksiyona parametre olarak verilecek değişkenlerin sırası;
// 1 - Tc kimlik no (Kullanıcı adı) = tc
// 2 - şifre = password
// 3 - Seans = seans
// 4 - Kort = kort
// 5 - Saat = hourInputVar
// 6 - Dakika (Dakika hep 0 olarak kalsın!) = minuteInputVar
// 7 - Saniye (Saniye hep 0 olarak kalsın!) = secondInputVar

// module.exports = { CourtReservation, CORTS, SEANS };
