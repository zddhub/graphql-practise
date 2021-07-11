import fetch from "node-fetch";


const resolvers = {
  Query: {
    tracksForHome: (_, __,  { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome()
    },
    tracksForHomeFetch: async () => {
      const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
      const res = await fetch(`${baseUrl}/tracks`);
      return res.json();
    },
    track: (_, {id},  { dataSources }) => {
      return dataSources.trackAPI.getTrack(id)
    },
    module: (_, {id},  { dataSources }) => {
      return dataSources.trackAPI.getModule(id)
    }
  },
  Track: {
    author: ({authorId}, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId)
    },
    modules: ({id}, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id)
    }
  }
};

export default resolvers
