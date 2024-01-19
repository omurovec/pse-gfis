import { NextApiRequest, NextApiResponse } from "next";
import { renderToString } from "react-dom/server";

import { renderPng } from "./utils";
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

  const png = await renderPng(html);

  res.status(200).setHeader("Content-Type", "image/png").send(png);
};
