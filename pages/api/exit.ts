import { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse){
  res.clearPreviewData();
  res.writeHead(307,{Location:'/'});
  res.end();
}