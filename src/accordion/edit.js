import {
	InnerBlocks,
	useBlockProps
} from '@wordpress/block-editor';

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={[
					'wp-accordion/accordion-item'
				]}
				template={[
					['wp-accordion/accordion-item']
				]}
			/>
		</div>
	);
}