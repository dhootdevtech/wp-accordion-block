import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import './style.scss';

export default function save({ attributes}) {
		const { openFirst, 
			singleOpen, 
			iconType, 
			border, 
			borderRadius } = attributes;
	return (
		<div {...useBlockProps.save({
				className: 'wp-accordion' 
			})}
		style={{
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