import { NextApiRequest, NextApiResponse } from "next";

import { fetchGfisData } from "./pse-gfis";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  fetchGfisData()
    .then((data) => {
      const repoData = data?.[Number(req.query.repoIndex ?? 0)];
      if (!repoData) {
        res.status(404).json({
          error: "Repository not found.",
        });
      }
      res.status(302).redirect(repoData?.avatarUrl);
    })
    .catch((err) => {
      res.status(500).json({
        error: "An error occurred while processing the request.",
        err,
      });
    });
};
