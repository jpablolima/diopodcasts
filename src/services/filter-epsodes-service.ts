import { repositoryPodcast } from "../repositories/podcasts-repository";

export const  serviceListEpisodes = async  (podcastName:string) => {
    const  data = await repositoryPodcast(podcastName);

    return data;
}