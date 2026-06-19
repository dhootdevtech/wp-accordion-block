/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {PanelBody,SelectControl, TextControl, ColorPalette, __experimentalBoxControl as BoxControl} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import { PlusIcon, ChevronIcon, ArrowIcon, MinusIcon } from '../icons';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	const {
		title,
		titleTag,
		titleBgColor,
		titleColor,
		isOpen,
		iconType,
		fontSize,
		fontWeight,
		padding,
		border,
		borderRadius,
		paddingContent,
		contentBgcolor,
		contentColor
	} = attributes;

	const iconMap = {
			plus: isOpen ? <MinusIcon /> : <PlusIcon />
			// chevron: isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />,
			// arrow: isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />
		};

	const titleStyles = {
		fontSize: fontSize,
		fontWeight: fontWeight,
	};

	const contentStyle = {
		paddingTop: paddingContent?.top,
		paddingRight: paddingContent?.right,
		paddingBottom: paddingContent?.bottom,
		paddingLeft: paddingContent?.left,
		backgroundColor: contentBgcolor,
		color: contentColor
	}
    
	const titleWithtoogle = {
		backgroundColor: titleBgColor,
		color: titleColor,
		padding: padding,
		border: border,
		borderRadius: borderRadius
	}
    

	return (
		<>
		<InspectorControls>
			<PanelBody title="Accordion Settings">
				<SelectControl
					label="Icon Type"
					value={ iconType }
					options={[
						{ label: 'Plus', value: 'plus' },
						{ label: 'Minus', value: 'minus' },
						{ label: 'Chevron', value: 'chevron' },
						{ label: 'Arrow', value: 'arrow' }
					]}
					onChange={(value) =>
						setAttributes({ iconType: value })
					}
				/>
				
				<p>Background Color</p>
				<ColorPalette
					value={ attributes.titleBgColor }
					onChange={ ( color ) =>
						setAttributes( { titleBgColor: color } )
					}
				/>
                
				<TextControl
					label="Padding"
					value={ attributes.padding }
					onChange={ ( value ) =>
						setAttributes( { padding: value } )
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
			<PanelBody title="Title Settings">
                  <SelectControl
					label="Title Tag"
					value={ titleTag }
					options={ [
						{ label: 'H2', value: 'h2' },
						{ label: 'H3', value: 'h3' },
						{ label: 'H4', value: 'h4' },
						{ label: 'H5', value: 'h5' },
						{ label: 'H6', value: 'h6' },
						{ label: 'Paragraph', value: 'p' }
					] }
					onChange={ ( value ) =>
						setAttributes( {
							titleTag: value,
						} )
					}
				/>


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
			<PanelBody title="Content Settings">
                <ColorPalette
						value={ attributes.contentBgcolor }
						onChange={ ( color ) =>
							setAttributes( { contentBgcolor: color } )
						}
				/>

				<ColorPalette
						value={ attributes.contentColor }
						onChange={ ( color ) =>
							setAttributes( { contentColor: color } )
						}
					/>

				<BoxControl
					label="Padding"
					values={ attributes.paddingContent }
					onChange={ ( value ) =>
						setAttributes( { paddingContent: value } )
					}
				/>

			</PanelBody>
		</InspectorControls>
		
		<div { ...useBlockProps() }>
			<div className="wp-accordion-item">
			
			<div className="wp-accordion-header" style={titleWithtoogle}>

			    <RichText
						tagName={ titleTag }
						className="wp-accordion-title"
						value={ title }
						style={ titleStyles }
						onChange={(value) =>
							setAttributes({ title: value })
						}
					/>

					<span className="wp-accordion-icon" onClick={() => setAttributes({ isOpen: !isOpen}) }>
						{ iconMap[iconType] }
					</span>

				</div>
				
				{ isOpen && (
					<div className="wp-accordion-content" style={contentStyle}>
						<InnerBlocks
							template={[
								[
									'core/paragraph',
									{
										placeholder: 'Accordion Content'
									}
								]
							]}
						/>
					</div>
				)}
			</div>
		</div>
		</>
	);
}
