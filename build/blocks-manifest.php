<?php
// This file is generated. Do not modify it manually.
return array(
	'accordion' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wp-accordion/accordion',
		'title' => 'Accordion',
		'category' => 'widgets',
		'icon' => 'menu',
		'description' => 'Accordion Container',
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'accordion-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wp-accordion/accordion-item',
		'version' => '0.1.0',
		'title' => 'Accordion Item',
		'parent' => array(
			'wp-accordion/accordion'
		),
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Accordion Item',
		'example' => array(
			
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'titleBgColor' => array(
				'type' => 'string',
				'default' => '#f7f7f7'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'fontSize' => array(
				'type' => 'string',
				'default' => '18px'
			),
			'fontWeight' => array(
				'type' => 'string',
				'default' => '600'
			),
			'padding' => array(
				'type' => 'string',
				'default' => '15px'
			),
			'border' => array(
				'type' => 'string',
				'default' => '1px solid #ddd'
			),
			'borderRadius' => array(
				'type' => 'string',
				'default' => '4px'
			),
			'iconType' => array(
				'type' => 'string',
				'default' => 'plus'
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'wp-accordion-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
