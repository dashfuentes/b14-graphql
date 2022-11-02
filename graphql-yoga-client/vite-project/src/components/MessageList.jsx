import React from "react";
import { gql, useQuery } from "@apollo/client";

export const GET_MESSAGES = gql`
	{
		getMessages {
			_id
			title
			author
			content
		}
	}
`;
export default function MessageList() {
	const { error, data } = useQuery(GET_MESSAGES);

	if (error) return <h1>Error: {{ error }}</h1>;
	if (data) {
		console.log(data);
	}

	return (
		<div className="row">
			<div className="col-md-6 offset-md-3">
				{data &&
					data.getMessages.map(({ _id, title, author, content }) => (
						<div className="card m-2" data-id={_id}>
							<div className="card-body">
								<h4>{title}</h4>
								<h4>{author}</h4>
								<h4>{content}</h4>
							</div>
							<button className="btn btn-danger">Delete</button>
						</div>
					))}
			</div>
		</div>
	);
}
