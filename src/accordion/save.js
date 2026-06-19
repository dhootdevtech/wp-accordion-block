import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import './style.scss';

export default function save() {
	return (
		<div {...useBlockProps.save()}>
			<InnerBlocks.Content />
		</div>
	);
}