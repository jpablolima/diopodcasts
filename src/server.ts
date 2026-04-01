import * as http from  "http";
import { IncomingMessage, ServerResponse } from "http";
import { getListEpisodes } from  "./controllers/podcasts-controller";


const  server  = http.createServer( async (req:http.IncomingMessage, res:ServerResponse) => {
    if (req.method ===  "GET") {
        await getListEpisodes(req, res);
    }
});

server.listen(3333, () => {
    console.log("Servidor iniciado na porta 3333");
})