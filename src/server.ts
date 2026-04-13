import * as http from  "http";
import { IncomingMessage, ServerResponse } from "http";
import { getListEpisodes, getFilterEpisodes } from  "./controllers/podcasts-controller";


const  server  = http.createServer( async (req:http.IncomingMessage, res:ServerResponse) => {
    if (req.method ===  "GET" && req.url ===  "/api/list") {
        await getListEpisodes(req, res);
    }

    if (req.method === "GET" && req.url ===  "/api/episode"){
       await getFilterEpisodes(req, res);
    };
});

server.listen(3333, () => {
    console.log("Servidor iniciado na porta 3333");
})