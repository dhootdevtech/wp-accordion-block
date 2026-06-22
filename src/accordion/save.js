import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import './style.scss';

export default function save({ attributes}) {
		const { openFirst, singleOpen, iconType, titleBgColor, titleColor, fontSize,fontWeight, paddingLeftRightTitle, paddingTopBottomTitle, border, borderRadius } = attributes;
	return (
		<div {...useBlockProps.save({
				className: 'wp-accordion'
			})}
		style={{
				'--accordion-bg': titleBgColor,
				'--accordion-color': titleColor,
				'--accordion-font-size': fontSize,
				'--accordion-font-weight': fontWeight,
				'--accordion-border': border,
				'--accordion-border-radius': borderRadius,
				'--accordion-padding-top': paddingTopBottomTitle?.top,
				'--accordion-padding-right': paddingLeftRightTitle?.right,
				'--accordion-padding-bottom': paddingTopBottomTitle?.bottom,
				'--accordion-padding-left': paddingLeftRightTitle?.left,
			}}
		data-icon-type={iconType}
		data-open-first={openFirst}
		data-single-open={singleOpen}
		>
			<InnerBlocks.Content />
		</div>
	);
}