/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";
import { withSelect } from "@wordpress/data";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import { ImageComparer } from "./icon";
import metadata from "./block.json";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	/**
	 * @see ./icon.js
	 */
	icon: ImageComparer,

	/**
	 * @see ./edit.js
	 */
	edit: withSelect((select, props) => {
		return {
			mediaLeft: props.attributes.mediaLeftId
				? select("core").getMedia(props.attributes.mediaLeftId)
				: undefined,
			mediaRight: props.attributes.mediaRightId
				? select("core").getMedia(props.attributes.mediaRightId)
				: undefined,
		};
	})(Edit),

	/**
	 * @see ./save.js
	 */
	save,
});
