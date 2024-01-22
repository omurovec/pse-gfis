import { NextApiRequest, NextApiResponse } from "next";

import { emptySvg } from "./utils";
import { fetchGfisData } from "./pse-gfis";

const renderRepoPreview = (
  darkMode: boolean,
  repo: { avatarUrl: string; name: string }
) => `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        role="img"
        viewBox="0 0 200 50"
        version="1.1"
        width="200"
        height="50"
        aria-hidden="true"
      >
        <style>
        * {
            font-family: -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        }
        .title {
            font-weight: 600;
            font-size: 1.5rem;
            fill: ${darkMode ? "white" : "black"};
        }
        </style>
        <image href="${
          repo.avatarUrl
        }" height="30" width="30" x="0" y="0" clip-path="inset(0% round 2px)"/>
        <text class="title" x="40" y="20">${repo.name}</text>
    </svg>
`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  fetchGfisData()
    .then((data) => {
      const repoData = data?.[Number(req.query.repoIndex ?? 0)];
      res
        .status(200)
        .setHeader("Content-Type", "image/svg+xml")
        .send(
          repoData
            ? renderRepoPreview(!req.query.lightMode, repoData)
            : emptySvg
        );
    })
    .catch((err) => {
      res.status(500).json({
        error: "An error occurred while processing the request.",
        err,
      });
    });
};
