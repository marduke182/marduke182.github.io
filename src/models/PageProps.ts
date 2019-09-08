import PathContext from './PathContext';
import PageResources from './PageResources';
import { PostGraphqlResponse } from '../../types';

interface PageProps {
  data: PostGraphqlResponse;
  location: Location;
  pageResources?: PageResources;
  pathContext: PathContext;
}

export default PageProps;
