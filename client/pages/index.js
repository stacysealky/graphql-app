import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_year
            launch_date_local
            launch_success
        }
    }
`;

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
});
const Index = () => (
    <ApolloProvider client={client}>
        <h1>apollo ready to launch</h1>
        <Query query={LAUNCHES_QUERY}>
            {({ loading, error, data }) => {
                if (loading) return <h4>Loading...</h4>;
                if (error) console.log(error);
                console.log(data);
                return <h1>test</h1>;
            }}
        </Query>
    </ApolloProvider>
);

export default Index;
