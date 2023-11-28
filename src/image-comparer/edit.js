import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	Button,
	ResponsiveWrapper,
	RangeControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";

import "./editor.scss";

import SlImageComparer from "@shoelace-style/shoelace/dist/react/image-comparer";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const blockProps = useBlockProps();
	const removeLeftMedia = () => {
		setAttributes({
			mediaLeftId: 0,
			mediaLeftUrl:
				"https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&sat=-100&bri=-5",
		});
	};

	const onSelectLeftMedia = (mediaLeft) => {
		setAttributes({
			mediaLeftId: mediaLeft.id,
			mediaLeftUrl: mediaLeft.url,
		});
	};
	const removeRightMedia = () => {
		setAttributes({
			mediaRightId: 0,
			mediaRightUrl:
				"https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
		});
	};

	const onSelectRightMedia = (mediaRight) => {
		setAttributes({
			mediaRightId: mediaRight.id,
			mediaRightUrl: mediaRight.url,
		});
	};

	const onChangeInitionPositon = (newInitialPosition) => {
		setAttributes({ initialPosition: newInitialPosition });
	};
	return (
		<Fragment>
			<InspectorControls key="setting">
				<PanelBody
					title={__("Block Settings", "kyg-gutenberg-blocks")}
					initialOpen={true}
				>
					<div className="editor-left-image">
						<h4 style={{ margin: "0", padding: "0" }}>
							{__("First Image", "kyg-gutenberg-blocks")}
						</h4>
						<small style={{ marginBottom: "5px", display: "block" }}>
							{__("Add first image for comparer block", "kyg-gutenberg-blocks")}
						</small>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectLeftMedia}
								value={attributes.mediaLeftId}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button
										className={
											attributes.mediaLeftId == 0
												? "editor-post-featured-image__toggle"
												: "editor-post-featured-image__preview"
										}
										onClick={open}
									>
										{attributes.mediaLeftId == 0 &&
											__("Choose an image", "kyg-card-block")}
										{props.mediaLeft != undefined && (
											<ResponsiveWrapper
												naturalWidth={props.mediaLeft.media_details.width}
												naturalHeight={props.mediaLeft.media_details.height}
											>
												<img src={props.mediaLeft.source_url} />
											</ResponsiveWrapper>
										)}
									</Button>
								)}
							/>
						</MediaUploadCheck>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginTop: "10px",
							}}
						>
							{attributes.mediaLeftId != 0 && (
								<MediaUploadCheck>
									<MediaUpload
										title={__("Replace image", "kyg-card-block")}
										value={attributes.mediaLeftId}
										onSelect={onSelectLeftMedia}
										allowedTypes={["image"]}
										render={({ open }) => (
											<Button onClick={open} isDefault isLarge>
												{__("Replace image", "kyg-card-block")}
											</Button>
										)}
									/>
								</MediaUploadCheck>
							)}
							{attributes.mediaLeftId != 0 && (
								<MediaUploadCheck>
									<Button onClick={removeLeftMedia} isLink isDestructive>
										{__("Remove image", "kyg-card-block")}
									</Button>
								</MediaUploadCheck>
							)}
						</div>
					</div>
					<div className="editor-right-image" style={{ marginTop: "15px" }}>
						<h4 style={{ margin: "0", padding: "0" }}>
							{__("Second Image", "kyg-gutenberg-blocks")}
						</h4>
						<small style={{ marginBottom: "5px", display: "block" }}>
							{__(
								"Add second image for comparer block",
								"kyg-gutenberg-blocks",
							)}
						</small>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectRightMedia}
								value={attributes.mediaRightId}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button
										className={
											attributes.mediaRightId == 0
												? "editor-post-featured-image__toggle"
												: "editor-post-featured-image__preview"
										}
										onClick={open}
									>
										{attributes.mediaRightId == 0 &&
											__("Choose an image", "kyg-card-block")}
										{props.mediaRight != undefined && (
											<ResponsiveWrapper
												naturalWidth={props.mediaRight.media_details.width}
												naturalHeight={props.mediaRight.media_details.height}
											>
												<img src={props.mediaRight.source_url} />
											</ResponsiveWrapper>
										)}
									</Button>
								)}
							/>
						</MediaUploadCheck>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginTop: "10px",
							}}
						>
							{attributes.mediaRightId != 0 && (
								<MediaUploadCheck>
									<MediaUpload
										title={__("Replace image", "kyg-card-block")}
										value={attributes.mediaRightId}
										onSelect={onSelectRightMedia}
										allowedTypes={["image"]}
										render={({ open }) => (
											<Button onClick={open} isDefault isLarge>
												{__("Replace image", "kyg-card-block")}
											</Button>
										)}
									/>
								</MediaUploadCheck>
							)}
							{attributes.mediaRightId != 0 && (
								<MediaUploadCheck>
									<Button onClick={removeRightMedia} isLink isDestructive>
										{__("Remove image", "kyg-card-block")}
									</Button>
								</MediaUploadCheck>
							)}
						</div>
					</div>
					<h4 style={{ margin: "0", padding: "0", marginTop: "10px" }}>
						{__("Comparer Position", "kyg-gutenberg-blocks")}
					</h4>
					<small style={{ marginBottom: "5px", display: "block" }}>
						{__(
							"Slide for initial postion of comparer block",
							"kyg-gutenberg-blocks",
						)}
					</small>
					<RangeControl
						label="Initial Position"
						min={0}
						max={100}
						value={attributes.initialPosition}
						onChange={onChangeInitionPositon}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<SlImageComparer
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
				</SlImageComparer>
			</div>
		</Fragment>
	);
}
