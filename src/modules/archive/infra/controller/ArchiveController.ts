import { Request, Response } from 'express';
import WebScrapingService from '@modules/archive/services/WebScrapingService';
import ManipulateArchiveService from '@modules/archive/services/ManipulateArchiveService';

export default class ArchiveController {

  public async read(_: Request, response: Response): Promise<Response> {
    try {
      const webScraping = new WebScrapingService();
      await webScraping.execute();

      const manipulateArchive = new ManipulateArchiveService();
      await manipulateArchive.execute();

      return response.json('Teste');
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
