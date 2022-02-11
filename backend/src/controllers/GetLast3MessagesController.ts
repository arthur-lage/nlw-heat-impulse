import { Request, Response } from "express";
import { GetLast3MessageService } from "../services/GetLast3MessagesService";

class GetLast3MessagesController {
  async handle(req: Request, res: Response) {
    const service = new GetLast3MessageService();

    const results = await service.execute();

    return res.json(results);
  }
}

export { GetLast3MessagesController };
