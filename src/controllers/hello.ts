import { Request, Response } from "express";

const hello = (req: Request, res: Response) => {
  return res.status(200).json({ data: "Hello World!", has_error: false });
};

export {hello}