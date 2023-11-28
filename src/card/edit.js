import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from "@wordpress/block-editor";
import {
	PanelBody,
	Button,
	ResponsiveWrapper,
	ToggleControl,
	TextControl,
	CheckboxControl,
	SelectControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";

import "./editor.scss";

import SlButton from "@shoelace-style/shoelace/dist/react/button";
import SlCard from "@shoelace-style/shoelace/dist/react/card";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const blockProps = useBlockProps();
	const removeMedia = () => {
		props.setAttributes({
			mediaId: 0,
			mediaUrl: "",
		});
	};

	const onSelectMedia = (media) => {
		props.setAttributes({
			mediaId: media.id,
			mediaUrl: media.url,
		});
	};

	const onChangeHeaderVisibility = (newHeaderVisibility) => {
		setAttributes({ headerVisibility: newHeaderVisibility });
	};
	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	};
	const onChangeHeaderContent = (newHeaderContent) => {
		setAttributes({ headerContent: newHeaderContent });
	};
	const onChangeButtonText = (newButtonText) => {
		setAttributes({ buttonText: newButtonText });
	};
	const onChangeButtonUrl = (newButtonUrl) => {
		setAttributes({ buttonUrl: newButtonUrl });
	};
	const onChangeNewTabField = (newNewTabField) => {
		setAttributes({ newTabField: newNewTabField });
	};
	const onChangeButtonPosition = (newButtonPosition) => {
		setAttributes({ buttonPosition: newButtonPosition });
	};

	return (
		<Fragment>
			<InspectorControls key="setting">
				<PanelBody
					title={__("Block Settings", "kyg-gutenberg-blocks")}
					initialOpen={true}
				>
					<div className="editor-card-image">
						<h4 style={{ margin: "0", padding: "0" }}>
							{__("Header Visibility", "kyg-gutenberg-blocks")}
						</h4>
						<small style={{ marginBottom: "5px", display: "block" }}>
							{__("Switch for showing card header", "kyg-gutenberg-blocks")}
						</small>
						<ToggleControl
							label="Toggle Field"
							checked={attributes.headerVisibility}
							onChange={onChangeHeaderVisibility}
						/>
						<h4 style={{ margin: "0", padding: "0", marginTop: "10px" }}>
							{__("Card Image", "kyg-gutenberg-blocks")}
						</h4>
						<small style={{ marginBottom: "5px", display: "block" }}>
							{__("Add image to show in card", "kyg-gutenberg-blocks")}
						</small>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectMedia}
								value={attributes.mediaId}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button
										className={
											attributes.mediaId == 0
												? "editor-post-featured-image__toggle"
												: "editor-post-featured-image__preview"
										}
										onClick={open}
									>
										{attributes.mediaId == 0 &&
											__("Choose an image", "kyg-card-block")}
										{props.media != undefined && (
											<ResponsiveWrapper
												naturalWidth={props.media.media_details.width}
												naturalHeight={props.media.media_details.height}
											>
												<img src={props.media.source_url} />
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
							{attributes.mediaId != 0 && (
								<MediaUploadCheck>
									<MediaUpload
										title={__("Replace image", "kyg-card-block")}
										value={attributes.mediaId}
										onSelect={onSelectMedia}
										allowedTypes={["image"]}
										render={({ open }) => (
											<Button onClick={open} isDefault isLarge>
												{__("Replace image", "kyg-card-block")}
											</Button>
										)}
									/>
								</MediaUploadCheck>
							)}
							{attributes.mediaId != 0 && (
								<MediaUploadCheck>
									<Button onClick={removeMedia} isLink isDestructive>
										{__("Remove image", "kyg-card-block")}
									</Button>
								</MediaUploadCheck>
							)}
						</div>
						<h4 style={{ margin: "0", padding: "0", marginTop: "15px" }}>
							{__("Button Settings", "kyg-gutenberg-blocks")}
						</h4>
						<small style={{ marginBottom: "5px", display: "block" }}>
							{__(
								"Set up footer button url, text, position and new tab setting",
								"kyg-gutenberg-blocks",
							)}
						</small>
						<TextControl
							label="Button Text"
							value={attributes.buttonText}
							onChange={onChangeButtonText}
						/>
						<TextControl
							label="Button Url"
							help="Please fill with full url (http://...)"
							value={attributes.buttonUrl}
							onChange={onChangeButtonUrl}
						/>
						<CheckboxControl
							label="Open New Tab"
							checked={attributes.newTabField}
							onChange={onChangeNewTabField}
						/>
						<SelectControl
							label="Button Position"
							value={attributes.buttonPosition}
							onChange={onChangeButtonPosition}
							options={[
								{ value: "left", label: "Left" },
								{ value: "center", label: "Center" },
								{ value: "right", label: "Right" },
							]}
						/>
					</div>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<SlCard className="card-overview">
					{attributes.headerVisibility !== false ? (
						<RichText
							placeholder="Header text here..."
							tagName="div"
							slot="header"
							className="card-header"
							onChange={onChangeHeaderContent}
							value={attributes.headerContent}
						/>
					) : null}
					{props.media != undefined && <img src={props.media.source_url} />}
					<RichText
						placeholder="Content text here..."
						tagName="p"
						className="card-content"
						onChange={onChangeContent}
						value={attributes.content}
					/>
					<div
						slot="footer"
						style={{ justifyContent: attributes.buttonPosition }}
					>
						<SlButton
							variant="primary"
							href={attributes.buttonUrl}
							target={attributes.newTabField ? "_blank" : "_self"}
						>
							{attributes.buttonText}
						</SlButton>
					</div>
				</SlCard>
			</div>
		</Fragment>
	);
}
