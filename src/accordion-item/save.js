/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { PlusIcon, ChevronUpIcon, ChevronDownIcon, MinusIcon } from '../icons';
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
		titleColor,
		isOpen,
		contentBgcolor,
		contentColor,
		marginTopBottom,
		marginLeftRight,
		paddingLeftRightTitle, 
		paddingTopBottomTitle,
		paddingTopBottomContent,
		paddingLeftRightContent,
		iconType
	} = attributes;

	const iconMap = {
		plus: <PlusIcon />,
		minus: <MinusIcon />,
		ChevronUpIcon: <ChevronUpIcon />,
		ChevronDownIcon: <ChevronDownIcon />
	};

	const HeadingTag = titleTag;

	const titleColorIcons ={
           color: titleColor,
	}

	const contentStyle = {
		paddingTop: paddingTopBottomContent?.top,
		paddingRight: paddingLeftRightContent?.right,
		paddingBottom: paddingTopBottomContent?.bottom,
		paddingLeft: paddingLeftRightContent?.left,
		backgroundColor: contentBgcolor,
		color: contentColor
	}
    
	const marginStyle = {
			marginTop:marginTopBottom?.top,
			marginBottom:marginTopBottom?.bottom,
			marginLeft:marginLeftRight?.left,
			marginRight:marginLeftRight?.right
	};

	const titleWithToggle = {
		paddingTop:
			paddingTopBottomTitle?.top,

		paddingBottom:
			paddingTopBottomTitle?.bottom,

		paddingLeft:
			paddingLeftRightTitle?.left,

		paddingRight:
			paddingLeftRightTitle?.right,
};

	return (
		<div { ...useBlockProps.save({
			style:marginStyle
		}) } >
			<div className="wp-accordion-item">

				<div className="wp-accordion-header" style={titleWithToggle}>

					<RichText.Content
						tagName={ HeadingTag }
						className="wp-accordion-title"
						value={ title }
					/>

					{iconType === 'none' && (
						<>
						</>
					)}

					{iconType === 'plus' && (
						<>
							<span className="icon-plus">
								<PlusIcon />
							</span>

							<span className="icon-minus">
								<MinusIcon />
							</span>
						</>
					)}

					{iconType === 'chevron' && (
						<>
							<span className="icon-chevron-down">
								<ChevronDownIcon />
							</span>

							<span className="icon-chevron-up">
								<ChevronUpIcon />
							</span>
						</>
					)}


					

				</div>
                
				
				<div className="wp-accordion-content view_content">
					<div className="wp-accordion-content-inner" style={contentStyle}>
					<InnerBlocks.Content />
					</div>
				</div>

			</div>
		</div>
	);
}
