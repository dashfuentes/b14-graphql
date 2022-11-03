import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

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

export const DELETE_MESSAGE = gql`
	mutation deleteMessage($id: ID!) {
		deleteMessage(id: $id) {
			_id
			title
			content
		}
	}
`;



export default function MessageList() {
	const { error, data } = useQuery( GET_MESSAGES );

	const [removeMessageById] = useMutation( DELETE_MESSAGE, {
		//fetch the list of messages after remove the last one
		refetchQueries: [{ query: GET_MESSAGES }]
	} );

	if (error) return <h1>Error: {{ error }}</h1>;
	if (data) {
		console.log(data);
	}

	return (
		<div className="row">
			<div className="col-md-6 flex-lg-row w-100 d-flex flex-wrap">
				{data &&
					data.getMessages.map(({ _id, title, author, content }) => (
						<div className="card m-2 w-25" data-id={_id} onClick={e =>{}}>
							<div className="card-body p-0">
								<div>
								<img src="https://i.ytimg.com/vi/xCI1X31n0Z0/maxresdefault.jpg" alt="..." class="img-thumbnail"/>
								</div>
							
								<div>
									<h4 className="font-weight-bold text-md-">
										Title: <span> {title}</span>
									</h4>
								</div>
								<p>
									Author:<span>{author}</span>
								</p>
								<p>{content}</p>
							</div>
							<button
								onClick={ async (e) => {
									let target = e.target;
									let getDocumentId = target.parentElement.getAttribute( "data-id" );
								 return await removeMessageById({variables:{id: getDocumentId}})
									
								}}
								className="btn btn-danger"
							>
								Delete
							</button>
						</div>
					))}
			</div>
		</div>
	);
}
