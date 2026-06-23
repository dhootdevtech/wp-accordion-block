/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log( 'Hello World! (from create-block-wp-accordion-block block)' );
/* eslint-enable no-console */


document.addEventListener('DOMContentLoaded', () => {

	document
		.querySelectorAll('.wp-accordion')
		.forEach((accordionWrapper) => {

			const singleOpen =
				accordionWrapper.dataset.singleOpen === 'true';

			const openFirst =
				accordionWrapper.dataset.openFirst === 'true';

			const items =
				accordionWrapper.querySelectorAll(
					'.wp-accordion-item'
				);

			// Open first item if enabled
			if (openFirst && items.length) {

				items[0].classList.add('active');

				const firstContent =
					items[0].querySelector(
						'.wp-accordion-content'
					);

				firstContent.style.maxHeight =
					firstContent.scrollHeight + 'px';
			}

			items.forEach((item) => {

				const header =
					item.querySelector(
						'.wp-accordion-header'
					);

				const content =
					item.querySelector(
						'.wp-accordion-content'
					);

				header.addEventListener('click', () => {

					if (singleOpen) {

						items.forEach((otherItem) => {

							if (otherItem !== item) {

								otherItem.classList.remove(
									'active'
								);

								const otherContent =
									otherItem.querySelector(
										'.wp-accordion-content'
									);

								otherContent.style.maxHeight = null;
							}

						});

					}

					item.classList.toggle('active');

					if (
						item.classList.contains('active')
					) {

						content.style.maxHeight =
							content.scrollHeight + 'px';

					} else {

						content.style.maxHeight = null;

					}

				});

			});

		});

});

document.addEventListener(
	'DOMContentLoaded',
	() => {

		const faqData = [];

		document
			.querySelectorAll(
				'.wp-accordion-item'
			)
			.forEach((item) => {

				const question =
					item.querySelector(
						'.wp-accordion-title'
					)?.textContent;

				const answer =
					item.querySelector(
						'.wp-accordion-content-inner'
					)?.textContent;

				if (
					question &&
					answer
				) {

					faqData.push({
						'@type':
							'Question',
						name:
							question,
						acceptedAnswer:
							{
								'@type':
									'Answer',
								text:
									answer
							}
					});

				}

			});

		if (
			faqData.length
		) {

			const script =
				document.createElement(
					'script'
				);

			script.type =
				'application/ld+json';

			script.text =
				JSON.stringify({
					'@context':
						'https://schema.org',
					'@type':
						'FAQPage',
					mainEntity:
						faqData
				});

			document.head.appendChild(
				script
			);

		}

	}
);