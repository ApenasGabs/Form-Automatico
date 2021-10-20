const puppeteer = require("puppeteer");
const url = `https://forms.office.com/r/tBt7k8vTnD`
const robo = async(site) => {
    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: "./user_data"
    });
    const page = await browser.newPage();
    await page.goto(site);
    // await page.screenshot({ path: "example.png" });

    // await browser.close();
};
robo(url);