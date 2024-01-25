import { NextApiRequest, NextApiResponse } from "next";

import { emptySvg } from "./utils";
import { fetchGfisData } from "./pse-gfis";

const renderIssuePreview = (
  darkMode: boolean,
  repo: { owner: string; avatarUrl: string; name: string }
) => `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="none"
        role="img"
        viewBox="0 0 600 50"
        version="1.1"
        width="600"
        height="50"
        aria-hidden="true"
      >
        <style>
        * {
            font-family: -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        }
        .repo-title {
          font-weight: 400;
          font-size: 1rem;
          fill: ${darkMode ? "#e6ecf2" : "#1f2328"};
        }
        .slash {
            fill: ${darkMode ? "#828c96" : "#646c75"};
        }
        .repo-name {
            font-weight: 600;
        }
        </style>
        <text class="repo-title" x="0" y="25">${
          repo.owner
        } <tspan class="slash">/</tspan> <tspan class="repo-name">${
  repo.name
}</tspan></text>
      </svg>
`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  fetchGfisData()
    .then((data) => {
      const issueData = data?.[Number(req.query.repoIndex ?? 0)];
      res
        .status(200)
        .setHeader("Content-Type", "image/svg+xml")
        .send(
          issueData
            ? renderIssuePreview(!req.query.lightMode, issueData)
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
