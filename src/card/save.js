import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save(props) {
	const { attributes } = props;
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<sl-card className="card-overview">
				{attributes.headerVisibility !== false ? (
					<RichText.Content
						tagName="div"
						slot="header"
						className="card-header"
						value={attributes.headerContent}
					/>
				) : null}
				{attributes.mediaId > 0 && <img src={attributes.mediaUrl} />}
				<RichText.Content
					tagName="p"
					className="card-content"
					value={attributes.content}
				/>
				<div
					slot="footer"
					style={{ justifyContent: attributes.buttonPosition }}
				>
					<sl-button
						variant="primary"
						href={attributes.buttonUrl}
						target={attributes.newTabField ? "_blank" : "_self"}
					>
						{attributes.buttonText}
					</sl-button>
				</div>
			</sl-card>
		</div>
	);
}
