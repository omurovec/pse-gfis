import { NextApiRequest, NextApiResponse } from "next";
import { renderToString } from "react-dom/server";

import { renderPng } from "./utils";
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

  const png = await renderPng(html);

  res.status(200).setHeader("Content-Type", "image/png").send(png);
};
