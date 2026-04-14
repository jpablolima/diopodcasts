import * as http from  "http";
import { IncomingMessage, ServerResponse } from "http";
import { getListEpisodes, getFilterEpisodes } from  "./controllers/podcasts-controller";
import {Routes} from "./routes/routes";


const  server  = http.createServer( async (req:http.IncomingMessage, res:ServerResponse) => {

   const [baseUrl,queryString] = req.url?.split("?") ?? ["", ""];

    console.log(baseUrl);
    console.log(queryString);

    if (req.method ===  "GET" && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res);
    }

    if (req.method === "GET" && baseUrl ===  Routes.EPISODE){
       await getFilterEpisodes(req, res);
    };
});

server.listen(3333, () => {
    console.log("Servidor iniciado na porta 3333");
})