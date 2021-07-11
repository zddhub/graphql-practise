import React from 'react';
import {gql, useQuery} from '@apollo/client';
import { Layout, QueryResult } from '../components';
import ModuleDetail from '../components/module-detail';

export const GET_TRACK = gql`
  query getTrackAndModule($trackId: ID!, $moduleId: ID!) {
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
    module(id: $moduleId) {
      id
      title
      videoUrl
      content
    }
  }
`

const Module = ({trackId, moduleId}) => {
  const {loading, error, data} = useQuery(GET_TRACK, {variables: {trackId, moduleId}})
  return <Layout fullWidth>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail track={data?.track} module={data?.module}/>
      </QueryResult>
    </Layout>;
};
export default Module;
