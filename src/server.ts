import * as http from  "http";
import { IncomingMessage, ServerResponse } from "http";
import { getListEpisodes, getFilterEpisodes } from  "./controllers/podcasts-controller";


const  server  = http.createServer( async (req:http.IncomingMessage, res:ServerResponse) => {

   const [baseUrl,queryString] = req.url?.split("?") ?? ["", ""];

    console.log(baseUrl);
    console.log(queryString);

    if (req.method ===  "GET" && baseUrl ===  "/api/list") {
        await getListEpisodes(req, res);
    }

    if (req.method === "GET" && baseUrl ===  "/api/episode"){
       await getFilterEpisodes(req, res);
    };
});

server.listen(3333, () => {
    console.log("Servidor iniciado na porta 3333");
})