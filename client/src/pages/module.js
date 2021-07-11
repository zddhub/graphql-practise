import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {Layout, QueryResult } from '../components';
import ModuleDetail from '../components/module-detail';

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
        videoUrl
        content
      }
    }
  }
`

const Module = ({trackId, moduleId}) => {
  const {loading, error, data} = useQuery(GET_TRACK, {variables: {trackId}})
  return <QueryResult loading={loading} error={error} data={data}>
      <ModuleDetail track={data?.track} module={data?.track?.modules.filter(module => module.id === moduleId)[0]}/>
    </QueryResult>;
};
export default Module;
