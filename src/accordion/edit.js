import {
	InnerBlocks,
	InspectorControls,
	useBlockProps
} from '@wordpress/block-editor';

import {
	PanelBody,
	ToggleControl,
	SelectControl,
	TextControl,
	UnitControl,
	ColorPalette,
	__experimentalBoxControl as BoxControl
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { openFirst, 
		singleOpen, 
		iconType, 
		titleBgColor, 
		titleColor, 
		fontSize,
		fontWeight, 
		enableFaqSchema,
		border, 
		borderRadius } = attributes;
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

			<SelectControl
				label="Icon Type"
				value={ iconType }
				options={[
					{ label: 'Plus/Minus', value: 'plus' },
					{ label: 'Chevron Up/Down ', value: 'chevron' },
					{ label: 'None', value: 'none' }
				]}
				onChange={(value) =>
					setAttributes({ iconType: value })
				}
			/>

         <ToggleControl
			label="Enable FAQ Schema"
			checked={ enableFaqSchema }
			onChange={ ( value ) =>
				setAttributes({
					enableFaqSchema: value
				})
			}
		/>

		</PanelBody>
		<PanelBody title="Design Settings">
        <p>Background Color</p>
		<ColorPalette
			value={ attributes.titleBgColor }
			onChange={ ( color ) =>
				setAttributes( { titleBgColor: color } )
			}
		/>
		
		<TextControl
			label="Border"
			value={ attributes.border }
			onChange={ ( value ) =>
				setAttributes( { border: value } )
			}
		/>
		
		<TextControl
			label="Border Radius"
			value={ attributes.borderRadius }
			onChange={ ( value ) =>
				setAttributes( { borderRadius: value } )
			}
		/>
		</PanelBody>
		<PanelBody title="Typography Title Settings">
                    <p>Text Color</p>
					<ColorPalette
						value={ attributes.titleColor }
						onChange={ ( color ) =>
							setAttributes( { titleColor: color } )
						}
					/>

					<TextControl
						label="Font Size"
						value={ attributes.fontSize }
						onChange={ ( value ) =>
							setAttributes( { fontSize: value } )
						}
					/>

					<SelectControl
						label="Font Weight"
						value={ attributes.fontWeight }
						options={ [
							{ label: 'Normal', value: '400' },
							{ label: 'Medium', value: '500' },
							{ label: 'Semi Bold', value: '600' },
							{ label: 'Bold', value: '700' }
						] }
						onChange={ ( value ) =>
							setAttributes( { fontWeight: value } )
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