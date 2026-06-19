/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { PlusIcon, ChevronIcon, ArrowIcon, MinusIcon } from '../icons';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
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
		borderRadius
	} = attributes;

	const iconMap = {
		plus: <PlusIcon />,
		minus: <MinusIcon />,
		chevron: <ChevronIcon />,
		arrow: <ArrowIcon />
	};

	const HeadingTag = titleTag;
	const titleStyles = {
		fontSize: fontSize,
		fontWeight: fontWeight,
	};
    
	const titleWithtoogle = {
		backgroundColor: titleBgColor,
		color: titleColor,
		padding: padding,
		border: border,
		borderRadius: borderRadius
	}
    

	return (
		<div { ...useBlockProps.save() }>
			<div className="wp-accordion-item">

				<div className="wp-accordion-header" style = {titleWithtoogle}>

					<RichText.Content
						tagName={ HeadingTag }
						className="wp-accordion-title"
						value={ title }
						style={ titleStyles }
					/>

					

					<span
						className="wp-accordion-icon"
						data-icon={iconType}
						data-open="false"
					>
					{ iconMap[iconType] }
					</span>


					

				</div>
                
				
				<div className="wp-accordion-content">
					<InnerBlocks.Content />
				</div>

			</div>
		</div>
	);
}
