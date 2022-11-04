import React, {useState} from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate, useLocation } from "react-router-dom";

export default function MessageForm() {

	const navigate = useNavigate();
	const location = useLocation();
  const [title, setTitle] = useState( "" );
  const [content, setContent] = useState( "" );
	const [author, setAuthor] = useState( "" );

	const messagetId = location.state.id;
	console.log( messagetId );
	const messageTitle = location.state.title
	console.log(messageTitle)
	const messagecContent = location.state.content
	const messageAuthor = location.state.author


  
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
  const [createMessage] = useMutation( CREATE_MESSAGE, {
    
  } );

	return (
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<div className="card">
					<div className="card-body">
            <form onSubmit={ async( e ) => {
              e.preventDefault();
              await createMessage( { variables: { title, author, content } } )
              //redirect to the list
              navigate('/')
            } }>
							<div className="mb-3">
								<label for="title" className="form-label">
									Title
								</label>
								<input type="text" className="form-control" value= {messageTitle ? messageTitle : title} onChange={ (e) => setTitle(e.target.value)} />
							</div>
							<div className="mb-3">
								<label for="author" className="form-label">
									Author
								</label>
								<input type="text" className="form-control" value= {author} onChange={ (e) => setAuthor(e.target.value)} />
							</div>

							<div className="mb-3">
								<label for="content" className="form-label">
									Content
								</label>
								<input type="text" className="form-control" value= {content} onChange={ (e) => setContent(e.target.value)} />
							</div>

							<button className="btn btn-success btn-block">Save</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
