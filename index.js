require("dotenv").config();
const puppeteer = require("puppeteer");

const inputClick = [
    "div.office-form-question-element > div > div:nth-child(2) > div > label > span",
    "div.office-form-question-body > div:nth-child(3) > div > div.office-form-question-element > div > div:nth-child(2) > div > label > span > span",
    "div.office-form-question-body > div:nth-child(4) > div > div.office-form-question-element > div > div:nth-child(2) > div > label > span > span",
    "div.office-form-body > div.office-form-navigation-container > div.office-form-button-container > button"
];
const link = process.env.FORM_URL
const robo = async(url) => {
    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: "./user_data",
    });
    const page = await browser.newPage();
    await page.goto(url);
    const clicker = async(item) => {
        await page.waitForSelector(item);
        await page.click(item);
    };
    inputClick.map(clicker);
};
try {
    robo(link);
} catch (error) {
    console.log(error);
}