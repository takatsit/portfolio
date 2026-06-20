import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";

const BASE_URL = "http://localhost:3000";
const OUT_DIR = "./screenshots";

const sections = [
  { name: "01_hero", hash: "" },
  { name: "02_services", hash: "#services" },
  { name: "03_stats", hash: "#stats" },
  { name: "04_cases", hash: "#cases" },
  { name: "05_gallery", hash: "#gallery" },
  { name: "06_testimonials", hash: "#testimonials" },
  { name: "07_process", hash: "#process" },
  { name: "08_faq", hash: "#faq" },
  { name: "09_profile", hash: "#profile" },
  { name: "10_contact", hash: "#contact" },
];

await mkdir(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

// Full page screenshot
console.log("撮影中: full page...");
await page.goto(BASE_URL, { waitUntil: "networkidle2" });
await new Promise(r => setTimeout(r, 2000));
await page.screenshot({ path: `${OUT_DIR}/00_fullpage.png`, fullPage: true });
console.log("✓ 00_fullpage.png");

// Section screenshots
for (const section of sections) {
  const url = `${BASE_URL}/${section.hash}`;
  console.log(`撮影中: ${section.name}...`);
  await page.goto(url, { waitUntil: "networkidle2" });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: `${OUT_DIR}/${section.name}.png` });
  console.log(`✓ ${section.name}.png`);
}

await browser.close();
console.log(`\n完了！screenshots/ フォルダに保存されました。`);
