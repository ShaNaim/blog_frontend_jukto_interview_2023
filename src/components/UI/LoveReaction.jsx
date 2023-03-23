import React from "react";

export default function LoveReaction({ liked = false }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height="100%"
			fill="none"
			viewBox="0 0 16 16"
		>
			<path
				fill="url(#paint0_linear)"
				d="M8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0V0Z"
			/>
			<path
				fill="#fff"
				d="M10.4732 4C8.27523 4 8.00023 5.824 8.00023 5.824C8.00023 5.824 7.72623 4 5.52823 4C3.41423 4 2.79823 6.222 3.05623 7.41C3.73623 10.55 8.00023 12.75 8.00023 12.75C8.00023 12.75 12.2652 10.55 12.9452 7.41C13.2022 6.222 12.5852 4 10.4732 4Z"
			/>
			<defs>
				<linearGradient id="paint0_linear" x1="8" x2="8" y2="16" gradientUnits="userSpaceOnUse">
					<stop stopColor={liked ? "#FF6680" : "#9c9494"} />
					<stop offset="1" stopColor={liked ? "#E61739" : "#706c6c"} />
				</linearGradient>
			</defs>
		</svg>
	);
}
