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
		title,
		titleTag,
		isOpen,
		marginTopBottom,
		marginLeftRight, 
		contentBgcolor,
		contentColor,
		titleBgColor,
		titleColor,
		fontSize,
		fontWeight,
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

	const iconType =
	parentAttributes.iconType || 'plus';

	const marginStyle = {
			marginTop:marginTopBottom?.top,
			marginBottom:marginTopBottom?.bottom,
			marginLeft:marginLeftRight?.left,
			marginRight:marginLeftRight?.right
	};

	const titleStyles = {
			color: parentAttributes.titleColor,
			fontSize: parentAttributes.fontSize,
			fontWeight: parentAttributes.fontWeight
		};

	const titleWithToggle = {
			backgroundColor:
				parentAttributes.titleBgColor,
			paddingTop: paddingTopBottomTitle?.top,
			paddingRight: paddingLeftRightTitle?.right,
			paddingBottom: paddingTopBottomTitle?.bottom,
			paddingLeft: paddingLeftRightTitle?.left,
			border:
				parentAttributes.border,
			borderRadius:
				parentAttributes.borderRadius
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
			<div className="wp-accordion-item">
			
			<div className="wp-accordion-header" style={titleWithToggle}>

			    <RichText
						tagName={ titleTag }
						className="wp-accordion-title"
						value={ title }
						style={ titleStyles }
						placeholder="Enter accordion title..."
						onChange={(value) =>
							setAttributes({ title: value })
						}
					/>

					<span className="wp-accordion-icon" onClick={() => setAttributes({ isOpen: !isOpen}) }>
						{ iconMap[iconType] }
					</span>

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
