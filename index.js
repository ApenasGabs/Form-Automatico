const puppeteer = require("puppeteer");
const url = `https://forms.office.com/r/tBt7k8vTnD`
const inputClick = [
    ".office-form-question-element > div > div:nth-child(2) > div > label > span",
    "div.office-form-question-body > div:nth-child(3) > div > div.office-form-question-element > div > div:nth-child(2) > div > label > span > span",
    ".office-form-question-body > div:nth-child(4) > div > div.office-form-question-element > div > div:nth-child(2) > div > label > span > span",
];
const sendBtn = [
    "div.office-form-body > div.office-form-navigation-container > div.office-form-button-container > button",
];
const robo = async(site) => {
    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: "./user_data",
    });
    const page = await browser.newPage();
    await page.goto(site);
    const clicker = async(item) => {
        await page.waitForSelector(item);
        await page.click(item);
    };
    clicker(inputClick[0]);
};
try {
    robo(url);
} catch (error) {
    console.log(error);
}