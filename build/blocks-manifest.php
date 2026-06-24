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
		'attributes' => array(
			'openFirst' => array(
				'type' => 'boolean',
				'default' => false
			),
			'singleOpen' => array(
				'type' => 'boolean',
				'default' => false
			),
			'iconType' => array(
				'type' => 'string',
				'default' => 'plus'
			),
			'titleBgColor' => array(
				'type' => 'string',
				'default' => '#f7f7f7'
			),
			'titleBgHoverColor' => array(
				'type' => 'string',
				'default' => '#f7f7f7'
			),
			'titleBgActiveColor' => array(
				'type' => 'string',
				'default' => '#f7f7f7'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#2984D1'
			),
			'titleHoverColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'titleActiveColor' => array(
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
			'border' => array(
				'type' => 'string',
				'default' => '1px solid #ddd'
			),
			'borderRadius' => array(
				'type' => 'string',
				'default' => '4px'
			),
			'enableFaqSchema' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'supports' => array(
			'html' => false,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
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
			'isOpen' => array(
				'type' => 'boolean',
				'default' => true
			),
			'paddingLeftRightTitle' => array(
				'type' => 'object',
				'default' => array(
					'right' => '10px',
					'left' => '10px'
				)
			),
			'paddingTopBottomTitle' => array(
				'type' => 'object',
				'default' => array(
					'top' => '10px',
					'bottom' => '10px'
				)
			),
			'paddingTopBottomContent' => array(
				'type' => 'object',
				'default' => array(
					'top' => '10px',
					'bottom' => '10px'
				)
			),
			'paddingLeftRightContent' => array(
				'type' => 'object',
				'default' => array(
					'left' => '10px',
					'right' => '10px'
				)
			),
			'contentBgcolor' => array(
				'type' => 'string',
				'default' => '#ebe9e9'
			),
			'contentColor' => array(
				'type' => 'string',
				'default' => '#000'
			),
			'iconType' => array(
				'type' => 'string',
				'default' => 'plus'
			),
			'marginTopBottom' => array(
				'type' => 'object',
				'default' => array(
					'top' => '10px',
					'bottom' => '10px'
				)
			),
			'marginLeftRight' => array(
				'type' => 'object',
				'default' => array(
					'right' => '10px',
					'left' => '10px'
				)
			),
			'toggleIconsSize' => array(
				'type' => 'string',
				'default' => '15px'
			),
			'toggleIconsWeight' => array(
				'type' => 'string',
				'default' => '200'
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'wp-accordion-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	)
);
