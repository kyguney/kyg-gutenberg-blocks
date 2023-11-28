import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function save(props) {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<sl-image-comparer
				className="comparer-overview"
				position={attributes.initialPosition}
			>
				<img
					slot="before"
					src={attributes.mediaLeftUrl}
					alt={__("First Image", "kyg-card-block")}
				/>
				<img
					slot="after"
					src={attributes.mediaRightUrl}
					alt={__("Second Image", "kyg-card-block")}
				/>
			</sl-image-comparer>
		</div>
	);
}
