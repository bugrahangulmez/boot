const puppeteer = require("puppeteer");

async function CourtReservation(
  tc,
  password,
  seans,
  kort,
  hourInput,
  minuteInput,
  secondInput
) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, isMobile: false });

  await page.goto("https://online.spor.istanbul/uyedashboard");

  page.on("dialog", async (dialog) => {
    console.log(`Alert metni: ${dialog.message()}`);
    await dialog.accept();
    console.log("alert okeylendi");
    await page.waitForSelector("#rblKiralikTenisSatisTuru_2");
    await page.click("#rblKiralikTenisSatisTuru_2");
    console.log("kiralık kort inputuna basıldı");
    await page.waitForNavigation();

    await page.waitForSelector("#pageContent_cboxKiralikSatisSozlesmesi");
    await page.click("#pageContent_cboxKiralikSatisSozlesmesi");
    console.log("sözleşme onaylama tuşuna basıldı");
    await page.waitForSelector("#pageContent_lbtnSepeteEkle");
    await page.click("#pageContent_lbtnSepeteEkle");
    console.log("sepete eklendi");
  });

  await page.type("#txtTCPasaport", tc);
  await page.type("#txtSifre", password);
  await page.click("#btnGirisYap");
  await page.goto("https://online.spor.istanbul/satiskiralik");
  const branch = await page.$("#select2-ddlBransFiltre-container");
  await branch.click();
  await page.keyboard.type("Tenis");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");

  await page.waitForNavigation();
  await page.click("#select2-ddlTesisFiltre-container");

  await page.keyboard.type("Florya");
  await page.keyboard.press("Enter");

  await page.waitForNavigation();

  await page.click("#select2-ddlSalonFiltre-container");
  await page.keyboard.type(kort);
  await page.keyboard.press("Enter");

  let hour;
  let minute;
  let second;

  await page.waitForNavigation();

  async function MyIntervalFunc() {
    hour = new Date().getHours();
    minute = new Date().getMinutes();
    second = new Date().getSeconds();
    console.log("interval function");
    if (
      hour === hourInput &&
      minute === minuteInput &&
      second === secondInput
    ) {
      clearInterval(IntervalResp);
      await page.reload();
      console.log("sayfa yenilendi");
      await page.waitForSelector(seans);
      await page.click(seans);
      console.log("reservasyon butonuna tıklandı");
      await page.waitForNavigation();
    }
  }

  const IntervalResp = setInterval(MyIntervalFunc, 1);
}

module.exports = { CourtReservation };
