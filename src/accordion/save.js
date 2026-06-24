import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import './style.scss';

export default function save({ attributes}) {
		const { openFirst, 
			singleOpen, 
			iconType, 
			titleBgColor, 
			titleBgHoverColor,
			titleBgActiveColor, 
			titleColor, 
			titleHoverColor,
			titleActiveColor, 
			fontSize,
			fontWeight, 
			border, 
			borderRadius } = attributes;
	return (
		<div {...useBlockProps.save({
				className: 'wp-accordion' 
			})}
		style={{
				'--accordion-bg': titleBgColor,
				'--accordion-bg-hover': titleBgHoverColor,
				'--accordion-bg-active': titleBgActiveColor,
				'--accordion-color-hover': titleHoverColor,
				'--accordion-color-active': titleActiveColor,
				'--accordion-color': titleColor,
				'--accordion-font-size': fontSize,
				'--accordion-font-weight': fontWeight,
				'--accordion-border': border,
				'--accordion-border-radius': borderRadius,
			}}
		data-icon-type={iconType}
		data-open-first={openFirst}
		data-single-open={singleOpen}
		>
			<InnerBlocks.Content />
		</div>
	);
}