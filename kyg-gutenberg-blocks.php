<?php

/**
 * Plugin Name:       Kyguney Gutenberg Blocks
 * Description:       Include custom Gutenberg Blocks with shoelace components library.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Kyguney
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       kyg-gutenberg-blocks
 *
 * @package           create-block
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

function kyg_gutenberg_blocks_register_category($categories)
{
	return array_merge(array(array(
		'slug'  => 'customBlocks',
		'title' => 'KYG Blocks'
	)), $categories);
}

function kyg_gutenberg_blocks_category_run()
{
	if (version_compare(get_bloginfo('version'), '5.8', '>=')) {
		add_filter('block_categories_all', 'kyg_gutenberg_blocks_register_category', 99999999);
	} else {
		add_filter('block_categories', 'kyg_gutenberg_blocks_register_category', 99999999);
	}
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function kyg_gutenberg_blocks_block_init()
{
	register_block_type(__DIR__ . '/build/card/');
	register_block_type(__DIR__ . '/build/image-comparer/');
}
add_action('init', 'kyg_gutenberg_blocks_block_init');


function kyg_gutenberg_blocks_register_plugin_styles()
{
	wp_enqueue_style('shoelace-style', "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/themes/light.css");
	wp_enqueue_script('shoelace-script', "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/shoelace-autoloader.js", array(), false, true);
}
// Register style sheet.
add_action('enqueue_block_assets', 'kyg_gutenberg_blocks_register_plugin_styles', 99999);

function kyg_gutenberg_blocks_dd_module_to_my_script($tag, $handle, $src)
{
	if ("shoelace-script" === $handle) {
		$tag = '<script type="module" src="' . esc_url($src) . '"></script>';
	}

	return $tag;
}
add_filter("script_loader_tag", "kyg_gutenberg_blocks_dd_module_to_my_script", 10, 3);


add_action('plugins_loaded', 'kyg_gutenberg_blocks_category_run', 10, 1);
