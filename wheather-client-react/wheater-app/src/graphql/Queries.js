import { gql } from "@apollo/client";

export const GET_WHEATHER_QUERY = gql`
	query getCityByName($name: String!) {
		getCityByName(name: $name) {
			name
			country
            coord {
                lon
                lat
            }
			wheather {
				summary {
					title
					description
				}
				temperature {
					min
					max
				}
                clouds {
                    visibility
                    humidity
                }
			}
		}
	}
`;
