import type { NextApiRequest, NextApiResponse } from "next";

import coffeeShops from "../../data/coffee-shops";

type ThrottleType = "minimal" | "aggressive" | "none";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const throttling = req.query?.throttling?.toString() ?? "none";
  await getThrottlePromise(throttling);
  res.status(200).json(coffeeShops);
}

function getThrottlePromise(level: ThrottleType | string): Promise<void> {
  switch (level) {
    case "minimal":
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    case "aggressive":
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 5000);
      });
    case "none":
    default:
      return Promise.resolve();
  }
}
