import { NextApiRequest, NextApiResponse } from "next";
import { renderToString } from "react-dom/server";
import puppeteer from "puppeteer";

import IssuePreview from "../../components/IssuePreview";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const html = renderToString(
    <IssuePreview
      issue={{
        title: "test",
        author: "author",
        url: "any",
        createdAt: "01/01/2000",
        number: 1,
      }}
    />
  );

  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 400,
    height: 70,
    deviceScaleFactor: 2,
  });
  await page.setContent(html);
  const screenshot = await page.screenshot({
    omitBackground: true,
  });
  await browser.close();

  res.status(200).setHeader("Content-Type", "image/png").send(screenshot);
};
