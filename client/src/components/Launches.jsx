import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number,
            mission_name,
            launch_year,
            launch_date_local,
            launch_success
        }
    }
`; 

function Launches() {
  return (
    <>
        <Query query={LAUNCHES_QUERY}>
            {
                ({loading, error, data}) => {
                    if(loading) return <h4>Loading...</h4>
                    if(error) console.log(error)
                    console.log(data);
                    return <h1>test</h1>
                }
            }
        </Query>
    </>
  );
}

export default Launches;