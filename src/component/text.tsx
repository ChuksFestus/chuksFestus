import { device } from "@/utils";
import styled, { css } from "styled-components";

interface Kinds {
	h1: string;
	h6: string;
	base: string;
}

const kinds: Kinds = {
	h1: `
    font-size: clamp(1.875rem, 5.455vw + 1.534rem, 2.625rem);
		line-height: clamp(2.813rem, 4.364vw + 2.54rem, 3.413rem);
    @media ${device.mobileS} {
    	font-size: clamp(3.188rem, 6.511vw + 1.458rem, 5.625rem);
    	line-height: clamp(4.781rem, 6.761vw + 2.985rem, 7.313rem);
    	
    }
    @media ${device.mobileL} {
    	font-size: clamp(3.188rem, 3.125vw + 2.563rem, 4.063rem);
			line-height: clamp(4.781rem, 1.786vw + 4.424rem, 5.281rem);
    }
    @media ${device.laptop} {
    	font-size: clamp(3.188rem, 6.511vw + 1.458rem, 5.625rem);
    	line-height: clamp(4.781rem, 6.761vw + 2.985rem, 7.313rem);
    }
  `,
	h6: `
  	font-size: clamp(1rem, 0.835vw + 0.778rem, 1.313rem);
		line-height: clamp(1.5rem, 0.551vw + 1.354rem, 1.706rem);
  `,
	base: `
    font-size: clamp(1rem, 0vw + 1rem, 1rem);
    line-height: clamp(1.3rem, -0.534vw + 1.642rem, 1.5rem);
  `,
};

interface PProps {
	kind: keyof Kinds;
}

const getKind = ({ kind = "base" }: PProps) => kinds[kind];

const Text = ({
	children,
	kind,
	...rest
}: React.HTMLProps<HTMLElement> & { kind: keyof Kinds }) => {
	const Tag = kind as keyof JSX.IntrinsicElements;

	const StyledText = styled(Tag)`
		color: var(--not-black);
		${css`
			${getKind({ kind })}
		`};
	`;

	return <StyledText {...rest}>{children}</StyledText>;
};

export default Text;
