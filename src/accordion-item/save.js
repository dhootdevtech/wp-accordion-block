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
		isOpen,
		paddingContent,
		contentBgcolor,
		contentColor,
		iconType
	} = attributes;

	const iconMap = {
		plus: <PlusIcon />,
		minus: <MinusIcon />,
		ChevronUpIcon: <ChevronUpIcon />,
		ChevronDownIcon: <ChevronDownIcon />
	};

	const HeadingTag = titleTag;

	const contentStyle = {
		paddingTop: paddingContent?.top,
		paddingRight: paddingContent?.right,
		paddingBottom: paddingContent?.bottom,
		paddingLeft: paddingContent?.left,
		backgroundColor: contentBgcolor,
		color: contentColor
	}
    

	return (
		<div { ...useBlockProps.save() }>
			<div className="wp-accordion-item">

				<div className="wp-accordion-header">

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
