import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import './style.scss';

export default function save({ attributes}) {
	const { openFirst,singleOpen } = attributes;
	return (
		<div {...useBlockProps.save({
				className: 'wp-accordion'
			})}
		data-open-first={ openFirst }
		data-single-open={ singleOpen }
		>
			<InnerBlocks.Content />
		</div>
	);
}