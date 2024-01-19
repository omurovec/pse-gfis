import { NextApiRequest, NextApiResponse } from "next";
import { renderToString } from "react-dom/server";
import puppeteer from "puppeteer";

import RepoPreview from "../../components/RepoPreview";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const html = renderToString(
    <RepoPreview
      repo={{
        avatarUrl: "https://avatars.githubusercontent.com/u/90033109?v=4",
        name: "semaphore",
        url: "any",
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
