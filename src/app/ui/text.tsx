import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { device } from "../lib/utils";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
	variant: Variant;
}

type RefType = {
	h1: HTMLHeadingElement;
	h2: HTMLHeadingElement;
	h3: HTMLHeadingElement;
	h4: HTMLHeadingElement;
	h5: HTMLHeadingElement;
	h6: HTMLHeadingElement;
	p: HTMLParagraphElement;
};

const styles: { [K in Variant]: ReturnType<typeof css> } = {
	h1: css`
		font-size: clamp(1.875rem, 5.455vw + 1.534rem, 2.625rem);
		line-height: clamp(2.813rem, 4.364vw + 2.54rem, 3.413rem);
		@media ${device.mobileS} {
			font-size: clamp(3.188rem, 6.511vw + 1.458rem, 5.625rem);
			line-height: clamp(4.781rem, 6.761vw + 2.985rem, 7.313rem);
		}
		@media ${device.laptop} {
			font-size: clamp(3.188rem, 6.511vw + 1.458rem, 5.625rem);
			line-height: clamp(4.781rem, 6.761vw + 2.985rem, 7.313rem);
		}
	`,
	h2: css`
		font-size: clamp(2.375rem, 4.841vw + 1.089rem, 4.188rem);
		line-height: clamp(3.563rem, 5.025vw + 2.228rem, 5.444rem);
	`,
	h3: css``,
	h4: css``,
	h5: css``,
	h6: css`
		font-size: clamp(1rem, 0.835vw + 0.778rem, 1.313rem);
		line-height: clamp(1.5rem, 0.551vw + 1.354rem, 1.706rem);
	`,
	p: css`
		font-size: clamp(1rem, 0vw + 1rem, 1rem);
		line-height: clamp(1.3rem, -0.534vw + 1.642rem, 1.5rem);
	`,
};

const StyledText = styled.div<TextProps>`
	${({ variant }) => styles[variant]}
`;

const Text = forwardRef<RefType[Variant], TextProps>(({ variant, children, ...props }, ref) => {
	const Tag = variant;

	return (
		<StyledText as={Tag} variant={variant} ref={ref} {...props}>
			{children}
		</StyledText>
	);
});

Text.displayName = "Text";

export default Text;
