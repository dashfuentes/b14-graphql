import React, { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate, useLocation } from "react-router-dom";

export default function MessageForm() {

	/* Global Variables declaration block */
	const navigate = useNavigate();
	const location = useLocation();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [author, setAuthor] = useState( "" );
	const [_id, setId] = useState("")
	/* Global Variables declaration block */

	/* Location store variables declaration block */
	//double check if we have data
	const getDataObj = location.state;
	const messageId = location.state && location.state._id !== undefined ? location.state._id : "";
	const messageTitle = location.state && location.state.title !== undefined ? location.state.title : "";
	const messagecContent = location.state && location.state.content !== undefined ? location.state.content : "";
	const messageAuthor = location.state && location.state.author !== undefined ? location.state.author : "";
	/* Location store variables declaration block */

	useEffect(() => {
		if ( getDataObj ) {
			setTitle( messageTitle );
			setContent( messagecContent );
			setAuthor( messageAuthor );
			setId(messageId)

		}
	}, [])
	

	/* Mutation declaration block */
	const CREATE_MESSAGE = gql`
		mutation createMessage(
			$title: String!
			$content: String!
			$author: String!
		) {
			createMessage(title: $title, content: $content, author: $author) {
				_id
				title
			}
		}
	`;
	const [createMessage] = useMutation(CREATE_MESSAGE, {});

	const UPDATE_MESSAGE = gql`
		mutation updateMessage(
			$title: String!
			$content: String!
			$author: String!
			$_id: ID!
		) {
			updateMessage(
				input: { title: $title, content: $content, author: $author }
				_id: $_id
			) {
				_id
				author
			}
		}
	`;
	const [updateMessage] = useMutation(UPDATE_MESSAGE, {});
	/* Mutation declaration block */

	return (
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<div className="card">
					<div className="card-body">
						<form
							onSubmit={async (e) => {
								e.preventDefault();
								if (getDataObj) {
									///Execute the update mutation
									await updateMessage( {
										variables: {title, author, content, _id}
									})
								} else {
									//Execute the create mutation
									await createMessage({
										variables: { title, author, content },
									});
								}

								//redirect to the list either update or create action
								navigate("/");
							}}
						>
							<div className="mb-3">
								<label for="title" className="form-label">
									Title
								</label>
								<input
									type="text"
									className="form-control"
									value={title}
									onChange={( e ) => {
										console.log('changing title')
										setTitle( e.target.value )
									}}
								/>
							</div>
							<div className="mb-3">
								<label for="author" className="form-label">
									Author
								</label>
								<input
									type="text"
									className="form-control"
									value={author}
									onChange={(e) => setAuthor(e.target.value)}
								/>
							</div>

							<div className="mb-3">
								<label for="content" className="form-label">
									Content
								</label>
								<input
									type="text"
									className="form-control"
									value={content}
									onChange={(e) => setContent(e.target.value)}
								/>
							</div>

							<button className="btn btn-success btn-block">
								{getDataObj ? "Update" : "Save"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
