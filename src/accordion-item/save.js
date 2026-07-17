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
		borderRadius,
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
			<div className="wp-accordion-item"
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
						<div class="icons_wrap">
							<span className="icon-plus icon-color">
								<PlusIcon />
							</span>

							<span className="icon-minus icon-color">
								<MinusIcon />
							</span>
						</div>
						</>
					)}

					{iconType === 'chevron' && (
						<>
						<div class="icons_wrap">
							<span className="icon-chevron-down icon-color">
								<ChevronDownIcon />
							</span>

							<span className="icon-chevron-up icon-color">
								<ChevronUpIcon />
							</span>
						</div>
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
