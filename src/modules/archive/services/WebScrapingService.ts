import fs from 'fs';
import request from 'request';

class WebScrapingService {
  public async execute(): Promise<void> {
   request('http://www.ans.gov.br/images/stories/Plano_de_saude_e_Operadoras/tiss/Padrao_tiss/tiss3/Padrao_TISS_Componente_Organizacional__202012.pdf')
      .pipe(fs.createWriteStream('Arquivo.pdf'));
  }
}

export default WebScrapingService;
