import { NextApiRequest, NextApiResponse } from "next";

import { fetchGfisData } from "./pse-gfis";
import { emptySvg } from "./utils";

const renderIssuePreview = (
  darkMode: boolean,
  issue: {
    title: string;
    author: string;
    createdAt: string;
    number: number;
  }
) => `
      <svg
        xmlns="http://www.w3.org/2000/svg"
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
        .title {
            font-weight: 600;
            font-size: 1rem;
            fill: ${darkMode ? "white" : "black"};
        }
        .desc {
            font-size: 0.75rem;
            font-weight: 400;
            fill: ${darkMode ? "#848D97" : "#646c75"};
        }
        </style>
        <path fill="${
          darkMode ? "#3fba4f" : "#197f36"
        }" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
        <path fill="${
          darkMode ? "#3fba4f" : "#197f36"
        }" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
        <text class="title" x="25" y="12">${issue.title}</text>
        <text class="desc" x="25" y="30">#${issue.number} opened on ${new Date(
  issue.createdAt
).toDateString()} by ${issue.author}</text>
    </svg>
`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  fetchGfisData()
    .then((data) => {
      const repoData =
        data?.[Number(req.query.repoIndex ?? 0)]?.issues[
          Number(req.query.issueIndex ?? 0)
        ];
      res
        .status(200)
        .setHeader("Content-Type", "image/svg+xml")
        .send(
          repoData
            ? renderIssuePreview(!req.query.lightMode, repoData)
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
