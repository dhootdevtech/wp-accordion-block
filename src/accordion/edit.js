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
	const { openFirst, singleOpen, iconType, titleBgColor, titleColor, fontSize,fontWeight, paddingLeftRightTitle, paddingTopBottomTitle, border, borderRadius } = attributes;
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



		</PanelBody>
		<PanelBody title="Design Settings">
        <p>Background Color</p>
		<ColorPalette
			value={ attributes.titleBgColor }
			onChange={ ( color ) =>
				setAttributes( { titleBgColor: color } )
			}
		/>
						
		<BoxControl
			label="Padding Top Bottom"
			values={ paddingTopBottomTitle }
			sides={['top', 'bottom']}
			onChange={ ( value ) =>
				setAttributes({
					paddingTopBottomTitle: value
				})
			}
			units={[
				{
					value: 'px',
					label: 'px',
					default: 0
				},
				{
					value: '%',
					label: '%',
					default: 0
				},
				{
					value: 'em',
					label: 'em',
					default: 0
				},
				{
					value: 'rem',
					label: 'rem',
					default: 0
				}
			]}
			allowReset={ true }
			resetValues={{
				top: '0px',
				bottom: '0px',
			}}
		/>

		<BoxControl
			label="Padding Left Right"
			values={ paddingLeftRightTitle }
			sides={['left', 'right']}
			onChange={ ( value ) =>
				setAttributes({
					paddingLeftRightTitle: value
				})
			}
			units={[
				{
					value: 'px',
					label: 'px',
					default: 0
				},
				{
					value: '%',
					label: '%',
					default: 0
				},
				{
					value: 'em',
					label: 'em',
					default: 0
				},
				{
					value: 'rem',
					label: 'rem',
					default: 0
				}
			]}
			allowReset={ true }
			resetValues={{
				right: '0px',
				left: '0px'
			}}
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