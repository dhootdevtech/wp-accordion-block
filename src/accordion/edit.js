import {
	InnerBlocks,
	InspectorControls,
	useBlockProps
} from '@wordpress/block-editor';

import {
	PanelBody,
	ToggleControl
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { openFirst,singleOpen } = attributes;
	return (
		<>
		<InspectorControls>
		<PanelBody title="Accordion Settings">

			<ToggleControl
				label="Open First Item"
				checked={ openFirst }
				onChange={ (value) =>
					setAttributes({ openFirst: value })
				}
			/>

			<ToggleControl
				label="Allow Only One Open"
				checked={ singleOpen }
				onChange={ (value) =>
					setAttributes({ singleOpen: value })
				}
			/>

		</PanelBody>
	</InspectorControls>
	<div {...useBlockProps()}>
			<InnerBlocks

				allowedBlocks={[
					'wp-accordion/accordion-item'
				]}
				template={[
					['wp-accordion/accordion-item']
				]}
				templateLock={ false }
			/>
		</div>
	</>
	);
}