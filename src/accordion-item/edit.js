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
import { useSelect } from '@wordpress/data';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import { PlusIcon, ChevronUpIcon, ChevronDownIcon, MinusIcon } from '../icons';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes, clientId }) {

	const {
		titleTag,
		title,
		isOpen,
		marginTopBottom,
		marginLeftRight, 
		contentBgcolor,
		contentColor,
		titleBgColor,
		titleBgHoverColor,
		titleBgActiveColor, 
		titleColor, 
		titleHoverColor,
		titleActiveColor,
		fontTitleSize,
		fontTitleWeight, 
        iconColor, 
		iconHoverColor, 
		iconActiveColor,
		iconFontSize,
		paddingLeftRightTitle, 
		paddingTopBottomTitle,
		paddingTopBottomContent,
		paddingLeftRightContent,
		border,
		borderRadius
	} = attributes;

	const parentAttributes = useSelect(
			(select) => {

				const parentId =
					select('core/block-editor')
						.getBlockParents(clientId)[0];

				const parentBlock =
					select('core/block-editor')
						.getBlock(parentId);

				return parentBlock?.attributes || {};

			},
			[clientId]
	);

	console.log(parentAttributes);

	const iconType =
	parentAttributes.iconType || 'plus';

	const marginStyle = {
			marginTop:marginTopBottom?.top,
			marginBottom:marginTopBottom?.bottom,
			marginLeft:marginLeftRight?.left,
			marginRight:marginLeftRight?.right
	};

	const titleStyles = {
			 '--accordion-title-color': titleColor,
			 '--accordion-title-font-size': fontTitleSize,
			 '--accordion-title-font-weight': fontTitleWeight,
		};

	const titleWithToggle = {
			paddingTop: paddingTopBottomTitle?.top,
			paddingRight: paddingLeftRightTitle?.right,
			paddingBottom: paddingTopBottomTitle?.bottom,
			paddingLeft: paddingLeftRightTitle?.left,
			border: parentAttributes.border,
			borderRadius: parentAttributes.borderRadius
		};

	const iconMap = {
			plus: isOpen ? <MinusIcon /> : <PlusIcon />,
			chevron: isOpen ? <ChevronUpIcon />: <ChevronDownIcon />
		};


	const contentStyle = {
		paddingTop: paddingTopBottomContent?.top,
		paddingRight: paddingLeftRightContent?.right,
		paddingBottom: paddingTopBottomContent?.bottom,
		paddingLeft: paddingLeftRightContent?.left,
		backgroundColor: contentBgcolor,
		color: contentColor
	}
    
	return (
		<>
		<InspectorControls>
			<PanelBody title="Accordion Item Margin & Padding">
				<BoxControl
					label="Margin Top Bottom"
					values={ marginTopBottom }
					sides={['top', 'bottom']}
					onChange={ ( value ) =>
						setAttributes({
							marginTopBottom: value
						})
					}
					units={[
						{
							value: 'px',
							label: 'px',
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
					label="Margin Left Right"
					values={ marginLeftRight }
					sides={['left', 'right']}
					onChange={ ( value ) =>
						setAttributes({
							marginLeftRight: value
						})
					}
					units={[
						{
							value: 'px',
							label: 'px',
							default: 0
						}
					]}
					allowReset={ true }
					resetValues={{
						left: '0px',
						right: '0px',
					}}
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
						}
					]}
					allowReset={ true }
					resetValues={{
						right: '0px',
						left: '0px'
					}}
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

				 <p>Accodion Title Bar Background Color</p>
				<ColorPalette
						value={ attributes.titleBgColor }
						onChange={ ( color ) =>
							setAttributes( { titleBgColor: color } )
						}
					/>
				<p>Title Bar Background hover color</p>
				<ColorPalette
						value={ titleBgHoverColor }
						onChange={ ( color ) =>
							setAttributes( { titleBgHoverColor: color } )
						}
				/>
				<p>Title Bar Background active color</p>
				<ColorPalette
						value={ titleBgActiveColor }
						onChange={ ( color ) =>
							setAttributes( { titleBgActiveColor: color } )
						}
				/>

				<p>Text Color</p>
					<ColorPalette
						value={ titleColor }
						onChange={ ( color ) =>
							setAttributes( { titleColor: color } )
						}
					/>
                    
					<p>Title Text Hover Color & Icon</p>
					<ColorPalette
							value={ titleHoverColor }
							onChange={ ( color ) =>
								setAttributes( { titleHoverColor: color } )
							}
					/>

                    <p>Title Text Active Color & Icon</p>
					<ColorPalette
							value={ titleActiveColor }
							onChange={ ( color ) =>
								setAttributes( { titleActiveColor: color } )
							}
					/>

					<SelectControl
						label="Font Size"
						value={ fontTitleSize }
						options={ [
							{ label: '14px', value: '14px' },
							{ label: '15px', value: '15px' },
							{ label: '16px', value: '16px' },
							{ label: '17px', value: '17px' },
							{ label: '18px', value: '18px' },
							{ label: '19px', value: '19px' },
							{ label: '20px', value: '20px' },
							{ label: '21px', value: '21px' },
							{ label: '22px', value: '22px' },
							{ label: '23px', value: '23px' },
							{ label: '24px', value: '24px' }
						] }
						onChange={ ( value ) =>
							setAttributes( { fontTitleSize: value } )
						}
					/>

					<SelectControl
						label="Font Weight"
						value={ fontTitleWeight }
						options={ [
							{ label: 'Normal', value: '400' },
							{ label: 'Medium', value: '500' },
							{ label: 'Semi Bold', value: '600' },
							{ label: 'Bold', value: '700' }
						] }
						onChange={ ( value ) =>
							setAttributes( { fontTitleWeight: value } )
						}
					/>
			</PanelBody>
			<PanelBody title="Icon Settings">
                <SelectControl
						label="Icon Font Size"
						value={ iconFontSize }
						options={ [
							{ label: '14px', value: '14px' },
							{ label: '15px', value: '15px' },
							{ label: '16px', value: '16px' },
							{ label: '17px', value: '17px' },
							{ label: '18px', value: '18px' },
							{ label: '19px', value: '19px' },
							{ label: '20px', value: '20px' },
							{ label: '21px', value: '21px' },
							{ label: '22px', value: '22px' },
							{ label: '23px', value: '23px' },
							{ label: '24px', value: '24px' }
						] }
						onChange={ ( value ) =>
							setAttributes( { iconFontSize: value } )
						}
					/>

               <p>Icon Color</p>
                <ColorPalette
						value={ iconColor }
						onChange={ ( color ) =>
							setAttributes( { iconColor: color } )
						}
				/>

				<p>Icon Hover Color</p>
                <ColorPalette
						value={ iconHoverColor }
						onChange={ ( color ) =>
							setAttributes( { iconHoverColor: color } )
						}
				/>

				<p>Icon Active Color</p>
                <ColorPalette
						value={ iconActiveColor }
						onChange={ ( color ) =>
							setAttributes( { iconActiveColor: color } )
						}
				/>
			</PanelBody>
			<PanelBody title="Content Settings">
				<p>Content background Color</p>
                <ColorPalette
						value={ contentBgcolor }
						onChange={ ( color ) =>
							setAttributes( { contentBgcolor: color } )
						}
				/>

                <p>Content Color</p>
				<ColorPalette
						value={ attributes.contentColor }
						onChange={ ( color ) =>
							setAttributes( { contentColor: color } )
						}
					/>

				<BoxControl
					label="Padding Left Right"
					values={ paddingLeftRightContent }
					sides={['left', 'right']}
					onChange={ ( value ) =>
						setAttributes({
							paddingLeftRightContent: value
						})
					}
					units={[
						{
							value: 'px',
							label: 'px',
							default: 0
						}
					]}
					allowReset={ true }
					resetValues={{
						left: '0px',
						right: '0px',
					}}
				/>

				<BoxControl
					label="Padding Top Bottom"
					values={ paddingTopBottomContent }
					sides={['top', 'bottom']}
					onChange={ ( value ) =>
						setAttributes({
							paddingTopBottomContent: value
						})
					}
					units={[
						{
							value: 'px',
							label: 'px',
							default: 0
						}
					]}
					allowReset={ true }
					resetValues={{
						top: '0px',
						bottom: '0px',
					}}
				/>

              
			</PanelBody>
		</InspectorControls>
		
		<div { ...useBlockProps({
			style: marginStyle
		})}
		>
			<div className={`wp-accordion-item ${
				isOpen ? 'active' : ''
			}`}
			style={{
				'--accordion-title-color': titleColor,
				'--accordion-title-size': fontTitleSize,
				'--accordion-title-weight': fontTitleWeight,
				'--accordion-title-text-hover-color': titleHoverColor,				
				'--accordion-title-text-active-color': titleActiveColor,
				'--accordion-icon-color': iconColor,
				'--accordion-icon-size': iconFontSize,
				'--accordion-icon-hover-color': iconHoverColor,
				'--accordion-icon-active-color': iconActiveColor,
			}}
			>
			
			<div className="wp-accordion-header" style={titleWithToggle}>

			    <RichText
						tagName={ titleTag }
						className="wp-accordion-title"
						value={ title }
						placeholder="Enter accordion title..."
						onChange={(value) =>
							setAttributes({ title: value })
						}
					/>
                   
				   <div class="icons_wrap">
						<span className="wp-accordion-icon icon-color"  onClick={() => setAttributes({ isOpen: !isOpen}) }>
							{ iconMap[iconType] }
						</span>
                    </div>
				</div>
				
				{ isOpen && (
					<div className="wp-accordion-content">
						<div className="wp-accordion-content-inner" style={contentStyle}>
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
					</div>
				)}
			</div>
		</div>
		</>
	);
}
